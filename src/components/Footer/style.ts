import styled from 'styled-components';

// export const MainContainer = styled.div`
//      height: 300px;
//      width: 100%;
//      background-color: ${({theme}) => theme.colors.lighterGrey};
//      margin-top: 5rem;
// `;

export const FooterContainer = styled.div`
     background-color: ${({theme}) => theme.colors.secondary};
`;

export const FooterSection = styled.div`
     padding: 4rem 4rem;
     display: flex;
     justify-content: space-between;
`;
export const FooterLinks = styled.div`
     display: flex;
     justify-content: space-around;
     align-items: flex-start;
     flex-direction: row;
     flex-wrap: wrap;
     width: 100%;
     text-align: left;
     margin-bottom: 2rem;
`;
export const FooterAboutUsDiv = styled.div`
     color: ${({theme}) => theme.colors.light};
     font-family: ${({theme}) => theme.fonts.primary};
     margin-left:-300px;
`;

export const FooterLinksDiv = styled.div`
     width: 9.4rem;
     display: flex;
     flex-direction: row;
     color: ${({theme}) => theme.colors.light};
     font-family: ${({theme}) => theme.fonts.primary};
`;
export const InvestDiv = styled.div`
     margin: 0 1rem;
`;

export const EmpDiv = styled.div`
     margin: 0 1rem;
`;

export const UsDiv = styled.div`
     margin: 0 1rem;
`;

export const SocialMedia = styled.div`
     display: flex;
     flex-direction: row;
`;
export const H2 = styled.h2`
     font-size: ${({theme}) => theme.fontSizes.mediumSmall};
     font-weight: ${({theme}) => theme.fontWeights.bold};
     margin-left: 2.8rem;
`;
export const H4 = styled.h4``;

export const Link = styled.a`
     color: ${({theme}) => theme.colors.light};
     text-decoration: none;
`;
export const Paragraph = styled.p`
     margin: 0.5rem 0;
`;

export const ParagraphIcon = styled.p`
     margin: 0.5rem;
`;

export const HR = styled.hr`
     background-color: white;
     padding: 0 4rem;
`;
