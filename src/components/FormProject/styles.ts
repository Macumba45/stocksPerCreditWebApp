import styled, { css } from 'styled-components';
import { Form as DefaultForm } from 'formik';

export const FormContainer = styled.div`
     margin-top: 80px;
     align-items: center;
     display: flex;
     justify-content: center;
     margin-bottom: 4rem;
`;

export const Form = styled(DefaultForm)`
 @media (max-width: 480px) {
          margin-top: 6.25rem;
          width: 25rem;
     }`;
export const Formulario = styled.div`
     /* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5); */
     margin-bottom: 30px;
     @media (max-width: 761px) {
          margin-top: 6.25rem;
          margin-left: 6.25rem;
          width: 20rem;
     }
     @media (max-width: 480px) {
          margin-top: 6.25rem;
          margin-left: 6.25rem;
          width: 20rem;
     }
`;

export const InputContainer = styled.div`
     min-width: 600px;
     border-radius: 5px;
     padding: 20px;
     background-color: white;
`;

export const Input = styled.input<{ $hasError?: boolean }>`
     font-family: 'Open Sans', sans-serif;
     width: 17.5rem;
     height: 2rem;
     border-radius: 5px;
     font-size: 18px;
     padding: 10px;
     color: black;
     border: 0.5px solid lightgray;
`;

export const Error = styled.span`
     display: block; /* Agregamos esta propiedad para mostrar los span en una nueva línea */
     color: ${({ theme }) => theme.colors.danger};
     font-family: ${({ theme }) => theme.fonts.primary};
     font-size: 0.8rem;
     margin-top: 0.8rem;
     margin-left: 0.5rem;
`;

export const FormButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
     background-color: ${({ theme }) => theme.colors.primarydark};
  }
`;

export const BackButton = styled.button`
     border: none;
     background: transparent;
`;

export const LabelContainer = styled.div`
     margin-left: 2px;
     margin-bottom: 6px;
`;

export const Label = styled.label`
     display: block;
     margin-bottom: 10px;
     font-family: ${({ theme }) => theme.fonts.primary};
     font-size: 20px;
     font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const TitleForm = styled.h1`
     font-family: ${({ theme }) => theme.fonts.primary};
     font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
     font-weight: ${({ theme }) => theme.fontWeights.bold};
     margin-bottom: 3.125rem;
     margin-left: 1.875rem;
     margin-top: 3.125rem;
     @media (max-width: 480px) {
          margin-left: 6.25rem;
          width: 20rem;
     }
`;

export const BasicInformation = styled.h3`
     font-family: ${({ theme }) => theme.fonts.primary};
     font-size: ${({ theme }) => theme.fontSizes.smallest};
     font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
export const DivIcon1 = styled.div`
     display: inline-block;
     margin-top: 10px;
     margin-left: 20px;
`;

export const DivIcon = styled.div`
     display: inline-block;
     margin-top: 30px;
     margin-left: 20px;
`;

export const ButtonNext = styled.button`
  display: inline-block;
  margin-left: 10px;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
     background-color: ${({ theme }) => theme.colors.primarydark};
  }
  @media (max-width: 761px) {
     margin-left: 7.50rem;
          width: 20rem;
     }
  @media (max-width: 480px) {
          margin-left: 6.25rem;
          width: 20rem;
     }
`;

export const ButtonPrevious = styled.button`
    display: inline-block;
    margin-left: 10px;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
     background-color: ${({ theme }) => theme.colors.primarydark};
  }
  @media (max-width: 761px) {
     margin-bottom: 1rem;
          margin-left: 7.50rem;
          width: 20rem;
     }
  @media (max-width: 480px) {
          margin-bottom: 1rem;
          margin-left: 6.25rem;
          width: 20rem;
     }
`;