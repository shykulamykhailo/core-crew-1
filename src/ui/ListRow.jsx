import styled from 'styled-components';
import Button from './Button';

const StyledRow = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px 5px;
    border-bottom: solid 1px var(--color-grey-300);
`;

const StyledInput = styled.input`
    width: 5rem;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    appearance: textfield;
`;

const RowOperations = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;

    &.button {
    }
`;

function ListRow({ product, inputChange, buttonDelete, index }) {
    return (
        <StyledRow>
            <div>
                {index + 1}.{product.productName}
            </div>

            <RowOperations>
                <StyledInput
                    placeholder="Count"
                    type="number"
                    min="0,01"
                    onChange={inputChange}
                />
                <Button onClick={buttonDelete}>Delete</Button>
            </RowOperations>
        </StyledRow>
    );
}

export default ListRow;
