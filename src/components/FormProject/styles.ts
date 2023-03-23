import styled, {css} from 'styled-components';
import {Form as DefaultForm} from 'formik';

export const FormContainer = styled.div``;

export const Form = styled(DefaultForm)``;

export const InputContainer = styled.div``;

export const Input = styled.input<{$hasError?: boolean}>`
     padding: 10px;
     margin: 10px;
     border-radius: 5px;
     background-color: transparent;
     color: ${({theme}) => theme.colors.white100};
     ${({$hasError, theme}) =>
          $hasError ? theme.colors.danger : theme.colors.white100};
     padding: 10px 14px;

     ${({$hasError, theme}) =>
          $hasError &&
          css`
               color: ${theme.colors.white100};
          `}
`;

export const Error = styled.span``;
export const FormButton = styled.button``;

export const BackButton = styled.button``;
