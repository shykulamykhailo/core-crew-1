import styled from 'styled-components';

const ButtonIcon = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    background: none;
    border: solid 2px var(--color-brand-600);
    border-radius: 50%;
    font-size: 20px;
    transition: all 0.2s;

    & svg {
        width: 1rem;
        height: 1rem;
        color: var(--color-brand-600);
    }

    &:hover {
        background-color: var(--color-brand-600);

        & svg {
            color: var(--color-brand-50);
        }
    }
`;

export default ButtonIcon;
