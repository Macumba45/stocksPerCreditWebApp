import styled from "styled-components";

export const App = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;

export const Container = styled.div`
margin-bottom: 30px;
padding-left: 50px;
padding-right: 50px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 768px) {
    max-width: 80%;
    padding: 10px;

  }
`;

export const AvatarContainer = styled.div`
display: flex;
justify-content: center;
`

export const ButtonContainer = styled.div`

`;

export const ButtonBack = styled.button`
  background-color: transparent;
  color: white;
  font-size: 1.2rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

