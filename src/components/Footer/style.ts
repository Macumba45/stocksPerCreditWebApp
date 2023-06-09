import styled from 'styled-components';

export const FooterContainer = styled.div`
     background-color: ${({theme}) => theme.colors.secondary};
`;

export const FooterSection = styled.div`
     padding: 4rem 4rem;
`;
export const FooterLinks = styled.div`
     display: flex;
     align-items: flex-start;
     flex-direction: row;
     flex-wrap: wrap;
     width: 100%;
     text-align: left;
     margin-bottom: 2rem;

     @media screen and (min-width: 600px) {
     }
`;
export const FooterAboutUsDiv = styled.div`
     color: ${({theme}) => theme.colors.light};
     font-family: ${({theme}) => theme.fonts.primary};
     margin-bottom: 2rem;
     margin-right: 40rem;

     @media screen and (min-width: 600px) {
          display: flex;
          flex-direction: column;
     }
`;

export const FooterLinksDiv = styled.div`
     width: 9.4rem;
     display: flex;
     flex-direction: column;
     margin-right: 10rem;
     color: ${({theme}) => theme.colors.light};
     font-family: ${({theme}) => theme.fonts.primary};

     @media screen and (min-width: 600px) {
          flex-direction: row;
     }
`;
export const InvestDiv = styled.div`
     margin: 1.2rem 1rem;
`;

export const EmpDiv = styled.div`
     margin: 1.2rem 1rem;
`;

export const UsDiv = styled.div`
     margin: 1.2rem 1rem;
`;

export const SocialMedia = styled.div`
     display: flex;
     flex-direction: row;
`;
export const H2 = styled.h2`
     font-size: ${({theme}) => theme.fontSizes.mediumSmall};
     font-weight: ${({theme}) => theme.fontWeights.bold};
     font-family: ${({theme}) => theme.fonts.secondary};
     margin-left: 0.8rem;
`;
export const H4 = styled.h4`
     color: ${({theme}) => theme.colors.primaryLight};
`;

export const Link = styled.a`
     color: ${({theme}) => theme.colors.light};
     text-decoration: none;
`;
export const Paragraph = styled.p`
     margin: 0.5rem 0;
`;
export const ParagraphUs = styled.p`
     margin-bottom: 0.8rem;
     margin-top: 0.5rem;
     margin-left: 0.5rem;
     color: ${({theme}) => theme.colors.primaryLight};
`;

export const ParagraphIcon = styled.p`
     margin: 0 0.3rem;
`;

export const HR = styled.hr`
     background-color: white;
     padding: 0 4rem;
`;

export const LogoFooter = styled.img`
     width: 50px;
     height: 50px;
`;

export const ContainerLogoBranding = styled.div`
     display: flex;
     align-items: center;
`;
