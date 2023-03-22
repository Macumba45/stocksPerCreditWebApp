import { useState, memo } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { CardContainer, Image, Title, Description, HeartButton, ContainerImg, ContainerButton, ContainerTitle, ContainerDesc } from './styles'

type CardProps = {
  image: string;
  title: string;
  description: string;
  onClick?: () => void;
  showHeartButton?: boolean;
};
const Card: React.FC<CardProps> = ({ image, title, description, onClick, showHeartButton }) => {
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

    </CardContainer>
  );
};

export default memo(Card);