import styled from "styled-components";
import { IoPerson } from "react-icons/io5";
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
                    I am a very restless and curious person. I started studying <St>computer science</St> and later I decided to study a master's degree in <St>3D and animation</St> at <St>Trazos school</St>, Madrid.
                </p>

                <p>
                    I have also trained in <St>photography</St>, I worked as an <St>architectural photographer</St> from 2015, until 2021, during this period I made several projects, some of which have been published both nationally and internationally on platforms such as <St>ArchDaily</St> or <St>Enor Architecture Awards</St>.
                </p>

                <p>
                    Subsequently I resumed my training in programming. From March 2021 to January 2022 I took several programming courses, a professional certificate in <St>“Object Oriented Programming and Relational Databases”</St> and I am currently developing a project in the tourism sector in <St>OXYGEN</St> working with senior programmers.
                </p>

                <StyledLink
                    href="https://drive.google.com/file/d/17L0qu0aSTz3pVPlYQ7_TTb80ljOs75qQ/view?usp=sharing" 
                    target="_black" 
                    rel="noopener noreferrer"
                >
                    <GrDocumentPdf />
                    <span>
                        Download CV
                    </span>
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

const Icon = styled(IoPerson)`
    width: 1.75rem;
    height: 1.75rem;
`;

const SectionContent = styled.div`
    text-align: left;
    
    p:not(:last-child) {
        margin: 1.5rem auto 1.5rem auto;
    }
`;

export const StyledLink = styled.a`
    cursor: pointer;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.3rem 1rem;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.theme === 'light' 
        ? 'white'
        : 'white'};
    background-color: ${({ theme }) => theme.theme === 'light' 
        ? '#494d8a'
        : '#333779'};
    filter: drop-shadow(1px 1px 1.2px rgb(0 0 0 / 0.6));

    &:hover {
        color: ${({ theme }) => theme.menuActive};

        span {
            filter: drop-shadow(1px 1px 1.2px rgb(0 0 0 / 0.6));
        }
    }
`;

const St = styled.strong`
    color: ${({ theme }) => theme.strongText};
`;

export default AboutMe;