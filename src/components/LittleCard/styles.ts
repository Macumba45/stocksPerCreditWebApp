import styled from 'styled-components';


export const MainContainer = styled.div`

display: flex;
justify-content: center;
align-items: center;

`

export const Container = styled.div`
     width: 250px;
     height: 100px; 
     display: flex;
     align-items: center;
     justify-content: center;
     margin: 10px;
     border-radius: 20px;
     background-color: ${({ theme }) => theme.colors.white};
     box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

`;

export const ContainerIcon = styled.div`
     display: flex;
     justify-content:center;
     flex-direction:column;
     margin-right: 1rem;
`;

export const ContainerInfo = styled.div`
     display: flex;
     justify-content:center;
     flex-direction:column;
     margin-left: 1rem;

`;

export const Image = styled.img`
     display: flex;
     justify-content: space-between;
`;

export const LabelSpan = styled.span`
     font-family: ${({ theme }) => theme.fonts.primary};
     font-size: ${({ theme }) => theme.fontSizes.smallest};
     font-weight: ${({ theme }) => theme.fontWeights.light};
     margin-bottom: 0.1rem;
`


export const DataSpan = styled.span`
     font-family: ${({ theme }) => theme.fonts.primary};
     font-size: ${({ theme }) => theme.fontSizes.smallest};
     font-weight: ${({ theme }) => theme.fontWeights.bold};
`



