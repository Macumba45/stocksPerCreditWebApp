import { useState, memo } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { CardContainer, Image, Title, Description, HeartButton, ContainerImg, ContainerButton, ContainerTitle, ContainerDesc, ContainerLocations, Locations, ContainerCategories, Categories, ContainerLinear, MainContainer } from './styles'
import LinearWithValueLabel from '../ProgressLinear/index'
type CardProps = {
  image: string;
  title: string;
  description: string;
  onClick?: () => void;
  showHeartButton?: boolean;
  locations?: string;
  categories?: string;
};
const Card: React.FC<CardProps> = ({ image, title, description, onClick, showHeartButton, locations, categories }) => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };


  return (
    <MainContainer>
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
        <ContainerLocations>
          <Locations>{locations}</Locations>
        </ContainerLocations>
        <ContainerLinear>
          <LinearWithValueLabel
            min={0}
            max={100} />
        </ContainerLinear>
        <ContainerCategories>
          <Categories>{categories}</Categories>
        </ContainerCategories>
      </CardContainer>
    </MainContainer>
  );
};

export default memo(Card);