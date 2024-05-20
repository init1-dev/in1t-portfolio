import { FaCode } from "react-icons/fa6";
import styled from "styled-components";
import { ProjectInterface, projectsList } from "./projects";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
    const projects: ProjectInterface[] = projectsList;

    return (
        <ProjectsSection id="projects">
            <SectionTitle>
                <Icon />
                Projects
            </SectionTitle>
            

            <ProjectList>
                {
                    projects.map((project, i) => {
                        return <ProjectCard key={i} project={project}/>
                    })
                }
            </ProjectList>
        </ProjectsSection>
    );
}

const ProjectsSection = styled.section`
    padding-top: 5rem;
    
    @media (min-width: 1000px){
        padding-top: 7rem;
    }
`;

const SectionTitle = styled.h2`
    display: flex;
    align-items: center;
    column-gap: 0.75rem;
    margin-bottom: 2rem;
`;

const Icon = styled(FaCode)`
    width: 1.75rem;
    height: 1.75rem;
`;

const ProjectList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* grid-template-columns: ; */
`;

export default ProjectsList;