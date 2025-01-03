import styled from 'styled-components';

export const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 2rem;
    border: solid 1px var(--color-grey-100);
    border-radius: 10px;
    box-shadow: var(--shadow-lg);
    overflow-x: auto;
    width: 100%;
    max-width: 82rem;
`;

export const TableWrapper = styled.div`
    min-width: 1220px;
    width: fit-content;
`;

export const TableOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 1rem;

    input {
        height: 36px;
    }
`;

export const ScheduleHeaderRow = styled.div`
    display: flex;
    background-color: #f7f7f7;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    border-bottom: solid 2px var(--color-grey-300);
`;

export const ScheduleHeaderCell = styled.div`
    display: flex;
    flex-shrink: 0;
    text-align: left;
    border-right: 1px solid #ddd;
    align-items: center;
    padding: 3px;
    gap: 5px;
    position: relative;
    width: ${(props) => props.width || 'auto'}px;

    &:last-child {
        border-right: none;
    }

    &:first-child {
        width: 100px;
    }
`;

export const ScheduleBodyRow = styled.div`
    display: flex;

    &:nth-child(even) {
        background-color: #f9f9f9;
    }
`;

export const ScheduleBodyCell = styled.div`
    border-right: 1px solid #ddd;
    width: ${(props) => props.width || 'auto'}px;
    &:last-child {
        border-right: none;
    }

    &:first-child {
        padding: 8px;
        width: 100px;
    }
`;
