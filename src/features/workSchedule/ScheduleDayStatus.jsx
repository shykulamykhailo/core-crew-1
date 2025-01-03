import { useDispatch } from 'react-redux';
import { toggleDayStatus } from './workScheduleSlice';
import styled from 'styled-components';

const StyledToggle = styled.button`
    font-size: 10px;
    height: 100%;
    width: 100%;
    border: none;
    background-color: ${(props) =>
        props.status ? 'var(--color-brand-100)' : 'var(--color-brand-700)'};

    color: ${(props) =>
        props.status ? 'var(--color-gray-1000)' : 'var(--color-grey-0)'};

    &:hover {
        background-color: ${(props) =>
            props.status ? 'var(--color-brand-200)' : 'var(--color-brand-600)'};
    }
`;

function ScheduleDayStatus({ row, day }) {
    const dispatch = useDispatch();

    const handleToggle = (userId, day) => {
        dispatch(toggleDayStatus({ userId, day }));
    };

    const value = row.schedule?.[Number(day)] ?? false;

    return (
        <StyledToggle
            status={value}
            onClick={() => {
                handleToggle(row.user_id, day);
            }}
        >
            {value ? 'Rest' : 'Work'}
        </StyledToggle>
    );
}

export default ScheduleDayStatus;
