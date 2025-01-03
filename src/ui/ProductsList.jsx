import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ListProductComponent from './ListProductComponent';
import { useState } from 'react';

const Wrapper = styled.div`
    height: 30rem;
    overflow: auto;
`;

const StyledProductsList = styled.div`
    display: table;
    width: 100%;
`;

const TableHeader = styled.div`
    display: table-row;
    background-color: var(--color-grey-100);
    font-weight: bold;
    position: sticky;
    top: 0;
    z-index: 0;
`;

const HeaderCell = styled.div`
    display: table-cell;
    padding: 0 5px;
    border-right: 1px solid var(--color-grey-300);
    resize: horizontal;
    overflow: hidden;
    width: ${(props) => props.width}px;

    &:last-child {
        border-right: none;
    }
`;

function ProductsList() {
    const { items } = useSelector((store) => store.products);

    const [widths, setWidths] = useState([200, 150, 100, 50, 100]);

    const headerColumns = [
        'Product Name',
        'Category',
        'Quantity',
        'Unit',
        'Price per unit',
    ];

    return (
        <Wrapper>
            <StyledProductsList>
                <TableHeader>
                    {headerColumns.map((title, index) => (
                        <HeaderCell key={index}>{title}</HeaderCell>
                    ))}
                </TableHeader>
                {items.map((product) => (
                    <ListProductComponent
                        key={product.id}
                        product={product}
                        widths={widths}
                    />
                ))}
            </StyledProductsList>
        </Wrapper>
    );
}

export default ProductsList;
