import styled from "styled-components";
import { FiGithub } from "react-icons/fi";
import { GrLinkedin } from "react-icons/gr";
import { StyledLink } from "./about/AboutMe";

const LinksComponent = () => {

    return (
        <Links>
            <StyledLink
                href="https://github.com/init1-dev"
                target="_black"
                rel="noopener noreferrer"
            >
                <FiGithub />
                <span>
                    GitHub
                </span>
            </StyledLink>

            <StyledLink
                href="https://www.linkedin.com/in/in1t-jorge-guillen/" 
                target="_black" 
                rel="noopener noreferrer"
            >
                <GrLinkedin />
                <span>
                    LinkedIn
                </span>
            </StyledLink>
        </Links>
    )
}

export const Links = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 2.5rem;
`;

export default LinksComponent;