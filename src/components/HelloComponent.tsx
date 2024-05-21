import styled from "styled-components";
// import { RainbowSpan } from "./RainbowSpan";

const HelloComponent = () => {

    return (
        <>
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

            <AboutTitle>Hey, i'm In1t</AboutTitle>

            <AboutSmall>Junior Full-Stack Developer</AboutSmall>
        </>
    )
}

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8rem;
    margin-bottom: 1rem;
    gap: 1.5rem;

    @media (min-width: 1000px){
        margin-top: 10rem;
    }
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

const AboutTitle = styled.h1`
    font-size: 62px;
    text-align: left;
`;

const AboutSmall = styled.small`
    margin-top: 1.5rem;
    font-size: 18px;
    filter: invert(25%);
`;

export default HelloComponent;