import styled, { useTheme } from "styled-components";

const FooterComponent = () => {
    const { theme, handleToggleTheme } = useTheme();
    console.log(theme, handleToggleTheme);
    

    return (
        <FooterContainer>
            <Footer>
                <span>
                    © 2024 In1t - Made with 🤍
                </span>
                
                <FooterNav>
                    <a>About</a>
                    <a>Contact</a>
                </FooterNav>

            </Footer>
        </FooterContainer>
    );
}

const FooterContainer = styled.div`
    position: fixed;
    bottom: 1rem;
    width: 100%;
    user-select: none;
`;

const Footer = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 0 10% 0 10%;
    margin-top: 1rem;
    gap: 2rem;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.footerText};
`;

const FooterNav = styled.nav`
    display: flex;
    gap: 1.5rem;

    a {
        font-size: 15px;
        font-weight: 500;
        margin: auto 0;
        color: ${({ theme }) => theme.footerText};
        transition: transform 0.2s ease;
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

export default FooterComponent;