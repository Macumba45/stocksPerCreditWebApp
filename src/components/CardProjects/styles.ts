import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  margin :1rem;
  width: 270px ;
  height: 600px;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
    transform: scale(1.02);
    transition: box-shadow 0.5s ease, transform 0.5s ease;
  }
`;
export const ContainerImg = styled.div`
border:none
`

export const Image = styled.img`
  width: 270px;
  height: 300px;
  border:none

`;
export const ContainerTitle = styled.div`
position: relative;;
left: 1rem;
max-width: 220px; /* establecer un ancho máximo para el contenedor */

`

export const Title = styled.h2`
  margin: 10px 0;
  font-size: 20px;
  text-align: left;
  font-weight: bold;
`;

export const ContainerDesc = styled.div`
  width: 100%;
  max-width: 220px; /* establecer un ancho máximo para el contenedor */
  position: relative;;
  left: 1rem;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word; /* permitir que las palabras se dividan en varias líneas si no caben en una sola */
  color: #606060;
  font-family: ${({ theme }) => theme.fonts.primary};
     font-size: ${({ theme }) => theme.fontSizes.smallest};
     font-weight: ${({ theme }) => theme.fontWeights.bold};

`;
export const ContainerButton = styled.div``

export const HeartButton = styled.button<{ liked: boolean }>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 32px;
  color: ${(props) => (props.liked ? 'red' : 'black')};

  &:focus {
    outline: none;
  }
`;
export const HeartIcon = styled.i`
  display: inline-block;
  width: 0;
  height: 0;
  margin-right: 5px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #ffffff;
  transform: rotate(45deg);
`;

export const ContainerLocations = styled.div`
position: relative;
position: relative;;
margin-left: 1rem;
margin-top: 1rem;

`


export const Locations = styled.p`
color: ${({ theme }) => theme.colors.lighterGrey};
font-family: ${({ theme }) => theme.fonts.primary};
     font-size: ${({ theme }) => theme.fontSizes.smallest};
     font-weight: ${({ theme }) => theme.fontWeights.bold};
     max-width: 220px; /* establecer un ancho máximo para el contenedor */


`

export const ContainerCategories = styled.div`
position: relative;;
margin-left: 1rem;
margin-top: 1rem;




`

export const Categories = styled.p`
  display: inline-block;
  padding: 1px ;
  background-color: #7E1B75;
  color:white;
  border-radius: 10px;
  font-family: ${({ theme }) => theme.fonts.primary};
     font-size: 13px;
     font-weight: ${({ theme }) => theme.fontWeights.bold};
     padding: 0.3rem;


`;


export const ContainerLinear = styled.div`
position: relative;
position: relative;;
margin-left: 1rem;
margin-top: 2rem;

`