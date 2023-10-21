import styled from "styled-components";

const ContainerGrid = styled.div`
    width: 100%;
    height: 100%;
    
    display: grid;
    grid-gap: 2.5rem;
    grid-template-columns: repeat(auto-fit, minmax(21.875rem, 1fr));
    justify-content: center;
    justify-items: center;

    margin-top: 3.125rem;
`;

export { ContainerGrid };