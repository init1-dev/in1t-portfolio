import styled from "styled-components";
import { ProjectInterface } from "./projects";
import { FiGithub } from "react-icons/fi";
import { FiLink } from "react-icons/fi";
import { StyledLink } from "../about/AboutMe";

interface ProjectCardProps {
    project: ProjectInterface
};

const ProjectCard = ({
    project
}: ProjectCardProps) => {
    const { name, subtitle, design, technologies, description, links } = project;
    const { img, code, demo } = links;

    return (
        <CardContainer>
            <ProjectImg src={img} alt="project image" />

            <CardInfoContainer>
                <CardContainerHeader>
                    <h4>
                        { name + " "}
                        <small>({subtitle})</small>
                    </h4>
                    <TechnologyContainer>
                        <TechnologySpan>
                            {design}
                        </TechnologySpan>
                        {
                            technologies.map((el, i) => 
                                <TechnologyIcon key={i}>
                                    <TechImg src={el.icon} alt={el.name + "-image"} />
                                </TechnologyIcon>)
                        }
                    </TechnologyContainer>
                </CardContainerHeader>

                <p>{description}</p>

                <ButtonsContainer>
                    <StyledLink href={code} target="_black" rel="noopener noreferrer">
                        <FiGithub />
                        <span>
                            Code
                        </span>
                    </StyledLink>
                    
                    <StyledLink href={demo} target="_black" rel="noopener noreferrer">
                        <FiLink />
                        <span>
                            Preview
                        </span>
                    </StyledLink>
                </ButtonsContainer>
            </CardInfoContainer>
        </CardContainer>
    );
}

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 100%;
    
    filter: drop-shadow(1px 1px 2px rgb(0 0 0 / 0.6));

    @media (min-width: 1000px){
        transition: filter 0.3s ease;
        grid-template-columns: 40% 60%;

        &:hover {
            filter: drop-shadow(1px 1px 5px rgb(0 0 0 / 0.6));
        }
    }
`;

const ProjectImg = styled.img`
    width: 100%;
    height: 100%;
    aspect-ratio: 7/5;
    object-fit: cover;
    object-position: center;
    border-radius: 0.5rem 0.5rem 0 0;
    filter: drop-shadow(1px 0px 0px rgb(0 0 0 / 0.2));
    
    @media (min-width: 1000px){
        border-radius: 0.5rem 0 0 0.5rem;
    }
`;

const CardInfoContainer = styled.div`
    padding: 1rem;
    color: ${({ theme }) => theme.theme === 'light' 
        ? 'black'
        : 'white'};
    background-color: ${({ theme }) => theme.theme === 'light' 
        ? '#e9e9e9'
        : '#272e41'};
    border-radius: 0 0 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-evenly;
    gap: 1rem;

    @media (min-width: 1000px){
            border-radius: 0 0.5rem 0.5rem 0;
        }

    p {
        color: ${({ theme }) => theme.theme === 'light' 
        ? '#333333'
        : '#bbbbbb'};
        font-size: 15px;
        text-align: left;
    }
`;

const CardContainerHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    text-align: left;

    h4 {
        font-size: 22px;
        font-weight: 600;

        small {
            font-size: 14px;
            color: ${({ theme }) => theme.footerText};
        }
    }
`;

const TechnologyContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`;

const TechnologyIcon = styled.span`
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.spanText};
`;

const TechnologySpan = styled(TechnologyIcon)`
    padding: 0.2rem 0.8rem;
    background-color: ${({ theme }) => theme.spanBg};
    filter: drop-shadow(1px 1px 1.2px rgb(0 0 0 / 0.6));
`;



const TechImg = styled.img`
    width: 24px;
    height: 24px;
    filter: drop-shadow(1px 1px 0.5px rgb(0 0 0 / 0.6));
`;

const ButtonsContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export default ProjectCard;