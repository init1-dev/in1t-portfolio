import styled from "styled-components";
import { FiCodepen } from "react-icons/fi";
import { frontList, testList, backList } from "./stack";

const StackList = () => {
    return (
        <StackSection id="stack">
            <SectionTitle>
                <Icon />
                Stack
            </SectionTitle>

            <SectionSubtitle>
                Technologies that I feel comfortable with:
            </SectionSubtitle>
            
            <StacklistContainer>
                <StackContainer>
                    {
                        frontList.map((stack, i) => {
                            const { name, icon, color, docUrl } = stack;
                            return <TechSpan 
                                key={i} 
                                style={color ? {backgroundColor:color} : {}}
                            >
                                        <a 
                                            href={docUrl ? docUrl : ""}
                                            target="_black" 
                                            rel="noopener noreferrer"
                                        >
                                            <TechIcon src={icon ? icon : ""} alt="stack image" />
                                            {name}
                                        </a>
                                </TechSpan>
                        })
                    }
                </StackContainer>

                <StackContainer>
                    {
                        testList.map((stack, i) => {
                            const { name, icon, color, docUrl } = stack;
                            return <TechSpan 
                                key={i} 
                                style={color ? {backgroundColor:color} : {}}
                            >
                                        <a 
                                            href={docUrl ? docUrl : ""}
                                            target="_black" 
                                            rel="noopener noreferrer"
                                        >
                                            <TechIcon src={icon ? icon : ""} alt="stack image" />
                                            {name}
                                        </a>
                                </TechSpan>
                        })
                    }
                </StackContainer>

                <StackContainer>
                    {
                        backList.map((stack, i) => {
                            const { name, icon, color, docUrl } = stack;
                            return <TechSpan 
                                key={i} 
                                style={color ? {backgroundColor:color} : {}}
                            >
                                        <a 
                                            href={docUrl ? docUrl : ""}
                                            target="_black" 
                                            rel="noopener noreferrer"
                                        >
                                            <TechIcon src={icon ? icon : ""} alt="stack image" />
                                            {name}
                                        </a>
                                </TechSpan>
                        })
                    }
                </StackContainer>
            </StacklistContainer>
            
        </StackSection>
    );
}

const StackSection = styled.section`
    padding-top: 5rem;
    
    @media (min-width: 1000px){
        padding-top: 7rem;
    }
`;

const StacklistContainer = styled.div`
    margin-top: 2rem;
`;

const StackContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin: 0.8rem 0;
`;

const TechSpan = styled.span`
    cursor: pointer;
    display: flex;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.cardBg};
    filter: drop-shadow(1px 1px 1.2px rgb(0 0 0 / 0.6));
    border-radius: 0.5rem;
    transition: transform 0.3s ease;
    text-rendering: optimizeLegibility;

    &:hover {
        transform: scale(1.1);
        filter: drop-shadow(1px 1px 1.5px rgb(0 0 0 / 0.6));
    }

    a {
        all: unset;
        display: flex;
        gap: 0.5rem;
    }
`;

const TechIcon = styled.img`
    width: 24px;
    height: 24px;
`;

const SectionTitle = styled.h2`
    display: flex;
    align-items: center;
    column-gap: 0.75rem;
    margin-bottom: 1rem;
`;

const SectionSubtitle = styled.small`
    font-size: 14px;
    font-weight: 400;
    filter: invert(15%);
`;

const Icon = styled(FiCodepen)`
    width: 1.75rem;
    height: 1.75rem;
`;

export default StackList;