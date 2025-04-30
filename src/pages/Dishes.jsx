import styled from 'styled-components';
import PizzaMenu from '../features/menu/PizzaMenu';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10rem;

    @media (min-width: 1260px) {
        flex-direction: row;
        align-items: flex-start;
    }
`;

function Dishes() {
    return (
        <Container>
            <PizzaMenu />
        </Container>
    );
}

export default Dishes;
