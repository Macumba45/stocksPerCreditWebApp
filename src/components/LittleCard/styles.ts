import styled from 'styled-components';

export const Container = styled.div`
     height: 90px;
     display: flex;
     margin: 10px 20px;
     border-radius: 20px;
     background-color: ${({theme}) => theme.colors.white};
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
`;
