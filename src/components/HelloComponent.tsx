import styled from "styled-components";

const HelloComponent = () => {

    return (
        <>
            <AboutTitle>Hey, i'm In1t</AboutTitle>

            <AboutSmall>Junior Full-Stack Developer</AboutSmall>
        </>
    )
}

const AboutTitle = styled.h1`
    font-size: 62px;
    margin-top: 8rem;
    text-align: left;

    @media (min-width: 1000px){
        margin-top: 10rem;
    }
`;

const AboutSmall = styled.small`
    margin-top: 1.5rem;
    font-size: 18px;
    filter: invert(25%);
`;

export default HelloComponent;