import styled from "styled-components";
import FooterComponent from "../components/FooterComponent";
import TopBarComponent from "../components/TopBarComponent";
import AboutMe from "../components/about/AboutMe";
import Contact from "../components/contact/Contact";
import ProjectsList from "../components/projects/ProjectsList";
import StackList from "../components/stack/StackList";

const LandingPageComponent = () => {
    
    return (
        <>
            <TopBarComponent />


            <LandingContent>
                <AboutTitle>Hey i'm In1t</AboutTitle>
                <AboutSubtext>Welcome to my portfolio</AboutSubtext>

                <AboutSmall>( In development )</AboutSmall>

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
    margin-top: 10rem;
    text-align: left;
`;

const AboutSubtext = styled.h2`
    margin-top: 1rem;
    font-size: 24px;
    text-align: left;
    filter: invert(50%);
`;

const AboutSmall = styled.small`
    margin-top: 7rem;
`;

export default LandingPageComponent;