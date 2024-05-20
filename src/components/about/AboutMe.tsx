import styled from "styled-components";
import { IoPersonCircleOutline } from "react-icons/io5";

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
                    Actualmente he retomado mi formación en programación. Desde marzo de 2021 hasta enero de 2022 realicé diversos cursos de programación, un certificado de profesionalidad en "Programación orientada a objetos y bases de datos relacionales" y actualmente desarrollo un proyector del sector turístico en OXYGEN trabajando con programadores senior.
                </p>
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

export default AboutMe;