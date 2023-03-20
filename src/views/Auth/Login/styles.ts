import styled, { css } from "styled-components";
import { Form as DefaultForm } from "formik";

export const FormContainer = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black};
  background-image: url("https://i.blogs.es/603a33/layer-14/1366_2000.webp");
  background-size: cover;
`;

export const Form = styled(DefaultForm)`
  display: flex;
  flex-direction: column;
  background-color: rgba(116, 0, 1, 0.5);
  border-radius: 10px;
  height: 25rem;
  width: 22.5rem;
  margin-top: 6.25rem;
  margin-left: 2rem;
  margin-right: 1.7rem;
  font-family: Oswald;
  color: ${({ theme }) => theme.colors.white100};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-flow: column;
  color: ${({ theme }) => theme.colors.white100};
  &:not(:first-child) {
    margin-top: 16px;
  }
`;

export const Input = styled.input<{ $hasError?: boolean }>`
  padding: 10px;
  margin: 10px;
  border: none; /* eliminar el borde predeterminado */
  border-bottom: 1px solid ${({ theme }) => theme.colors.white100}; /* agregar borde inferior */
  background: transparent; /* hacer el fondo transparente */
  color: ${({ theme }) =>
    theme.colors.white100}; /* establecer el color de texto */
  padding: 10px 14px;

  ${({ $hasError, theme }) =>
    $hasError &&
    css`
      color: ${theme.colors.GriffindorYellow};
      border-bottom-color: ${theme.colors
        .GriffindorYellow}; /* agregar borde inferior amarillo cuando hay un error */
    `}
`;

export const Label = styled.label`
  color: gray;
  font-size: 16px;
  font-weight: bold;
  margin: 16px;
  color: ${({ theme }) => theme.colors.white100};
`;

export const FormButton = styled.button`
  border-radius: 5px;
  cursor: pointer;
  margin: 16px;
  padding: 5px;
  font-family: Oswald;
  background-color: ${({ theme }) => theme.colors.GriffindorGold};
`;

export const FormMessage = styled.p`
  align-items: center;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.GriffindorYellow};
`;

export const Error = styled.span`
  color: red;
  font-size: 12px;
  font-weight: 500;
  margin-top: 8px;
  margin-left: 15px;
  color: ${({ theme }) => theme.colors.GriffindorYellow};
`;

export const Return = styled.p`
  color: red;
  font-size: 12px;
  font-weight: 500;
  margin-top: 8px;
  margin-left: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.GriffindorYellow};
`;

export const StyledLink = styled.a`
  /* text-decoration: none; */
  color: ${({ theme }) => theme.colors.GriffindorYellow};
`;
