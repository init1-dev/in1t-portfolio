import styled from "styled-components";
import FooterComponent from "../components/FooterComponent";
import TopBarComponent from "../components/TopBarComponent";
import AboutMe from "../components/about/AboutMe";
import Contact from "../components/contact/Contact";
import ProjectsList from "../components/projects/ProjectsList";
import StackList from "../components/stack/StackList";
import HelloComponent from "../components/HelloComponent";
import LinksComponent from "../components/LinksComponent";

const LandingPageComponent = () => {
    
    return (
        <>
            <TopBarComponent />

            <LandingContent>
                <HelloComponent />

                <LinksComponent />

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

export default LandingPageComponent;