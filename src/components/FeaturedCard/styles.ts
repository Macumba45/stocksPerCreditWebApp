import styled from 'styled-components';

export const MainContainer = styled.div`
     width: 100%;
     margin-top: 4.3rem;
     display: flex;
     flex-direction: column;

     @media screen and (min-width: 600px) {
          height: 600px;
          justify-content: space-around;
          flex-direction: row;
     }
`;

export const ContainerText = styled.div`
     margin-top: 4rem;
`;

export const Title = styled.h1`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: 3rem;
     font-weight: ${({theme}) => theme.fontWeights.semiBold};
     color: ${({theme}) => theme.colors.primary};
     margin-bottom: 2rem;
     margin-left: 2rem;
     margin-right: 2rem;
     word-wrap: break-word;

     @media screen and (min-width: 600px) {
          font-size: ${({theme}) => theme.fontSizes.mediumBig};
          margin-bottom: 2rem;
          margin-left: 2rem;
          margin-right: 2rem;
     }
`;

export const SubTitle = styled.h2`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.small};
     font-weight: ${({theme}) => theme.fontWeights.semiLight};
     color: ${({theme}) => theme.colors.primary};
     margin-left: 2rem;
`;

export const ButtonContainer = styled.div`
     display: flex;
     justify-content: flex-start;
     margin-top: 2rem;
     margin-left: 2rem;
`;

export const ButtonSimulation = styled.button`
     padding-left: 2rem;
     padding-right: 2rem;
     padding-top: 0.8rem;
     padding-bottom: 0.8rem;
     background-color: ${({theme}) => theme.colors.primary};
     border: 1px solid ${({theme}) => theme.colors.light};
     font-weight: ${({theme}) => theme.fontWeights.semiLight};
     color: white;
     font-family: ${({theme}) => theme.fonts.primary};
     border-radius: 5px;
     cursor: pointer;
`;

export const ContainerImg = styled.div`
     background-image: none;
     width: 300px;
     height: 300px;
     background-size: cover;
     background-repeat: no-repeat;
     margin: 2rem auto;
     margin-top: 4rem;

     border-radius: 10px;

     background-image: url('https://www.65ymas.com/uploads/s1/26/12/42/cuales-son-los-principales-fondos-de-inversion-que-existen-en-el-mercado.jpeg');

     @media screen and (min-width: 700px) {
          /* background-image: url('https://www.65ymas.com/uploads/s1/26/12/42/cuales-son-los-principales-fondos-de-inversion-que-existen-en-el-mercado.jpeg'); */
          width: 600px;
          margin-right: 2rem;
          margin-top: 4rem;
     }
`;

export const SpanFeatured = styled.span`
     color: ${({theme}) => theme.colors.secondary};
`;

export const FeaturedImg = styled.img`
     background-size: cover;
     width: 100%;
     height: 100%;
`;
