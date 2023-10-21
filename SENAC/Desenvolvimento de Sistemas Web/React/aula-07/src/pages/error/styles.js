import styled from "styled-components";

export const Container = styled.section`
  padding-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;

export const Header = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 30px;
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 400;

  cursor: pointer;

  text-decoration: underline;
  offset-position: 0;
`;

export const Icon = styled.i`
  font-size: 84px;
  color: var(--text-body);

  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Text = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: capitalize;

  gap: 10px;

  &:hover {
    i {
      transform: translateX(5px);
    }
  }
`;

export const IconSM = styled.i`
    color: var(--text-body);
    cursor: pointer;
`;