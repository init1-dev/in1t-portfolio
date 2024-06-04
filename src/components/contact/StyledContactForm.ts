import { RiContactsBook2Line } from "react-icons/ri";
import styled from "styled-components";

export const ContactSection = styled.section`
    padding-top: 5rem;
    padding-bottom: 3rem;
    
    @media (min-width: 1000px) {
        padding-top: 7rem;
        padding-bottom: 5rem;
    }
`;

export const SectionTitle = styled.h2`
    display: flex;
    align-items: center;
    column-gap: 0.75rem;
    margin-bottom: 2rem;
`;

export const Description = styled.small`
    
`;

export const Icon = styled(RiContactsBook2Line)`
    width: 1.75rem;
    height: 1.75rem;
`;

export const StyledList = styled.ul`
    margin-top: 2rem;
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

export const StyledItem = styled.li`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const Link = styled.a`
    font-size: 15px;
    font-weight: 500;
    margin: auto 0;
    color: ${({ theme }) => theme.footerText};
    transition: transform 0.2s ease;
    text-rendering: optimizeLegibility;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
        color: ${({ theme }) => theme.menuActive};
    }

    &[aria-selected="true"] {
        color: ${({ theme }) => theme.menuActive};
    }
`;

export const ContactForm = styled.form`
    margin-top: 3rem;
`;

export const InnerSpan = styled.small`
    color: #ff0000;
`;

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 2rem;
    margin-bottom: 1rem;

    @media (min-width: 1000px) {
        flex-direction: row;
    }
`;

export const InputContainer = styled.div`
    width: 100%;
`;

export const Input = styled.input`
    font-family: Onest, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 15px;
    padding: 0.8rem;
    border-radius: 0.5rem;
    width: 100%;
    margin: 0.5rem 0 0 0;
    border: unset;
    color: ${({ theme }) => theme.text};
    filter: drop-shadow(1px 1px 1.5px rgb(0 0 0 / 0.6));
    background-color: ${({ theme }) => theme.theme === 'light' 
        ? '#ffffff'
        : '#30384f'};
        
    &:focus, &:focus-visible {
        outline: 1px solid #646cff;
    }
`;

export const TextAreaContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TextArea = styled.textarea`
    font-family: Onest, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 15px;
    padding: 0.8rem;
    border-radius: 0.5rem;
    width: 100%;
    margin: 0.5rem 0 0 0;
    border: unset;
    filter: drop-shadow(1px 1px 1.5px rgb(0 0 0 / 0.6));
    resize: none;
    background-color: ${({ theme }) => theme.theme === 'light' 
        ? '#ffffff'
        : '#30384f'};

    &:focus, &:focus-visible {
        outline: 1px solid #646cff;
    }
`;

export const SubmitButton = styled.button`
    cursor: pointer;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    height: 45px;
    padding: 0.8rem 2rem;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.theme === 'light' 
        ? 'white'
        : 'white'};
    background-color: ${({ theme }) => theme.theme === 'light' 
        ? '#494d8a'
        : '#333779'};
    filter: drop-shadow(1px 1px 1.2px rgb(0 0 0 / 0.6));
    border: unset;
    margin: 1rem 0 0 auto;

    &:disabled {
        /* filter: hue-rotate(25deg); */
        cursor: not-allowed;

        &:hover {
            color: red;
        }
    }

    &:hover {
        color: ${({ theme }) => theme.menuActive};
        border-color: #646cff;

        span {
            filter: drop-shadow(1px 1px 1.2px rgb(0 0 0 / 0.6));
        }
    }

    &:focus, &:focus-visible {
        outline: unset;
    }

    @media (min-width: 1000px) {
        width: 25%;
    }
`;