import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../ui/Sidebar';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

function Management() {
    return (
        <Container>
            <Sidebar />
            <Outlet />
        </Container>
    );
}

export default Management;
