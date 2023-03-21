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


  return (
    <CardContainer>
      <Image src={image} />
    <HeartButton >
    <FavoriteBorderIcon/>
      </HeartButton>
      <Title>{title}</Title>
      <Description>{description}</Description>
      
    </CardContainer>
  );
};

export default Card;