import styled from "styled-components";

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    margin-top: -6.5rem;

    div {
        background-color: var(--shape);
        padding: 1.5rem;
        border-radius: 0.25rem;

        color: var(--text-title);

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        strong {
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background {
            background: var(--green);
            color: var(--shape);
        }
    }
`;