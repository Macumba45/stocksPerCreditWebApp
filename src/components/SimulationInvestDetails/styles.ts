import styled from 'styled-components';

export const MainContainerButtonSimulation = styled.div`
     display: flex;
     margin: 0 auto;
     flex-direction: column;
     margin-bottom: 0rem;
`;

export const MainContainer = styled.div`
     display: flex;
     margin: 0 auto;
     flex-direction: column;
`;

export const MainContainerSimulation = styled.div`
     margin-top: 1.5rem;
     text-align: center;
     display: flex;
     flex-direction: column;
     @media screen and (min-width: 600px) {
          flex-direction: row;
     }
`;
export const TitleSimulationContainer = styled.div`
     margin-top: 1.5rem;
     text-align: center;
`;
export const TitleSimulation = styled.h1`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.small};
     font-weight: ${({theme}) => theme.fontWeights.semiBold};
     color: ${({theme}) => theme.colors.primary};
`;

export const LabelSimulationContainer = styled.div`
     margin-top: 1.5rem;
     align-items: center;
     display: flex;
     @media screen and (min-width: 600px) {
          margin-left: 1rem;
     }
`;
export const LabelSimulation = styled.label`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: ${({theme}) => theme.fontWeights.semiLight};
`;
export const SpanSimuation = styled.span`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.small};
     color: ${({theme}) => theme.colors.primary};
     font-weight: ${({theme}) => theme.fontWeights.bold};
`;

export const SpanTotal = styled.span`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: ${({theme}) => theme.fontWeights.semiBold};
     color: ${({theme}) => theme.colors.primary};
     margin-left: 0.6rem;
`;

export const CurrencySimulationContainer = styled.div`
     margin-top: 1.5rem;
     display: flex;
     align-items: center;
`;

export const TotalActions = styled.div`
     margin-top: 1.5rem;
     display: flex;
     align-items: center;
`;

export const InputLabelStyled = styled.label`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: ${({theme}) => theme.fontWeights.semiLight};
`;
