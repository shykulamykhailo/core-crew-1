import styled from 'styled-components';

export const TableWrapper = styled.div`
    width: 100%;
    border: solid 3px var(--color-grey-500);
    box-shadow: var(--shadow-lg);
    overflow: auto;
    margin-top: 10px;
`;

export const TableOptions = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const HeaderRow = styled.div`
    display: flex;
    background-color: #f7f7f7;
    font-weight: bold;
    text-align: left;
    user-select: none;
    border-bottom: solid 2px var(--color-grey-300);
`;

export const HeaderCell = styled.div`
    display: flex;
    flex-shrink: 0;
    text-align: left;
    padding: 8px;
    border-right: 1px solid #ddd;
    align-items: center;
    gap: 5px;
    width: ${(props) => props.width || 'auto'}px;
    position: relative;
    min-width: 100px;
    max-width: 400px;

    &:last-child {
        border-right: none;
    }
`;

export const Resizer = styled.button`
    position: absolute;
    top: 0;
    right: -3px;
    height: 100%;
    width: 5px;
    border: none;
    background-color: transparent;
    cursor: col-resize;
    user-select: none;
    touch-action: none;

    &:hover {
        background-color: var(--color-brand-300);
        opacity: 0.5;
    }
`;

export const BodyRow = styled.div`
    display: flex;

    &:nth-child(even) {
        background-color: #f9f9f9;
    }
`;

export const BodyCell = styled.div`
    flex-shrink: 0;
    padding: 8px;
    border-right: 1px solid #ddd;
    width: ${(props) => props.width || 'auto'}px;
    min-width: 100px;
    max-width: 400px;

    &:last-child {
        border-right: none;
    }
`;

export const TablePagination = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 10px;
`;
