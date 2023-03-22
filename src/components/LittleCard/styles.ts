import styled from 'styled-components';

export const Container = styled.div`
     height: 90px;
     display: flex;
     justify-content:center;
     flex-direction:column;
     margin: 10px 20px;
     border-radius: 20px;
     background-color: ${({theme}) => theme.colors.white};
`;

export const ContainerIcon = styled.div`
     display: flex;
     justify-content:center;
     flex-direction:column;
`;

export const Image = styled.img`
     display: flex;
     justify-content: space-between;
`;

export const Info = styled.p`
     font-size: 18px;
     font-family: Oswald;
     display: flex;
     justify-content: center;
     align-items: center;
     color: black;
     font-family: ${({ theme }) => theme.fonts.primary};
     font-size: ${({ theme }) => theme.fontSizes.smallest};
     font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
