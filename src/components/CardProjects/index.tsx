import {useState, memo} from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
     CardContainer,
     Image,
     Title,
     Description,
     HeartButton,
     ContainerImg,
     ContainerButton,
     ContainerTitle,
     ContainerDesc,
     ContainerCountry,
     Country,
     ContainerCity,
     City,
     ContainerCategories,
     Categories,
     ContainerLinear,
} from './styles';
import LinearWithValueLabel from '../ProgressLinear/index';
type CardProps = {
     image?: string;
     title?: string;
     description?: string;
     onClick?: () => void;
     showHeartButton?: boolean;
     country?: string;
     city?: string;
     categories?: string;
};
const Card: React.FC<CardProps> = ({
     image,
     title,
     description,
     onClick,
     showHeartButton,
     country,
     city,
     categories,
}) => {
     const [liked, setLiked] = useState(false);

     const handleClick = () => {
          setLiked(!liked);
     };

     return (
          <CardContainer>
               <ContainerImg>
                    <Image src={image} />
               </ContainerImg>
               <ContainerButton>
                    {showHeartButton && (
                         <HeartButton liked={liked} onClick={handleClick}>
                              <FavoriteBorderIcon />
                         </HeartButton>
                    )}
               </ContainerButton>
               <ContainerTitle>
                    <Title>{title}</Title>
               </ContainerTitle>
               <ContainerDesc>
                    <Description>{description}</Description>
               </ContainerDesc>
               <ContainerCountry>
                    <Country>{country}</Country>
               </ContainerCountry>
               <ContainerCity>
                    <City>{city}</City>
               </ContainerCity>
               <ContainerCategories>
                    <Categories>{categories}</Categories>
               </ContainerCategories>
               <ContainerLinear>
                    <LinearWithValueLabel min={0} max={100} />
               </ContainerLinear>
          </CardContainer>
     );
};

export default memo(Card);
