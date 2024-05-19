import styled from "styled-components";
import { ProjectInterface } from "./projects";
import { FiGithub } from "react-icons/fi";
import { FiLink } from "react-icons/fi";
import image from "../../assets/image.jpg";

interface ProjectCardProps {
    project: ProjectInterface
};

const ProjectCard = ({
    project
}: ProjectCardProps) => {
    const { name, subtitle, technologies, description, links } = project;
    const { code, demo } = links;

    return (
        <CardContainer>
            <img src={image} alt="project image" />

            <CardInfoContainer>
                <CardContainerHeader>
                    <h4>
                        { name + " "}
                        <small>({subtitle})</small>
                    </h4>
                    <TechnologyContainer>
                        {
                            technologies.map((el, i) => <TechnologySpan key={i}>{el}</TechnologySpan>)
                        }
                    </TechnologyContainer>
                </CardContainerHeader>

                <p>{description}</p>

                <ButtonsContainer>
                    <StyledLink href={code} target="_black" rel="noopener noreferrer">
                        <FiGithub />
                        Code
                    </StyledLink>
                    
                    <StyledLink href={demo}>
                        <FiLink />
                        Preview
                    </StyledLink>
                </ButtonsContainer>
            </CardInfoContainer>
        </CardContainer>
    );
}

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 100%;
    
    filter: drop-shadow(1px 1px 1.2px rgb(0 0 0 / 0.6));

    @media (min-width: 1000px){
        grid-template-columns: 40% 60%;
        gap: 0.5rem;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 0.5rem 0.5rem 0 0;
        
        @media (min-width: 1000px){
            border-radius: 0.5rem;
        }
    }
`;

const CardInfoContainer = styled.div`
    padding: 1rem;
    color: ${({ theme }) => theme.cardText};
    background-color: ${({ theme }) => theme.cardBg};
    border-radius: 0 0 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-evenly;
    gap: 1rem;

    @media (min-width: 1000px){
            border-radius: 0.5rem;
        }

    p {
        text-align: left;
    }
`;

const CardContainerHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    text-align: left;

    h4 {
        font-size: 24px;
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

const TechnologySpan = styled.span`
    padding: 0.2rem 0.8rem;
    font-size: 0.8rem;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.spanText};
    background-color: ${({ theme }) => theme.spanBg};
    filter: drop-shadow(1px 1px 1.2px rgb(0 0 0 / 0.6));
`;

const ButtonsContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`;

const StyledLink = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.3rem 1rem;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.cardButtonText};
    background-color: ${({ theme }) => theme.cardButtonBg};
    filter: drop-shadow(1px 1px 1.2px rgb(0 0 0 / 0.6));

    &:hover {
        color: ${({ theme }) => theme.menuActive};
    }
`;

export default ProjectCard;