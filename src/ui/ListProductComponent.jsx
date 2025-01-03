import styled from 'styled-components';

const StyledProductComponent = styled.li`
    display: table-row;
    padding: 0 5px;
`;

const ProductCell = styled.div`
    display: table-cell;
    padding: 0 10px;
    border-top: 2px solid var(--color-grey-300);
    border-right: 1px solid var(--color-grey-500);
    width: ${(props) => props.width}px;

    &:last-child {
        border-right: none;
    }

    /* &.productName {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    } */
`;

function ListProductComponent({ product, widths }) {
    return (
        <StyledProductComponent>
            <ProductCell width={widths[0]} className="productName">
                {product.productName}
            </ProductCell>
            <ProductCell width={widths[1]}>{product.category}</ProductCell>
            <ProductCell width={widths[2]}>{product.quantity}</ProductCell>
            <ProductCell width={widths[3]}>{product.unit}</ProductCell>
            <ProductCell width={widths[4]}>
                {product.price_per_unit}
            </ProductCell>
        </StyledProductComponent>
    );
}

export default ListProductComponent;
