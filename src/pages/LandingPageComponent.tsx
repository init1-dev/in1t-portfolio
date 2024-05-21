import styled from "styled-components";
import FooterComponent from "../components/FooterComponent";
import TopBarComponent from "../components/TopBarComponent";
import AboutMe from "../components/about/AboutMe";
import Contact from "../components/contact/Contact";
import ProjectsList from "../components/projects/ProjectsList";
import StackList from "../components/stack/StackList";
import { FiGithub } from "react-icons/fi";
import { GrLinkedin } from "react-icons/gr";

const LandingPageComponent = () => {
    
    return (
        <>
            <TopBarComponent />

            <LandingContent>
                <AboutTitle>Hey, i'm In1t</AboutTitle>

                <AboutSmall>Junior Full-Stack Developer</AboutSmall>

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

                <StackList />

                <ProjectsList />

                <AboutMe />

                <Contact />
            </LandingContent>

            <FooterComponent />
        </>
    );
}

const LandingContent = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    @media (min-width: 1000px){
        width: 65%;
    }

    @media (min-width: 1450px){
        width: 50%;
    }
`;

const AboutTitle = styled.h1`
    font-size: 62px;
    margin-top: 8rem;
    text-align: left;

    @media (min-width: 1000px){
        margin-top: 10rem;
    }
`;

const AboutSmall = styled.small`
    margin-top: 1.5rem;
    font-size: 18px;
    filter: invert(25%);
`;

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

export default LandingPageComponent;