import { useState, memo } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import LinearWithValueLabel from '../ProgressLinear/index';

import {
  CardContainer,
  Title,
  HeartButton,
  ContainerImg,
  Image,
  ContainerButton,
  ContainerTitle,
  ContainerDesc,
  Description,
  ContainerLocations,
  Country,
  City,
  ContainerCategories,
  Categories,
  ContainerLinear,
  ContainerImgModal,
  ImageModal,
  ContainerTitleModal,
  TitleModal,
  ContainerDescModal,
  DescriptionModal,
  ContainerCountryModal,
  CountryModal,
  ContainerCityModal,
  CityModal,
  ContainerCategoriesModal,
  CategoriesModal,
  ContainerRecaudacciones,
  Recaudado,
  Inversores,
  MinimaInversion,
  Objetivos,
  ValorLimite,
  LabelSpan



} from './styles';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  height: 550,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

type CardProps = {
  image?: string;
  title?: string;
  description?: string;
  onClick?: () => void;
  showHeartButton?: boolean;
  country?: string;
  city?: string;
  categories?: string;
  collected?: number;
  investors?: number;
  minimuminvestment?: number;
  goals?: number;
  limitvalue?: number;

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
  collected,
  investors,
  minimuminvestment,
  goals,
  limitvalue

}) => {
  const [liked, setLiked] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <ContainerLocations>
        <Country>{country},</Country>
        <City>{city}</City>
      </ContainerLocations>
      <ContainerCategories>
        <Categories>{categories}</Categories>
      </ContainerCategories>
      <ContainerLinear>
        <LinearWithValueLabel min={0} max={100} />
      </ContainerLinear>
      <div>
        <Button onClick={handleOpen}>More Info</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ContainerImgModal>
              <ImageModal src={image} />
            </ContainerImgModal>
            <ContainerTitleModal>
              <TitleModal>{title}</TitleModal>
            </ContainerTitleModal>
            <ContainerDescModal>
              <DescriptionModal>{description}</DescriptionModal>
            </ContainerDescModal>
            <ContainerCountryModal>
              <CountryModal>{country}</CountryModal>
            </ContainerCountryModal>
            <ContainerCityModal>
              <CityModal>{city}</CityModal>
            </ContainerCityModal>
            <ContainerCategoriesModal>
              <CategoriesModal>{categories}</CategoriesModal>
            </ContainerCategoriesModal>
            <ContainerRecaudacciones>
              <Recaudado><LabelSpan>Collected:</LabelSpan>{collected}</Recaudado><br />
              <Inversores><LabelSpan>Investors:</LabelSpan>{investors}</Inversores><br />
              <MinimaInversion><LabelSpan>Minimum Investment
                :</LabelSpan>{minimuminvestment}</MinimaInversion><br />
              <Objetivos><LabelSpan>Goals:</LabelSpan>{goals}</Objetivos><br />
              <ValorLimite><LabelSpan>Limit Value:</LabelSpan>{limitvalue}</ValorLimite>
            </ContainerRecaudacciones>
          </Box>
        </Modal>
      </div>
    </CardContainer>
  );
};

export default memo(Card);
