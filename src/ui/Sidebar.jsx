import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledSidebar = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: solid 1px var(--color-grey-100);
    border-radius: 10px;
    box-shadow: var(--shadow-lg);
    padding: 1.5rem;
    max-height: fit-content;
    position: relative;
`;

function Sidebar() {
    return (
        <StyledSidebar>
            <NavLink to="products">Products</NavLink>
            <NavLink to="create-new-product">Create Product</NavLink>
            <NavLink to="invoices-page">Add invoice</NavLink>
            <NavLink to="write-off-page">Write-Of List</NavLink>
        </StyledSidebar>
    );
}

export default Sidebar;
