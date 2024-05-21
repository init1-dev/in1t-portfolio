import styled from "styled-components";

export const RainbowSpan = styled.span`
    padding: 0.3rem 0.8rem;
    color: white;
    background-color: rgba(61, 61, 61, 0.9);

    --border-width: 3px;

    @keyframes moveGradient {
        50% {
            background-position: 100% 50%;
        }
    }

    position: relative;
    border-radius: var(--border-width);

    &::after {
        position: absolute;
        content: "";
        top: calc(-1 * var(--border-width));
        left: calc(-1 * var(--border-width));
        z-index: -1;
        width: calc(100% + var(--border-width) * 2);
        height: calc(100% + var(--border-width) * 2);
        background: linear-gradient(
        60deg,
        hsl(224, 85%, 66%),
        hsl(269, 85%, 66%),
        hsl(314, 85%, 66%),
        hsl(359, 85%, 66%),
        hsl(44, 85%, 66%),
        hsl(89, 85%, 66%),
        hsl(134, 85%, 66%),
        hsl(179, 85%, 66%)
        );
        background-size: 300% 300%;
        background-position: 0 50%;
        border-radius: calc(2 * var(--border-width));
        animation: moveGradient 5s alternate infinite;
    }

    span {
        text-transform: uppercase;
        filter: drop-shadow(1px 1px 1.5px rgb(0 0 0 / 0.6));
    }
`;