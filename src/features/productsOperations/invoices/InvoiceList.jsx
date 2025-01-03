import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    clearInvoice,
    removeProductFromList,
    submitInvoice,
} from './invoiceSlice';
import {
    getProductQuantity,
    updateProductQuantity,
} from '../../../services/apiProducts';
import { fetchProducts } from '../productsData/productsSlice';
import styled from 'styled-components';
import ListRow from '../../../ui/ListRow';
import Button from '../../../ui/Button';

const InvoiceListContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledInvoiceList = styled.ul`
    display: flex;
    flex-direction: column;
    border: solid 2px var(--color-grey-400);
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
    gap: 10px;
`;

function InvoiceList() {
    const [quantities, setQuantities] = useState({});
    const invoiceItems = useSelector((state) => state.invoice.items);

    const dispatch = useDispatch();

    const handleClearInvoice = useCallback(() => {
        dispatch(clearInvoice());
        setQuantities({});
    }, [dispatch]);

    const handleQuantityChange = (id, value) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: value,
        }));
    };

    const handleDeleteProductFromList = (id) => {
        dispatch(removeProductFromList(id));
    };

    const handleSubmitInvoice = async () => {
        await Promise.all(
            invoiceItems.map(async (product) => {
                const countToAdd = quantities[product.id] || 1;

                try {
                    const currentQuantity = await getProductQuantity(
                        product.id
                    );

                    const updatedQuantity = currentQuantity + countToAdd;

                    await updateProductQuantity({
                        count: updatedQuantity,
                        id: product.id,
                    });
                } catch (error) {
                    console.error(
                        `Error updating product ${product.id}:`,
                        error
                    );
                }
            })
        );
        dispatch(submitInvoice());
        dispatch(fetchProducts());
    };

    return (
        <>
            {invoiceItems.length !== 0 && (
                <InvoiceListContainer>
                    <StyledInvoiceList>
                        {invoiceItems.map((product, index) => (
                            <ListRow
                                key={index}
                                index={index}
                                product={product}
                                inputChange={(e) =>
                                    handleQuantityChange(
                                        product.id,
                                        Number(e.target.value)
                                    )
                                }
                                buttonDelete={() =>
                                    handleDeleteProductFromList(product.id)
                                }
                            />
                        ))}
                    </StyledInvoiceList>
                    <div>
                        <Button onClick={() => handleSubmitInvoice()}>
                            Submit invoice
                        </Button>
                        <Button onClick={handleClearInvoice}>clear</Button>
                    </div>
                </InvoiceListContainer>
            )}
        </>
    );
}

export default InvoiceList;
