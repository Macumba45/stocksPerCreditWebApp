import styled from 'styled-components';

export const MainContainer = styled.div`
     width: 100%;
     height: 600px;
     display: flex;
     justify-content: center;
     @media screen and (min-width: 600px) {
          height: 600px;
          justify-content: space-around;
     }
`;

export const ContainerText = styled.div`
     margin-top: 4rem;
     margin-right: 2rem;
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
     width: 600px;
     height: 400px;
     background-size: cover;
     background-repeat: no-repeat;
     margin-top: 4rem;
     margin-left: 2rem;
     border-radius: 10px;
     margin-right: 2rem;
     @media screen and (min-width: 700px) {
          background-image: url('https://img.freepik.com/foto-gratis/concepto-trabajo-empresarial_1388-73.jpg?w=2000&t=st=1679509442~exp=1679510042~hmac=bf948dc85394a8a3fc48880d934d517604d153dc5e5f152fdff695af2c239725');
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
