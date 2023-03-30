import styled from 'styled-components';

export const MainContainer = styled.div``;

export const MainContainerInv = styled.div`
     /* margin-left: 5rem; */

     @media screen and (min-width: 1000px) {
          margin-left: 5rem;
     }
`;

export const MainContainerDesktop = styled.div`
     display: flex;
     width: 100%;

     @media screen and (max-width: 1000px) {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-top: 5rem;
     }
`;

export const TitleContainer = styled.div`
     margin-bottom: 2rem;
     margin-top: 2rem;
     margin-right: 2rem;
     max-width: 600px;
`;

export const Title = styled.h1`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.small};
     font-weight: ${({theme}) => theme.fontWeights.bold};
     color: ${({theme}) => theme.colors.primary};
     margin-left: 1rem;
     @media screen and (min-width: 600px) {
          margin-left: 3rem;

          margin-top: 3.2rem;
          margin-bottom: 3rem;
     }
`;

export const SubTitleContainer = styled.div`
     margin-left: 1rem;
     margin-right: 2rem;
     margin-bottom: 2rem;
     @media screen and (min-width: 600px) {
          margin-left: 3rem;
          margin-top: 3rem;
          margin-bottom: 3rem;
     }
`;

export const SubTitle = styled.h3`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: 250;
     color: ${({theme}) => theme.colors.dark};
     margin-right: 0.5rem;
     line-height: 1.8rem;
`;

export const MainInvestContainer = styled.div`
     /* display: flex; */
`;

export const PauloContainer = styled.div`
     /* display: flex; */
`;

export const PauloContainer2 = styled.div`
     /* display: flex; */
`;
export const MainInvestContainerFlex = styled.div`
     margin-bottom: 3rem;
`;

export const CalculadoraAccionesContainer = styled.div`
     display: flex;
     margin-bottom: 1rem;
`;

export const TitleInvestContainer = styled.div`
     display: flex;
     justify-content: center;
     margin-bottom: 1rem;
`;

export const TitleInvest = styled.h3`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.small};
     color: ${({theme}) => theme.colors.primary};

     @media screen and (min-width: 600px) {
          font-size: 40px;
     }
`;

export const SubTitleInvestContainer = styled.div`
     display: flex;
     justify-content: center;
     margin-bottom: 2rem;
     margin-top: 2rem;

     @media screen and (min-width: 600px) {
          width: 500px;
          margin: 0 auto;
          margin-bottom: 2rem;
          margin-top: 2rem;
     }
`;

export const SubTitleInvest = styled.h3`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: 15px;
     font-weight: 300;
     color: ${({theme}) => theme.colors.dark};
     text-align: center;
     margin-left: 2rem;
     margin-right: 2rem;
     line-height: 1.5rem;

     @media screen and (min-width: 600px) {
          font-size: ${({theme}) => theme.fontSizes.smallest};
     }
`;

export const ButtonContainer = styled.div`
     display: flex;
     justify-content: center;
     margin-bottom: 2rem;
`;

export const InputContainer = styled.div`
     display: flex;
     justify-content: center;
`;

export const StockersContainer = styled.div`
     display: flex;
     justify-content: center;
`;

export const StockersTitles = styled.div`
     margin-bottom: 0.5rem;
`;

export const StockersFunds = styled.div`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: ${({theme}) => theme.fontWeights.semiLight};
     color: ${({theme}) => theme.colors.dark};
     margin-left: 1rem;
     margin-right: 1rem;
     @media screen and (min-width: 600px) {
          font-size: ${({theme}) => theme.fontSizes.small};
          margin-left: 3rem;
          margin-right: 3rem;
     }
`;

export const StockersInvestors = styled.div`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: ${({theme}) => theme.fontWeights.semiLight};
     color: ${({theme}) => theme.colors.dark};
     margin-left: 1rem;
     margin-right: 1rem;
     @media screen and (min-width: 600px) {
          font-size: ${({theme}) => theme.fontSizes.small};
          margin-left: 3rem;
          margin-right: 3rem;
     }
`;

export const StockersTime = styled.div`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: ${({theme}) => theme.fontWeights.semiLight};
     color: ${({theme}) => theme.colors.dark};
     margin-left: 1rem;
     margin-right: 1rem;
     @media screen and (min-width: 600px) {
          font-size: ${({theme}) => theme.fontSizes.small};
          margin-left: 3rem;
          margin-right: 3rem;
     }
`;

export const SpanData = styled.span`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: ${({theme}) => theme.fontWeights.bold};
     color: ${({theme}) => theme.colors.primary};
     line-height: 1.5rem;
     @media screen and (min-width: 600px) {
          font-size: ${({theme}) => theme.fontSizes.small};
     }
`;

export const LocationContainer = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
`;

export const LinearProgress = styled.div`
     width: 300px;
     margin: 0 auto;

     @media screen and (min-width: 600px) {
          width: 600px;
     }
`;

export const LocationCountry = styled.div`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: ${({theme}) => theme.fontWeights.bold};
     color: ${({theme}) => theme.colors.dark};
     margin-left: 1rem;
     margin-right: 1rem;
     display: flex;
     align-items: center;
`;

export const LocationCity = styled.div`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: ${({theme}) => theme.fontWeights.bold};
     color: ${({theme}) => theme.colors.dark};
     margin-left: 1rem;
     margin-right: 1rem;
     display: flex;
     align-items: center;
`;

export const SpanLocation = styled.span`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: ${({theme}) => theme.fontWeights.bold};
     color: ${({theme}) => theme.colors.primary};
     line-height: 1.5rem;
     @media screen and (min-width: 600px) {
          font-size: ${({theme}) => theme.fontSizes.small};
     }
`;

export const SpanTags = styled.span`
     font-family: ${({theme}) => theme.fonts.primary};
     font-weight: ${({theme}) => theme.fontWeights.bold};
     color: ${({theme}) => theme.colors.light};
     line-height: 1.5rem;
     @media screen and (min-width: 600px) {
          font-size: ${({theme}) => theme.fontSizes.smallest};
     }
`;

export const TagsContainer = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
`;

export const Tags = styled.div`
     display: inline-block;
     padding: 1px;
     background-color: #7e1b75;
     color: white;
     border-radius: 10px;
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: 5px;
     font-weight: ${({theme}) => theme.fontWeights.bold};
     padding: 0.2rem;
     margin-left: 1rem;
     margin-right: 1rem;
`;
