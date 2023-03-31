import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  `;

export const ContainerCampagin = styled.div`
     margin-left: 1rem;
     margin-top: 2rem;
     line-height: 2rem;
     margin-right: 2rem;
     @media screen and (min-width: 600px) {
          /* height: 600px; */
          margin-left: 2rem;
          width: 600px;
     }

     @media screen and (min-width: 900px) {
          /* height: 600px; */
          margin-left: 2rem;
          width: 1100px;
     }
`;

export const SpanCampaign = styled.span`
font-family: ${({ theme }) => theme.fonts.primary};
     font-size: 25px;
     font-weight: ${({ theme }) => theme.fontWeights.semiLight};
     color: ${({ theme }) => theme.colors.primary};
     line-height: 1.5rem;

`

export const MainContainerLabel = styled.div`
     margin-bottom:1rem; 

   
`;
