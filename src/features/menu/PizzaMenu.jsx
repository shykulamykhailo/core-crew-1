import styled from 'styled-components';
import { PIZZAS_LIST } from '../../data/menu/pizza';
import PizzaCart from './PizzaCart';
import { useState } from 'react';
import ButtonIcon from '../../ui/ButtonIcon';
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md';

const StyledPizzaMenu = styled.div`
    display: flex;
    position: relative;
    border: solid 1px var(--color-grey-100);
    border-radius: 10px;
    box-shadow: var(--shadow-lg);
    height: 100%;
    width: 20rem;
    overflow: hidden;
`;

const PizzaMenuButton = styled(ButtonIcon)`
    display: flex;
    position: absolute;
    top: 300px;
    background-color: var(--color-grey-100);
`;

const SliderContainer = styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: ${(props) => `translateX(-${props.index * 100}%)`};
    width: 100%;
`;

const PrevButton = styled(PizzaMenuButton)`
    left: 0px;
    z-index: 10;
`;

const NextButton = styled(PizzaMenuButton)`
    right: 0px;
`;

const Slide = styled.div`
    flex-shrink: 0;
    width: 100%;
`;

function PizzaMenu() {
    const [currentCart, setCurrentCart] = useState(0);

    const handleNext = () => {
        setCurrentCart((prevCart) =>
            Math.min(prevCart + 1, PIZZAS_LIST.length - 1)
        );
    };

    const handlePrev = () => {
        setCurrentCart((prevCart) => Math.max(prevCart - 1, 0));
    };
    return (
        <StyledPizzaMenu>
            <PrevButton onClick={handlePrev} disabled={currentCart === 0}>
                <MdOutlineNavigateBefore />
            </PrevButton>
            <SliderContainer index={currentCart}>
                {PIZZAS_LIST.map((pizza, index) => (
                    <Slide key={index}>
                        <PizzaCart pizza={pizza} />
                    </Slide>
                ))}
            </SliderContainer>
            <NextButton
                onClick={handleNext}
                disabled={currentCart === PIZZAS_LIST.length - 1}
            >
                <MdOutlineNavigateNext />
            </NextButton>
        </StyledPizzaMenu>
    );
}

export default PizzaMenu;
