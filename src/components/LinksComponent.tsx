import styled from "styled-components";
import { FiGithub } from "react-icons/fi";
import { GrLinkedin } from "react-icons/gr";

const LinksComponent = () => {

    return (
        <Links>
            <SocialLink
                href="https://github.com/init1-dev"
                target="_black"
                rel="noopener noreferrer"
            >
                <FiGithub />
                GitHub
            </SocialLink>

            <SocialLink
                href="https://www.linkedin.com/in/in1t-jorge-guillen/" 
                target="_black" 
                rel="noopener noreferrer"
            >
                <GrLinkedin />
                LinkedIn
            </SocialLink>
        </Links>
    )
}

const Links = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    margin-top: 2.5rem;
`;

const SocialLink = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 15px;
    font-weight: 500;
    margin: auto 0;
    color: ${({ theme }) => theme.cardButtonText};
    background-color: ${({ theme }) => theme.cardButtonBg};
    padding: 0.3rem 0.5rem;
    border-radius: 0.5rem;
    filter: drop-shadow(1px 1px 1.2px rgb(0 0 0 / 0.6));
    transition: color 0.2s ease, background-color 0.2s ease;
    text-rendering: optimizeLegibility;

    &:hover {
        color: ${({ theme }) => theme.menuActive};
    }
`;

export default LinksComponent;