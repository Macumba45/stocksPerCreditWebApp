import styled from 'styled-components';

export const RangeSliderDiv = styled.div``;
export const InputContainer = styled.div`
     display: flex;
     flex-direction: row;
     align-items: center;
     padding: 0.5 1.8rem;
     * {
    box-sizing: border-box;
  }
`;

export const MoneyOutput = styled.p`
     font-weight: ${({theme}) => theme.fontWeights.bold};
`;

export const MinLabel = styled.label`
     margin-right: 5%;
     font-family: ${({theme}) => theme.fonts.primary};
`;
export const MaxLabel = styled.label`
     margin-right: 4%;
     font-family: ${({theme}) => theme.fonts.primary};
`;
