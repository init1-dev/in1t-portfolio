import { useState } from "react";
import { ContactForm, ContactSection, Description, Icon, Input, InputContainer, InputsContainer, Link, SectionTitle, StyledItem, StyledList, SubmitButton, TextArea, TextAreaContainer } from "./StyledContactForm";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { handleSubmit } from "./handleContactForm";

const Contact = () => {
    const [ loading, setLoading ] = useState(false);

    return (
        <ContactSection id="contact">
            <SectionTitle>
                <Icon />
                Contact
            </SectionTitle>

            <Description>You can contact me by any of the following ways or by filling out the form below.</Description>

            <StyledList>
                <StyledItem>
                    <MdAlternateEmail />
                    <Link href="mailto:init1.dev@gmail.com">init1.dev@gmail.com</Link>
                </StyledItem>
                
                <StyledItem>
                    <FaLinkedinIn />
                    <Link
                        href="https://www.linkedin.com/in/in1t-jorge-guillen/" 
                        target="_black" 
                        rel="noopener noreferrer"
                    >
                        in1t-jorge-guillen</Link>
                </StyledItem>
                
                <StyledItem>
                    <FiGithub />
                    <Link
                        href="https://github.com/init1-dev"
                        target="_black"
                        rel="noopener noreferrer"
                    >
                        init1-dev</Link>
                </StyledItem>
            </StyledList>


            <ContactForm onSubmit={(e) => handleSubmit(e, setLoading)}>
                {/* <InnerSpan>( This form is currently under development )</InnerSpan> */}
                <div className="form-group">
                    <InputsContainer className="form-row">
                        <InputContainer className="col">
                            <label htmlFor="name">Fullname:</label>
                            <Input type="text" name="name" className="form-control" placeholder="Insert your name" required />
                        </InputContainer>
                        
                        <InputContainer className="col">
                            <label htmlFor="email">Email:</label>
                            <Input type="email" name="email" className="form-control" placeholder="Insert your email" required />
                        </InputContainer>
                    </InputsContainer>
                </div>
                <TextAreaContainer className="form-group">
                    <label htmlFor="message">Message:</label>
                    <TextArea placeholder="Insert your message" className="form-control" name="message" rows={10} required></TextArea>
                </TextAreaContainer>
                <SubmitButton disabled={loading} type="submit" className="">
                    {loading ? <span className="loader"></span> : "Submit Form"}
                </SubmitButton>
            </ContactForm>

        </ContactSection>
    );
}

export default Contact;