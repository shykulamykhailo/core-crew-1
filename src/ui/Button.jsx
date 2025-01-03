import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${({ bgColor }) => bgColor || 'var(--color-brand-600)'};
    color: ${({ color }) => color || 'var(--color-brand-50)'};
    border: solid 1px var(--color-grey-600);
    padding: ${({ size }) =>
        size === 'large'
            ? '10px 20px'
            : size === 'small'
            ? '4px 10px'
            : '6px 15px'};
    font-size: ${({ size }) =>
        size === 'large' ? '18px' : size === 'small' ? '12px' : '15px'};

    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${({ hoverColor }) =>
            hoverColor || 'var(--color-brand-700)'};
        color: var(--color-brand-50);
    }

    &:active {
        background-color: ${({ activeColor }) =>
            activeColor || 'var(--color-brand-800)'};
    }

    &:disabled {
        background-color: var(--color-grey-300);
        cursor: not-allowed;
    }
`;

function Button({
    children,
    onClick,
    size,
    bgColor,
    color,
    hoverColor,
    activeColor,
    disabled,
}) {
    return (
        <StyledButton
            onClick={onClick}
            size={size}
            bgColor={bgColor}
            color={color}
            hoverColor={hoverColor}
            activeColor={activeColor}
            disabled={disabled}
        >
            {children}
        </StyledButton>
    );
}

export default Button;
