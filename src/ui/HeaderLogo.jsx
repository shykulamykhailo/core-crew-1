import { useState } from 'react';
import { SiSitecore } from 'react-icons/si';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(-360deg);
    }
`;

const StyledNavLink = styled(NavLink)`
    margin-top: 0.5rem;

    &.active {
        background: var(--color-grey-0);
        color: var(--color-grey-1000);
    }
`;

const StyledLogoIcon = styled(SiSitecore)`
    font-size: 3rem;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }

    &.rotate {
        animation: ${rotateAnimation} 0.5s ease;
    }
`;

function HeaderLogo() {
    const [isRotating, setIsRotating] = useState(false);

    const handleClick = () => {
        setIsRotating(true);
        setTimeout(() => setIsRotating(false), 500);
    };

    return (
        <StyledNavLink to="main" onClick={handleClick}>
            <StyledLogoIcon className={isRotating ? 'rotate' : ''} />
        </StyledNavLink>
    );
}

export default HeaderLogo;
