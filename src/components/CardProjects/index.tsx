import {useState, memo} from 'react';
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
     ContainerCountry,
     Country,
     ContainerCity,
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
     CategoriesModal

} from './styles';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  height: 450,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
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
     const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
               <div>
      <Button onClick={handleOpen}>Description</Button>
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
        </Box>
      </Modal>
    </div>
          </CardContainer>
     );
};

export default memo(Card);
