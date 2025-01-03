import styled, { css } from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import useProductSuggestions from '../hooks/useProductsSuggestions';

const StyledInput = styled.input`
    font-size: 1.1rem;
    padding: 5px 8px;
    width: 20rem;
`;

const Dropdown = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    border: 1px solid #ccc;
    max-height: 150px;
    overflow-y: auto;
    background-color: #fff;
`;

const DropdownItem = styled.li`
    padding: 8px;
    cursor: pointer;
    background-color: '#fff';

    ${({ selected }) =>
        selected &&
        css`
            background-color: #e0e0e0;
        `}

    &:hover {
        background-color: #f0f0f0;
    }
`;

function ProductAutocomplete({ onAddProduct, actionType }) {
    const dispatch = useDispatch();

    const {
        inputValue,
        suggestions,
        isDropdownVisible,
        selectedIndex,
        handleInputChange,
        handleSuggestionClick,
        handleKeyDown,
    } = useProductSuggestions();

    const handleAddProductInList = useCallback(
        (product) => {
            if (onAddProduct) {
                onAddProduct(product);
            } else {
                dispatch({ type: actionType, payload: product });
            }
        },
        [dispatch, onAddProduct, actionType]
    );

    return (
        <div>
            <StyledInput
                type="text"
                placeholder="Enter product name"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            {isDropdownVisible && (
                <Dropdown>
                    {suggestions.map((product, index) => (
                        <DropdownItem
                            key={product.id}
                            selected={index === selectedIndex}
                            onClick={() => {
                                handleSuggestionClick(product.productName);
                                handleAddProductInList(product);
                            }}
                        >
                            {product.productName}
                        </DropdownItem>
                    ))}
                </Dropdown>
            )}
        </div>
    );
}

export default ProductAutocomplete;
