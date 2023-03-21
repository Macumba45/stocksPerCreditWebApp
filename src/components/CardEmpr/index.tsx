import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { CardContainer, Image, Title, Description, HeartButton } from './styles'
type CardProps = {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
  liked: boolean;
};

const Card: React.FC<CardProps> = ({ image, title, description, onClick }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <CardContainer>
      <Image src={image} />
    <HeartButton onClick={handleLikeClick} liked={liked}>
    <FavoriteBorderIcon/>
      </HeartButton>
      <Title>{title}</Title>
      <Description>{description}</Description>
      
    </CardContainer>
  );
};

export default Card;