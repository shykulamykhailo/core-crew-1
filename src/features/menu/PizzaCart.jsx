import styled from 'styled-components';

const StyledCartContainer = styled.div``;

const StyledImage = styled.img``;

const PizzaInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem 1rem 1rem;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: 15px;
    color: var(--color-brand-800);
`;

const ListComponent = styled.li`
    display: flex;
    justify-content: space-between;
`;

function PizzaCart({ pizza }) {
    return (
        <StyledCartContainer>
            <StyledImage src={pizza.photo} />
            <PizzaInfo>
                <Header>
                    <h4>{pizza.name}</h4>
                    <span>{pizza.price}$</span>
                </Header>
                <StyledList>
                    {pizza.ingridients.map((ingridient, index) => (
                        <ListComponent key={index}>
                            <div>{ingridient.ingridient}</div>
                            <div>{ingridient.count}</div>
                        </ListComponent>
                    ))}
                </StyledList>
            </PizzaInfo>
        </StyledCartContainer>
    );
}

export default PizzaCart;
