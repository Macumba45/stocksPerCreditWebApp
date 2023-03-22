import styled from 'styled-components';

export const MainContainer = styled.div`
     margin: 0 auto;
     display: flex;
`;

export const Container = styled.div`
     display: flex;
     flex-direction: column;
`;

export const ContainerProjects = styled.div`
     margin: 0 auto;
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
`;

export const ContainerTitle = styled.div``;

export const TitlePopular = styled.h1`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.mediumSmall};
     font-weight: ${({theme}) => theme.fontWeights.semiLight};
     margin-top: 6rem;
     margin-left: 3rem;
     margin-bottom: 2rem;
`;
