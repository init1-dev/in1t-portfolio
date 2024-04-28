import styled, { useTheme } from "styled-components";
import ThemeButton from "../components/theme/ThemeButton";
import { useState } from "react";

const TopBarComponent = () => {
    const { theme, handleToggleTheme } = useTheme();
    const [ activeLink, setActiveLink ] = useState('About');

    const links = [
        { href: '#about', text: 'About' },
        { href: '#stack', text: 'Stack' },
        { href: '#projects', text: 'Projects' },
        { href: '#contact', text: 'Contact' },
    ]

    return (
        <HeaderContainer>
            <Header>
                <NavBar>
                    {
                        links.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                onClick={() => setActiveLink(link.text)}
                                aria-selected={link.text === activeLink ? 'true' : 'false'}
                            >
                                {link.text}
                            </a>
                        ))
                    }
                    <ThemeButton theme={theme} handleToggleTheme={handleToggleTheme} />
                </NavBar>
            </Header>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.div`
    position: fixed;
    top: 1rem;
    width: 100%;
    user-select: none;
`;

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10% 0 10%;
    margin-bottom: 1rem;
`;

const NavBar = styled.nav`
    display: flex;
    gap: 1.5rem;

    @media (min-width: 700px) {
        
    }

    @media (min-width: 900px) {
        
    }

    a {
        font-size: 15px;
        font-weight: 500;
        margin: auto 0;
        color: ${({ theme }) => theme.text};
        transition: transform 0.2s ease, color 0.2s ease;
        text-rendering: optimizeLegibility;

        &:hover {
            color: ${({ theme }) => theme.menuActive};
            transform: scale(1.12);
        }

        &[aria-selected="true"] {
            color: ${({ theme }) => theme.menuActive};
        }
    }
`;

export default TopBarComponent;