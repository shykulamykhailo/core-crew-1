import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    getProductQuantity,
    updateProductQuantity,
} from '../../../services/apiProducts';
import { fetchProducts } from '../productsData/productsSlice';
import {
    clearWriteOffList,
    removeProductFromWriteOffList,
    submitWriteOffList,
} from './writeOffListSlice';
import styled from 'styled-components';
import ListRow from '../../../ui/ListRow';
import Button from '../../../ui/Button';

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    border: solid 2px var(--color-grey-400);
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
    gap: 10px;
`;

function WriteOffList() {
    const [quantities, setQuantities] = useState({});
    const writeOffItems = useSelector((state) => state.writeOffList.items);

    const dispatch = useDispatch();

    const handleClearWriteOffList = useCallback(() => {
        dispatch(clearWriteOffList());
        setQuantities({});
    }, [dispatch]);

    const handleDeleteProductFromList = (id) => {
        dispatch(removeProductFromWriteOffList(id));
    };

    const handleQuantityChange = (id, value) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: value,
        }));
    };

    const handleSubmitWriteOffList = async () => {
        await Promise.all(
            writeOffItems.map(async (product) => {
                const countToSubtract = quantities[product.id] || 1;

                try {
                    const currentQuantity = await getProductQuantity(
                        product.id
                    );

                    const updatedQuantity = currentQuantity - countToSubtract;

                    await updateProductQuantity({
                        count: updatedQuantity,
                        id: product.id,
                    });
                } catch (error) {
                    console.error(
                        `Error write-off product ${product.id}:`,
                        error
                    );
                }
            })
        );
        dispatch(submitWriteOffList());
        dispatch(fetchProducts());
    };

    return (
        <>
            {writeOffItems.length !== 0 && (
                <ListContainer>
                    <StyledList>
                        {writeOffItems.map((product, index) => (
                            <ListRow
                                index={index}
                                key={index}
                                product={product}
                                buttonDelete={() =>
                                    handleDeleteProductFromList(product.id)
                                }
                                inputChange={(e) =>
                                    handleQuantityChange(
                                        product.id,
                                        Number(e.target.value)
                                    )
                                }
                            />
                        ))}
                    </StyledList>
                    <div>
                        <Button onClick={handleClearWriteOffList}>clear</Button>
                        <Button onClick={() => handleSubmitWriteOffList()}>
                            Submit Write-off
                        </Button>
                    </div>
                </ListContainer>
            )}
        </>
    );
}

export default WriteOffList;
