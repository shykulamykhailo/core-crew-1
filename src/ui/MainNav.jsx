import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledMainNav = styled.nav`
    display: none;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        gap: 1.5rem;
    }
`;

const HamburgerMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    position: relative;
    width: 30px;
    height: 24px;

    div {
        position: absolute;
        width: 100%;
        height: 4px;
        background-color: black;
        border-radius: 2px;
        transition: all 0.3s ease-in-out;
    }

    div:nth-child(1) {
        top: ${(props) => (props['data-is-open'] ? '10px' : '0')};
        transform: ${(props) =>
            props['data-is-open'] ? 'rotate(45deg)' : 'rotate(0)'};
    }

    div:nth-child(2) {
        top: 10px;
        opacity: ${(props) => (props['data-is-open'] ? '0' : '1')};
    }

    div:nth-child(3) {
        top: ${(props) => (props['data-is-open'] ? '10px' : '20px')};
        transform: ${(props) =>
            props['data-is-open'] ? 'rotate(-45deg)' : 'rotate(0)'};
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

const MobileMenu = styled.div`
    position: absolute;
    top: 4.5rem;
    right: 1rem;
    background: white;
    padding: 15px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    z-index: 99;
    opacity: ${(props) => (props['data-is-open'] ? 1 : 0)};
    transform: ${(props) =>
        props['data-is-open'] ? 'translateY(0)' : 'translateY(-10px)'};
    pointer-events: ${(props) => (props['data-is-open'] ? 'auto' : 'none')};
    transition: opacity 0.3s ease, transform 0.3s ease;

    nav {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

function MainNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <>
            <HamburgerMenu onClick={toggleMenu} data-is-open={isOpen}>
                <div></div>
                <div></div>
                <div></div>
            </HamburgerMenu>
            <MobileMenu data-is-open={isOpen}>
                <StyledMainNav>
                    <NavLink to="main" onClick={() => setIsOpen(false)}>
                        Main
                    </NavLink>
                    <NavLink
                        to="management/products"
                        onClick={() => setIsOpen(false)}
                    >
                        Management
                    </NavLink>
                    <NavLink to="dishes" onClick={() => setIsOpen(false)}>
                        Dishes
                    </NavLink>
                    <NavLink to="schedule" onClick={() => setIsOpen(false)}>
                        Schedule
                    </NavLink>
                    <NavLink to="profile" onClick={() => setIsOpen(false)}>
                        Profile
                    </NavLink>
                </StyledMainNav>
            </MobileMenu>
            <StyledMainNav>
                <NavLink to="main">Main</NavLink>
                <NavLink to="management/products">Management</NavLink>
                <NavLink to="dishes">Dishes</NavLink>
                <NavLink to="schedule">Schedule</NavLink>
                <NavLink to="profile">Profile</NavLink>
            </StyledMainNav>
        </>
    );
}

export default MainNav;
