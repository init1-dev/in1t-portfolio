import styled from "styled-components";
import { FaLaptopCode } from "react-icons/fa";
import { stackList } from "./stack";

const StackList = () => {
    const stack = stackList;

    return (
        <StackSection id="stack">
            <SectionTitle>
                <Icon />
                Stack
            </SectionTitle>
            
            <div>
                {
                    stack.map((stack, i) => {
                        const separator = ", ";
                        return (i === stackList.length - 1)
                            ? <span key={i}>{stack}</span>
                            : <span key={i}>{stack + separator}</span>
                    })
                }
            </div>
        </StackSection>
    );
}

const StackSection = styled.section`
    padding-top: 7rem;
`;

const SectionTitle = styled.h2`
    display: flex;
    align-items: center;
    column-gap: 0.75rem;
    margin-bottom: 2rem;
`;

const Icon = styled(FaLaptopCode)`
    width: 1.75rem;
    height: 1.75rem;
`;

export default StackList;