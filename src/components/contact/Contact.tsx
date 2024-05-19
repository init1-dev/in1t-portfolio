import styled from "styled-components";
import { RiContactsBook2Line } from "react-icons/ri";

const Contact = () => {
    return (
        <ContactSection id="contact">
            <SectionTitle>
                <Icon />
                Contact
            </SectionTitle>

            <StyledList>
                <StyledItem>
                    <p>Email:</p>
                    <Link href="mailto:init1.dev@gmail.com">init1.dev@gmail.com</Link>
                </StyledItem>
                
                <StyledItem>
                    <p>LinkedIn:</p>
                    <Link
                        href="https://www.linkedin.com/in/in1t-jorge-guillen/" 
                        target="_black" 
                        rel="noopener noreferrer"
                    >
                        in1t-jorge-guillen</Link>
                </StyledItem>
                
                <StyledItem>
                    <p>GitHub:</p>
                    <Link
                        href="https://github.com/init1-dev"
                        target="_black"
                        rel="noopener noreferrer"
                    >
                        init1-dev</Link>
                </StyledItem>
            </StyledList>
        </ContactSection>
    );
}

const ContactSection = styled.section`
    padding-top: 7rem;
    padding-bottom: 3rem;

    @media (min-width: 1000px) {
        padding-bottom: 5rem;
    }
`;

const SectionTitle = styled.h2`
    display: flex;
    align-items: center;
    column-gap: 0.75rem;
    margin-bottom: 2rem;
`;

const Icon = styled(RiContactsBook2Line)`
    width: 1.75rem;
    height: 1.75rem;
`;

const StyledList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1.5rem;

    @media (min-width: 1000px) {
        flex-direction: row;
        gap: 2.5rem;
    }
`;

const StyledItem = styled.li`
    display: flex;
    gap: 0.5rem;
`;

const Link = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 15px;
    font-weight: 500;
    margin: auto 0;
    color: ${({ theme }) => theme.footerText};
    transition: transform 0.2s ease;
    text-rendering: optimizeLegibility;

    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.menuActive};
    }

    &[aria-selected="true"] {
        color: ${({ theme }) => theme.menuActive};
    }
`;

export default Contact;