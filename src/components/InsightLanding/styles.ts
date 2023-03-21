import styled from 'styled-components';

export const MainContainer = styled.div`
     display: flex;
     flex-wrap: wrap;
     height: 6rem;
     justify-content: center;
     margin-top: 6rem;
     margin-bottom: 3rem;
     border-radius: 10px;
     height: 300px;
     @media screen and (max-width: 500px) {
        margin-top: 2rem;
     }
     @media screen and (min-width: 800px) {
          height: 100px;
     }
`;
export const Container = styled.div`
     width: 300px;
     height: 100px;
     margin-left: 0.5rem;
     margin-right: 0.5rem;
     border-radius: 10px;
     margin-bottom: 2rem;
     text-align: center;
     box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

     @media screen and (width: 800px) {
          height: 300px;
     }
`;

export const TitleInsight = styled.h1`
     font-family: ${({ theme }) => theme.fonts.primary};
     font-size: ${({ theme }) => theme.fontSizes.small};
     font-weight: ${({ theme }) => theme.fontWeights.semiBold};
     margin-top: 1rem;
`;

export const DataContainer = styled.div`
     font-family: ${({ theme }) => theme.fonts.primary};
     font-size: ${({ theme }) => theme.fontSizes.smallest};
     font-weight: ${({ theme }) => theme.fontWeights.semiBold};
     margin-top: 1.5rem;
`;
