import { useState } from "react";
import { ContactForm, ContactSection, Description, Icon, InnerSpan, Input, InputContainer, InputsContainer, Link, SectionTitle, StyledItem, StyledList, SubmitButton, TextArea, TextAreaContainer } from "./StyledContactForm";
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


            <ContactForm onSubmit={(e) => handleSubmit(e, setLoading)}>
                <InnerSpan>( This form is currently under development )</InnerSpan>
                <div className="form-group">
                    <InputsContainer className="form-row">
                        <InputContainer className="col">
                            <Input type="text" name="name" className="form-control" placeholder="Full Name" required />
                        </InputContainer>
                        
                        <InputContainer className="col">
                            <Input type="email" name="email" className="form-control" placeholder="Email Address" required />
                        </InputContainer>
                    </InputsContainer>
                </div>
                <TextAreaContainer className="form-group">
                    <TextArea placeholder="Your Message" className="form-control" name="message" rows={10} required></TextArea>
                </TextAreaContainer>
                <SubmitButton disabled={true} type="submit" className="">
                    {loading ? <span className="loader"></span> : "Submit Form"}
                </SubmitButton>
            </ContactForm>

        </ContactSection>
    );
}

export default Contact;