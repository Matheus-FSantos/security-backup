import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 10rem 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Button = styled.button`
    font-size: 1rem;
    color: var(--shape);
    background: var(--blue-light);
    border: 0;

    padding: 0 2rem;
    height: 3rem;
    border-radius: 0.25rem;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
`