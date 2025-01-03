import { useDispatch } from 'react-redux';
import ProductAutocomplete from '../../../ui/ProductAutocomplete';
import { addProductInInvoice } from './invoiceSlice';
import InvoiceList from './InvoiceList';
import styled from 'styled-components';

const InvoicesPageContainer = styled.div`
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

function InvoicesPage() {
    const dispatch = useDispatch();

    const handleAddToInvoice = (product) => {
        dispatch(addProductInInvoice(product));
    };

    return (
        <InvoicesPageContainer>
            <h2>Invoice list</h2>
            <ProductAutocomplete onAddProduct={handleAddToInvoice} />
            <InvoiceList />
        </InvoicesPageContainer>
    );
}

export default InvoicesPage;
