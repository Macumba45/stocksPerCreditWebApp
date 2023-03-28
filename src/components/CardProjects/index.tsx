import { useState, memo, useCallback } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import * as React from 'react';
import Button from '@mui/material/Button';
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
import { useNavigate } from 'react-router-dom';
import { Props } from './type';

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


const Card: React.FC<Props> = ({
     id,
     title,
     description,
     url,
     duration,
     totalInvest,
     totalInvestor,
     country,
     city,
     history,
     commerce,
     proposal,
     images,
     currency,
     cost,
     minimuminvestment,
     actionPerCredit,
     returnInvestment,
     goal,
     tags,
     limitvalue,
     createdAt,
     updatedAt,
     showHeartButton
}) => {
     const [liked, setLiked] = useState(false);
     const [open, setOpen] = React.useState(false);
     const navigate = useNavigate()
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     const [showMenu, setShowMenu] = useState(false);
     const location = useLocation();
     const showMenuItems =
          location.pathname !== '/' && location.pathname !== '/welcome';

     const handleClick = useCallback(() => {
          setLiked(!liked);
     }, []);

     const handleMenuClick = useCallback(() => {
          setShowMenu(!showMenu);
     }, []);


     const handleGoDetails = useCallback(() => {
          navigate('/projectdetails')
          window.scrollTo(0, 0)
     }, [navigate]);

     const options = {
          width: '100%',
          height: '100%',
          modestbranding: 1,
          autoplay: 0,
          mute: 1,
          controls: 0,
          showinfo: 0,
          iv_load_policy: 3,
          rel: 0,
          src: url,
     };
     return (
          <CardContainer>
               <ContainerImg >
                    {/* <Image style={{ objectFit: 'cover' }} src={`${url}?autoplay=0&mute=1&controls=0&modestbranding=1&iv_load_policy=3&rel=0&showinfo=0`} /> */}
                    <Image src="https://player.vimeo.com/video/800507584?h=648d0eee28?autoplay=0&loop=1&title=0&byline=0&portrait=0"
                         // width="270"
                         // height="270"
                         style={{ width: '100%', margin: 'auto' }}

                    />

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
                    <Categories>{tags ? tags.map(tag => tag.name).join(' ') : ''}</Categories>
               </ContainerCategories>
               <ContainerLinear>
                    <LinearWithValueLabel current={totalInvest || 0} min={0} max={goal || 0} />
               </ContainerLinear>
               <div>
                    <ContainerButtonModal>
                         <Button
                              sx={{ color: '#7E1B75', marginBottom: '12px' }}
                              onClick={handleGoDetails}
                         >
                              More Info
                         </Button>
                         <MenuButton onClick={handleMenuClick}>
                              {showMenuItems && <MoreVertIcon />}
                         </MenuButton>
                    </ContainerButtonModal>
                    {showMenuItems && showMenu && (
                         <Menu>
                              <MenuItem>
                                   <DeleteIcon /> <EditIcon />
                              </MenuItem>
                         </Menu>
                    )}
               </div>
          </CardContainer >
     );
};

export default memo(Card);
