import styled from "styled-components";

export const App = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;

export const Container = styled.div`
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 768px) {
    max-width: 60%;
  }
`;

export const ButtonContainer = styled.div`
 
`;

export const ButtonBack = styled.button`
  background-color: transparent;
  color: black;
  font-size: 1.2rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

