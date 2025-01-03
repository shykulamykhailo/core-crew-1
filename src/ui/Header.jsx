import styled from 'styled-components';
import MainNav from './MainNav';
import HeaderLogo from './HeaderLogo';

const StyledHeader = styled.header`
    display: flex;
    gap: 0.4rem;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 2rem;
    box-shadow: var(--shadow-md);
`;

function Header() {
    return (
        <StyledHeader>
            <HeaderLogo />
            <MainNav />
        </StyledHeader>
    );
}

export default Header;
