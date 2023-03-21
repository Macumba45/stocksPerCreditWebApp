import styled from 'styled-components';

export const MainContainer = styled.div`
     max-width: 800px;
     margin: 0 auto;
     margin-top: 6rem;
     margin-bottom: 3rem;
     display: flex;
     flex-direction: column;
     box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const TitleContainer = styled.div`
     margin: 0 auto;
`;

export const Title = styled.h1`
     font-family: ${({ theme }) => theme.fonts.primary};
     font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
     font-weight: ${({ theme }) => theme.fontWeights.semiBold};
     margin-top: 3rem;
`;

export const SubTitleContainer = styled.div`
     margin: 0 auto;
     text-align: center;
`;

export const SubTitle = styled.h2`
     font-family: ${({ theme }) => theme.fonts.primary};
     font-size: ${({ theme }) => theme.fontSizes.smallest};
     font-weight: ${({ theme }) => theme.fontWeights.semiLight};
     line-height: 30px;
     margin: 3rem 2rem 0 2rem;
`;

export const ButtonContainer = styled.div`
     margin: 4rem auto;
`;
