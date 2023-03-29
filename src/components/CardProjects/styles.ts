import styled from 'styled-components';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const MainContainer = styled.div`
     margin: 0 auto;
     display: flex;
     flex-direction: row;
`;

export const CardContainer = styled.div`
     display: flex;
     margin: 1rem;
     width: 270px;
     min-height: 500px;
     flex-direction: column;
     border-radius: 10px;
     border-bottom-left-radius: 0px;
     border-bottom-right-radius: 0px;
     box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
     background-color: #ffffff;
     &:hover {
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
          transform: scale(1.008);
          transition: box-shadow 0.5s ease, transform 0.5s ease;
     }
`;
export const ContainerImg = styled.div`
     border: none;
     max-width: 270px;
     display: flex;
     justify-content: center;
     margin-bottom: 2rem;
`;

export const Image = styled.iframe`
     border: none;
     object-fit: cover;
`;
export const ContainerTitle = styled.div`
     position: relative;
     display: flex;
     margin-left: 1rem;
     justify-content: space-between;
     align-items: center;
     max-width: 220px; /* establecer un ancho máximo para el contenedor */
`;

export const Title = styled.h2`
     margin: 10px 0;
     font-family: ${({ theme }) => theme.fonts.primary};
     font-size: ${({ theme }) => theme.fontSizes.small};
     font-weight: ${({ theme }) => theme.fontWeights.bold};
     color: ${({ theme }) => theme.colors.primary};

     text-align: left;
`;
export const ContainerInvestor = styled.div`
     position: relative;
     left: 1rem;
     max-width: 220px; /* establecer un ancho máximo para el contenedor */
`;

export const TotalInvestor = styled.h2`
     margin: 10px 0px;
     font-family: Roboto, sans-serif;
     color: #606060;
     font-size: 1rem;
     font-weight: 300;
     text-align: left;
     display: flex;
     -webkit-box-align: center;
     align-items: center;
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
     font-family: ${({ theme }) => theme.fonts.primary};
     font-size: ${({ theme }) => theme.fontSizes.smallest};
     font-weight: ${({ theme }) => theme.fontWeights.semiLight};
`;
export const ContainerButton = styled.div``;

// export const HeartButton = styled.button<{liked: boolean}>`
//      background-color: transparent;
//      border: none;
//      cursor: pointer;
//      font-size: 32px;
//      color: ${(props) => (props.liked ? 'red' : 'black')};
//      margin-left: 0.5rem;

//      &:focus {
//           outline: none;
//      }
// `;
export const HeartButton = styled.button`
  background-image: url('https://rithmi.com/wp-content/uploads/2021/05/png-transparent-computer-icons-heart-outline-love-text-heart.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  border-radius: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;


  &.active {
    background-color: red;
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

export const StyledFavoriteBorderOutlinedIcon = styled(FavoriteBorderOutlinedIcon)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};

  &.active {
    color: #ff0000;
  }
`;

export const StyledFavoriteIcon = styled(FavoriteIcon)`
  color: #ff0000;
  cursor: pointer;
`;

export const Container = styled.div`
     display: flex;
     align-items: center; /* alinear los elementos verticalmente en el centro */
     margin-top: 1rem;
`;

export const ContainerLocations = styled.div`
     margin-left: 1rem;
     margin-bottom: 0.3rem;
     margin-top: 1rem;
`;

export const Country = styled.p`
     color: ${({ theme }) => theme.colors.lighterGrey};
     font-family: ${({ theme }) => theme.fonts.primary};
     font-size: ${({ theme }) => theme.fontSizes.smallest};
     font-weight: ${({ theme }) => theme.fontWeights.semiLight};
     max-width: 220px; /* establecer un ancho máximo para el contenedor */
     display: inline-block;
`;

export const City = styled.p`
     color: ${({ theme }) => theme.colors.lighterGrey};
     font-family: ${({ theme }) => theme.fonts.primary};
     font-size: ${({ theme }) => theme.fontSizes.smallest};
     font-weight: ${({ theme }) => theme.fontWeights.semiLight};
     max-width: 220px; /* establecer un ancho máximo para el contenedor */
     display: inline-block;
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
     font-family: ${({ theme }) => theme.fonts.primary};
     font-size: 13px;
     font-weight: ${({ theme }) => theme.fontWeights.bold};
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
`;
export const ImageModal = styled.img`
     width: 100%;
     height: 100px;
     border: none;
`;

