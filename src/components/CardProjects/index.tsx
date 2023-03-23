import { useState, memo } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import LinearWithValueLabel from '../ProgressLinear/index';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
  ContainerLocationsModal,
  CountryModal,
  CityModal,
  ContainerCategoriesModal,
  CategoriesModal,
  ContainerRecaudacciones,
  Recaudado,
  Inversores,
  MinimaInversion,
  Objetivos,
  ValorLimite,
  LabelSpan,
  ContainerButtonModal,
  MenuButton,
  Menu,
  MenuItem,
} from './styles';
import { useLocation } from 'react-router';

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
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation()
  const showMenuItems = location.pathname !== '/' && location.pathname !== '/welcome';



  const handleClick = () => {
    setLiked(!liked);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
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
        <Country>{country}</Country>
        <City>, {city}</City>
      </ContainerLocations>
      <ContainerCategories>
        <Categories>{categories}</Categories>
      </ContainerCategories>
      <ContainerLinear>
        <LinearWithValueLabel min={0} max={100} />
      </ContainerLinear>
      <div>
        <ContainerButtonModal><Button sx={{ color: '#7E1B75', marginBottom: '12px' }} onClick={handleOpen}>More Info</Button>
          <MenuButton onClick={handleMenuClick}>
            {showMenuItems && (
              <MoreVertIcon />
            )}
          </MenuButton>
        </ContainerButtonModal>
        {showMenuItems && (
          showMenu && (
            <Menu>
              <MenuItem><DeleteIcon /> <EditIcon /></MenuItem>
            </Menu>
          )
        )}
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
            <ContainerLocationsModal>
              <CountryModal>{country}</CountryModal>
              <CityModal>, {city}</CityModal>
            </ContainerLocationsModal>
            <ContainerCategoriesModal>
              <CategoriesModal>{categories}</CategoriesModal>
            </ContainerCategoriesModal>
            <ContainerRecaudacciones>
              <Recaudado>{collected} <LabelSpan>Collected</LabelSpan></Recaudado>
              <Inversores>{investors} <LabelSpan>Investors</LabelSpan></Inversores>
              <MinimaInversion>{minimuminvestment} <LabelSpan>Minimum Investment
              </LabelSpan></MinimaInversion>
              <Objetivos>{goals} <LabelSpan>Goals</LabelSpan></Objetivos>
              <ValorLimite>{limitvalue} <LabelSpan>Limit Value</LabelSpan></ValorLimite>
            </ContainerRecaudacciones>
          </Box>
        </Modal>
      </div>
    </CardContainer>
  );
};

export default memo(Card);
