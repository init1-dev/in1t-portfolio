import styled from "styled-components";
import LinksComponent from "./LinksComponent";
import Typed from 'typed.js';
import { useEffect, useRef } from "react";
// import { RainbowSpan } from "./RainbowSpan";

const HelloComponent = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Hey, i'm In1t^1000", "Welcome to my portfolio!"],
            typeSpeed: 75,
            backSpeed: 75,
            backDelay: 750,
            cursorChar: "__"
        });
    
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <StyledHelloComponent>
            <ProfileContainer>
                <ProfileImg
                    src="https://in1t-container.s3.eu-west-3.amazonaws.com/foto.jpg"
                    alt="profile image"
                />
                {/* <RainbowSpan>
                    <span>Open to work</span>
                </RainbowSpan> */}
                
                <BorderSpan className="animated-box in">
                    <span>Open to work</span>
                </BorderSpan>
            </ProfileContainer>

            {/* <AboutTitle>Hey, i'm In1t</AboutTitle> */}

            <AnimatedText>
                <AboutTitle ref={el} />
            </AnimatedText>

            <AboutSmall>Junior Full-Stack Developer</AboutSmall>
            <BasedSmall>~/ Based in Spain</BasedSmall>

            <LinksComponent />
        </StyledHelloComponent>
    )
}

const StyledHelloComponent = styled.div`
    padding: 5% 15%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 1px 1px 3px rgb(0 0 0 / 0.6);
    background-color: ${({ theme }) => theme.stackBg};

    @media (min-width: 1000px){
        height: unset;
        margin-top: 8rem;
        padding: 7% 17.5%;
    }

    @media (min-width: 1450px){
        padding: 5% 25%;
    }
`;

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    gap: 1.5rem;
`;

const BorderSpan = styled.span`
    margin-left: 1rem;
    font-weight: 600;
    padding: 0.3rem 1.2rem;
    color: ${({theme}) => theme.text};
    background-color: ${({theme}) => theme.theme === 'light'
        ? "rgb(132 255 178 / 40%)" 
        : "rgb(43 68 102 / 53%)"};
    filter: drop-shadow(1px 1px 1.5px rgb(0 0 0 / 0.6));
`;

const ProfileImg = styled.img`
    height: 75px;
    width: 75px;
    border-radius: 50%;
    filter: drop-shadow(1px 1px 1.2px rgb(0 0 0 / 0.6));
`;

const AnimatedText = styled.div`
    margin-top: 1rem;
`;

const AboutTitle = styled.span`
    font-size: 62px;
    text-align: left;
    margin-top: 2rem;
    margin-right: 0.5rem;
    line-height: 4.5rem;
`;

const AboutSmall = styled.small`
    margin-top: 1.5rem;
    font-size: 18px;
    filter: invert(25%);
`;

const BasedSmall = styled.small`
    font-size: 14px;
    color: ${({theme}) => theme.footerText};
`;

export default HelloComponent;