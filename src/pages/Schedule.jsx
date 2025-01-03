import styled from 'styled-components';
import WorkScheduleTable from '../features/workSchedule/WorkScheduleTable';

const ScheduleContainer = styled.div`
    display: flex;
    justify-content: center;
`;

function Schedule() {
    return (
        <ScheduleContainer>
            <WorkScheduleTable />
        </ScheduleContainer>
    );
}

export default Schedule;
