import { useDispatch } from 'react-redux';
import ProductAutocomplete from '../../../ui/ProductAutocomplete';
import WriteOffList from './WtiteOffList';
import { addProductInWriteOffList } from './writeOffListSlice';
import styled from 'styled-components';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 40rem;
    padding: 2rem;
    justify-content: center;
    border: solid 1px var(--color-grey-100);
    border-radius: 10px;
    box-shadow: var(--shadow-lg);
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
`;

function WriteOffPage() {
    const dispatch = useDispatch();

    const handleAddToWriteOffList = (product) => {
        dispatch(addProductInWriteOffList(product));
    };

    return (
        <PageContainer>
            <Header>
                <h2>Waste Products</h2>
                <ProductAutocomplete onAddProduct={handleAddToWriteOffList} />
            </Header>
            <WriteOffList />
        </PageContainer>
    );
}

export default WriteOffPage;