export const ContainerTitleModal = styled.div`
     position: relative;
     max-width: 220px; /* establecer un ancho máximo para el contenedor */
`;
export const TitleModal = styled.p`
     margin: 10px 0;
     font-family: ${({ theme }) => theme.fonts.primary};
     font-size: ${({ theme }) => theme.fontSizes.smallest};
     font-weight: ${({ theme }) => theme.fontWeights.bold};
     text-align: left;
`;

export const ContainerDescModal = styled.div`
     width: 100%;
     max-width: 220px; /* establecer un ancho máximo para el contenedor */
     position: relative;
`;
export const DescriptionModal = styled.p`
     margin: 0;
     font-size: 16px;
     line-height: 1.5;
     word-wrap: break-word; /* permitir que las palabras se dividan en varias líneas si no caben en una sola */
     color: #606060;
     font-family: ${({ theme }) => theme.fonts.primary};
     font-size: ${({ theme }) => theme.fontSizes.smallest};
     font-weight: ${({ theme }) => theme.fontWeights.semiLight};
`;

export const ContainerLocationsModal = styled.div`
     margin-bottom: 1rem;
     margin-top: 1rem;
`;
export const CountryModal = styled.p`
     color: ${({ theme }) => theme.colors.lighterGrey};
     font-family: ${({ theme }) => theme.fonts.primary};
     font-size: ${({ theme }) => theme.fontSizes.smallest};
     font-weight: ${({ theme }) => theme.fontWeights.semiLight};
     max-width: 220px; /* establecer un ancho máximo para el contenedor */
     display: inline-block;
`;
export const CityModal = styled.p`
     color: ${({ theme }) => theme.colors.lighterGrey};
     font-family: ${({ theme }) => theme.fonts.primary};
     font-size: ${({ theme }) => theme.fontSizes.smallest};
     font-weight: ${({ theme }) => theme.fontWeights.semiLight};
     max-width: 220px; /* establecer un ancho máximo para el contenedor */
     display: inline-block;
`;

export const ContainerCategoriesModal = styled.div`
     position: relative;
     margin-top: 1rem;
     margin-bottom: 1rem;
`;
export const CategoriesModal = styled.p`
     display: inline-block;
     padding: 1px;
     background-color: #7e1b75;
     color: white;
     border-radius: 10px;
     font-family: ${({ theme }) => theme.fonts.primary};
     font-size: 13px;
     font-weight: ${({ theme }) => theme.fontWeights.bold};
     padding: 0.3rem;
`;

export const ContainerRecaudacciones = styled.div``;

export const Recaudado = styled.p`
     margin-bottom: 1rem;
     border-bottom: 1px solid blue;
     color: ${({ theme }) => theme.colors.primary};
     font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const Inversores = styled.p`
     margin-bottom: 1rem;
     border-bottom: 1px solid blue;
     color: ${({ theme }) => theme.colors.lighterGrey};
     font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const MinimaInversion = styled.p`
     margin-bottom: 1rem;
     border-bottom: 1px solid blue;
     color: ${({ theme }) => theme.colors.lighterGrey};
     font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const Objetivos = styled.p`
     margin-bottom: 1rem;
     border-bottom: 1px solid blue;
     color: ${({ theme }) => theme.colors.lighterGrey};
     font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const ValorLimite = styled.p`
     margin-bottom: 1rem;
     border-bottom: 1px solid blue;
     color: ${({ theme }) => theme.colors.lighterGrey};
     font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const LabelSpan = styled.span`
     color: ${({ theme }) => theme.colors.black};
     font-family: ${({ theme }) => theme.fonts.primary};
     font-size: ${({ theme }) => theme.fontSizes.verysmall};
     font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const ContainerButtonModal = styled.div`
     margin-left: 80px;
`;

export const MenuButton = styled.button`
     background-color: transparent;
     border: none;
     color: #ccc;
     cursor: pointer;
`;

export const Menu = styled.div`
     position: absolute;
     display: flex;
     flex-direction: row;
     background-color: white;
     box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
     border-bottom-left-radius: 10px;
     border-bottom-right-radius: 10px;

     width: 270px;
     height: 50px;
     align-items: center;
`;

export const MenuItem = styled.button`
     background-color: transparent;
     border: none;
     margin-left: 100px;
     color: #333;
     cursor: pointer;
`;

