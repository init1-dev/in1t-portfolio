import styled from "styled-components";
import { IoPersonCircleOutline } from "react-icons/io5";
import { GrDocumentPdf } from "react-icons/gr";

const AboutMe = () => {
    return (
        <AboutSection id="about">
            <SectionTitle>
                <Icon />
                About me
            </SectionTitle>

            <SectionContent>
                <p>
                    Soy una persona muy inquieta y curiosa. Comencé estudiando informática y posteriormente decidí estudiar un máster en 3D y animación en la escuela Trazos, Madrid.
                </p>

                <p>
                    También me he formado en fotografía, trabajé como fotógrafo de arquitectura desde el año 2015, hasta 2021, durante este periodo realicé diversos proyectos, algunos de los cuales han sido publicados tanto a nivel nacional como internacional en plataformas como ArchDaily o Premios Enor de Arquitectura.
                </p>

                <p>
                    Posteriormente retomé mi formación en programación. Desde marzo de 2021 hasta enero de 2022 realicé diversos cursos de programación, un certificado de profesionalidad en "Programación orientada a objetos y bases de datos relacionales" y actualmente desarrollo un proyecto del sector turístico en OXYGEN trabajando con programadores senior.
                </p>

                <StyledLink
                    href="https://drive.google.com/file/d/17L0qu0aSTz3pVPlYQ7_TTb80ljOs75qQ/view?usp=sharing" 
                    target="_black" 
                    rel="noopener noreferrer"
                >
                    <GrDocumentPdf />
                    Link to my CV
                </StyledLink>

            </SectionContent>
        </AboutSection>
    );
}

const AboutSection = styled.section`
    padding-top: 5rem;
    
    @media (min-width: 1000px){
        padding-top: 7rem;
    }
`;

const SectionTitle = styled.h2`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    column-gap: 0.75rem;
    margin-bottom: 2rem;
`;

const Icon = styled(IoPersonCircleOutline)`
    width: 1.75rem;
    height: 1.75rem;
`;

const SectionContent = styled.div`
    text-align: left;
    
    p:not(:last-child) {
        margin: 1.5rem auto 1.5rem auto;
    }
`;

// const StyledLink = styled.a`
//     /* display: flex;
//     align-items: center;
//     gap: 0.5rem; */
//     font-size: 15px;
//     font-weight: 500;
//     margin: auto 0;
//     color: ${({ theme }) => theme.footerText};
//     transition: transform 0.2s ease;
//     text-rendering: optimizeLegibility;

//     &:hover {
//         color: ${({ theme }) => theme.menuActive};
//         transform: scale(1.12);
//     }
// `;

const StyledLink = styled.a`
    cursor: pointer;
    width: fit-content;
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

export default AboutMe;