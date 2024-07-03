import styled, { useTheme } from "styled-components";
import ThemeButton from "../components/theme/ThemeButton";
import { useState } from "react";

const TopBarComponent = () => {
    const { theme, handleToggleTheme } = useTheme();
    const [ activeLink, setActiveLink ] = useState('');

    const links = [
        { href: '#stack', text: 'Stack' },
        { href: '#projects', text: 'Projects' },
        { href: '#about', text: 'About' },
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
    top: 0;
    width: 100%;
    user-select: none;
    z-index: 1;

    @media (min-width: 1000px) {
        top: 2%;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-bottom: 1rem;

    @media (min-width: 1000px) {
        padding: 0 10% 0 10%;
    }
`;

const NavBar = styled.nav`
    width: 100%;
    padding: 1rem 2rem;
    border-radius: unset;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    background-color: ${({ theme }) => theme.headerBg};
    filter: drop-shadow(1px 1px 1.2px rgb(0 0 0 / 0.6));

    @media (min-width: 1000px) {
        padding: 0.5rem 2rem;
        width: unset;
        height: 2.5rem;
        border-radius: 0.5rem;

        transition: transform 0.3s ease, filter 0.3s ease;
        filter: drop-shadow(1px 1px 1.2px rgb(0 0 0 / 0.6));
        
        &:hover {
            transform: scale(1.1);
            filter: drop-shadow(5px 5px 7px rgb(0 0 0 / 0.25));
        }
    }

    a {
        font-size: 16px;
        font-weight: 600;
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

        @media (min-width: 1000px) {
            font-size: 15px;
            font-weight: 500;
        }
    }
`;

export default TopBarComponent;