import styled from "styled-components";
import { FiGithub } from "react-icons/fi";
import { GrLinkedin } from "react-icons/gr";

const FooterComponent = () => {
    return (
        <FooterContainer>
            <Footer>
                <CopyRight>
                    © 2024 In1t - All rights reserved
                </CopyRight>
                
                <FooterNav>
                    <FooterLink
                        href="https://github.com/init1-dev"
                        target="_black"
                        rel="noopener noreferrer"
                    >
                        <FiGithub />
                        GitHub
                    </FooterLink>

                    <FooterLink
                        href="https://www.linkedin.com/in/in1t-jorge-guillen/" 
                        target="_black" 
                        rel="noopener noreferrer"
                    >
                        <GrLinkedin />
                        LinkedIn
                    </FooterLink>
                </FooterNav>
            </Footer>
        </FooterContainer>
    );
}

const FooterContainer = styled.div`
    background-color: ${({ theme }) => theme.bg};
    padding: 1rem 0;
    width: 90%;
    margin: 0 auto;
    user-select: none;

    @media (min-width: 1000px){
        width: 100%;
    }
`;

const CopyRight = styled.span`
    
`;

const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    gap: 2rem;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.footerText};

    @media (min-width: 1000px){
        padding: 0 20% 0 20%;
    }

    @media (min-width: 1450px){
        padding: 0 30% 0 30%;
    }
`;

const FooterNav = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
`;

const FooterLink = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;
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
`;

export default FooterComponent;