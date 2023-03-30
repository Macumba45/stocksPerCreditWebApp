import styled from 'styled-components';
const MasterCard = require('./assets/icons8-mastercard-logo-144.png');
const Paypal = require('./assets/icons8-paypal-144.png');

export const MainContainer = styled.div`
     display: flex;
     justify-content: center;
     margin-top: 7rem;
`;

export const ContainerForm = styled.div`
     width: 400px;
     height: 550px;
     border-radius: 10px;
     box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ContainerSteps = styled.div`
     display: flex;
     margin-top: 2rem;
     align-items: center;
`;

export const TextSteps1 = styled.p`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: ${({theme}) => theme.fontWeights.semiLight};
     color: ${({theme}) => theme.colors.lighterGrey};
     margin-left: 0.5rem;
     margin-right: 1rem;
`;

export const TextSteps2 = styled.p`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: ${({theme}) => theme.fontWeights.mediumSemiBold};
     color: ${({theme}) => theme.colors.primary};
     margin-left: 0.5rem;
     margin-right: 1rem;
`;

export const ContainerTitle = styled.div`
     margin-top: 3rem;
     align-items: center;
     margin-left: 1rem;
`;

export const TitleStartup = styled.h1`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: ${({theme}) => theme.fontWeights.mediumSemiBold};
     color: ${({theme}) => theme.colors.primary};
`;

export const ContainerAmount = styled.div`
     margin-top: 1rem;
     align-items: center;
     margin-bottom: 2rem;
`;

export const ContainerPayment = styled.div`
     margin-top: 1rem;
     align-items: center;
`;

export const TitlePayment = styled.h1`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: ${({theme}) => theme.fontWeights.semiBold};
     color: ${({theme}) => theme.colors.lighterGrey};
`;

export const ContainerMastercard = styled.div`
     margin-top: 1rem;
     align-items: center;
     display: flex;
`;

export const MastercardPayment = styled.div`
     border-bottom: 1px solid black;
     display: flex;
     width: 300px;
     height: 50px;
     align-items: center;
`;

export const IconPaymentCardPaypal = styled.div`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: ${({theme}) => theme.fontWeights.semiBold};
     color: ${({theme}) => theme.colors.dark};
     display: flex;
     align-items: center;
     margin-right: 1rem;
     width: 40px;
     height: 40px;
     background-image: url(${Paypal});
     background-size: cover;
`;

export const IconPaymentCard = styled.div`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: ${({theme}) => theme.fontWeights.semiBold};
     color: ${({theme}) => theme.colors.dark};
     display: flex;
     align-items: center;
     margin-right: 1rem;
     width: 40px;
     height: 40px;
     background-image: url(${MasterCard});
     background-size: cover;
`;

export const LabelPaymentCard = styled.div`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: ${({theme}) => theme.fontWeights.semiBold};
     color: ${({theme}) => theme.colors.dark};
     display: flex;
     align-items: center;
     margin-right: 1rem;
`;

export const ButtonPaymentContainer = styled.div`
     margin-top: 4rem;
     display: flex;
     justify-content: center;
`;
