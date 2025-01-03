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

    div {
        width: 25px;
        height: 5px;
        background-color: black;
        border-radius: 2px;
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

const MobileMenu = styled.div`
    display: ${(props) => (props['data-is-open'] ? 'block' : 'none')};
    position: absolute;
    top: 3rem;
    right: 1rem;
    background: white;
    padding: 15px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    z-index: 99;

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
            <HamburgerMenu onClick={toggleMenu}>
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
                <NavLink to="schedule">Schedule</NavLink>
                <NavLink to="profile">Profile</NavLink>
            </StyledMainNav>
        </>
    );
}

export default MainNav;
