import styled from 'styled-components';

export const MainContainer = styled.div`
     margin: 0 auto;
     display: flex;
     flex-direction: row;
`;

export const CardContainer = styled.div`
     display: flex;
     margin: 1rem;
     width: 270px;
     min-height: 600px;
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
     border: none;
`;

export const Image = styled.img`
     width: 270px;
     height: 300px;
     border: none;
`;
export const ContainerTitle = styled.div`
     position: relative;
     left: 1rem;
     max-width: 220px; /* establecer un ancho máximo para el contenedor */
`;

export const Title = styled.h2`
     margin: 10px 0;
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: ${({theme}) => theme.fontWeights.semiBold};
     text-align: left;
`;

export const ContainerDesc = styled.div`
     width: 100%;
     max-width: 220px; /* establecer un ancho máximo para el contenedor */
     position: relative;
     left: 1rem;
`;

export const Description = styled.p`
     margin: 0;
     font-size: 16px;
     line-height: 1.5;
     word-wrap: break-word; /* permitir que las palabras se dividan en varias líneas si no caben en una sola */
     color: #606060;
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: ${({theme}) => theme.fontWeights.semiLight};
`;
export const ContainerButton = styled.div``;

export const HeartButton = styled.button<{liked: boolean}>`
     background-color: transparent;
     border: none;
     cursor: pointer;
     font-size: 32px;
     color: ${(props) => (props.liked ? 'red' : 'black')};
     margin-left: 0.5rem;

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

export const Container = styled.div`
     display: flex;
     align-items: center; /* alinear los elementos verticalmente en el centro */
     margin-top: 1rem;
`;

export const ContainerCountry = styled.div`
     margin-left: 1rem;
     margin-bottom: 1rem;
     margin-top: 1rem;
`;

export const Country = styled.p`
     color: ${({theme}) => theme.colors.lighterGrey};
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: ${({theme}) => theme.fontWeights.semiLight};
     max-width: 220px; /* establecer un ancho máximo para el contenedor */
`;

export const ContainerCity = styled.div`
     margin-left: 1rem;
     margin-bottom: 1rem;
`;

export const City = styled.p`
     color: ${({theme}) => theme.colors.lighterGrey};
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: ${({theme}) => theme.fontWeights.semiLight};
     max-width: 220px; /* establecer un ancho máximo para el contenedor */
`;

export const ContainerCategories = styled.div`
     position: relative;
     margin-left: 1rem;
     margin-top: 1rem;
     margin-bottom: 1rem;
`;

export const Categories = styled.p`
     display: inline-block;
     padding: 1px;
     background-color: #7e1b75;
     color: white;
     border-radius: 10px;
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: 13px;
     font-weight: ${({theme}) => theme.fontWeights.bold};
     padding: 0.3rem;
`;

export const ContainerLinear = styled.div`
     position: relative;
     position: relative;
     margin-left: 1rem;
     margin-top: 2rem;
     margin-bottom: 2rem;
`;


export const ContainerImgModal = styled.div`
     border: none;
`
export const ImageModal = styled.img`
     width: 100%;
     height: 100px;
     border: none;
     `

export const ContainerTitleModal = styled.div`
     position: relative;
     left: 1rem;
     max-width: 220px; /* establecer un ancho máximo para el contenedor */
     `
export const TitleModal = styled.p`
     margin: 10px 0;
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: ${({theme}) => theme.fontWeights.semiBold};
     text-align: left;
     `

export const ContainerDescModal = styled.div`
     width: 100%;
     max-width: 220px; /* establecer un ancho máximo para el contenedor */
     position: relative;
     left: 1rem;
     `
export const DescriptionModal = styled.p`
     margin: 0;
     font-size: 16px;
     line-height: 1.5;
     word-wrap: break-word; /* permitir que las palabras se dividan en varias líneas si no caben en una sola */
     color: #606060;
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: ${({theme}) => theme.fontWeights.semiLight};
     `


export const ContainerCountryModal = styled.div`
     margin-left: 1rem;
     margin-bottom: 1rem;
     margin-top: 1rem;
     `
export const CountryModal = styled.p`
     color: ${({theme}) => theme.colors.lighterGrey};
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: ${({theme}) => theme.fontWeights.semiLight};
     max-width: 220px; /* establecer un ancho máximo para el contenedor */
`


export const ContainerCityModal = styled.div`
     margin-left: 1rem;
     margin-bottom: 1rem;
`
export const CityModal = styled.p`
     color: ${({theme}) => theme.colors.lighterGrey};
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.smallest};
     font-weight: ${({theme}) => theme.fontWeights.semiLight};
     max-width: 220px; /* establecer un ancho máximo para el contenedor */
`


export const ContainerCategoriesModal = styled.div`
     position: relative;
     margin-left: 1rem;
     margin-top: 1rem;
     margin-bottom: 1rem;
     `
export const CategoriesModal = styled.p`
   display: inline-block;
     padding: 1px;
     background-color: #7e1b75;
     color: white;
     border-radius: 10px;
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: 13px;
     font-weight: ${({theme}) => theme.fontWeights.bold};
     padding: 0.3rem;
     `
