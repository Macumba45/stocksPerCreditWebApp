import { useState, memo, useCallback, FC } from 'react';
import Button from '@mui/material/Button';
import LinearWithValueLabel from '../ProgressLinear/index';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { Props } from './type';
import VideoThumbail from './video/index';
import { getUserRole } from '../../services/storage/userRole';


import {
     CardContainer,
     Title,
     ContainerImg,
     ContainerTitle,
     ContainerDesc,
     Description,
     ContainerLocations,
     Country,
     City,
     ContainerCategories,
     Categories,
     ContainerLinear,
     ContainerButtonModal,
     MenuButton,
     Menu,
     MenuItem,
     TotalInvestor,
     ContainerInvestor,
     StyledFavoriteIcon,
     StyledFavoriteBorderOutlinedIcon,
     SpanText,
     SpanData,

     ContainerDays
} from './styles';



const Card: FC<Props> = ({
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
     showHeartButton,
     toggleFav,
     isFavorite,
}) => {

     const [isFav, setIsFav] = useState(isFavorite);
     const navigate = useNavigate();
     const [showMenu, setShowMenu] = useState(false);
     const location = useLocation();
     const showMenuItems =
          location.pathname !== '/' &&
          location.pathname !== '/welcome' &&
          getUserRole() !== 'INVESTOR';


     const logged = getUserRole();

     // const handleClick = useCallback(() => {
     //      setLiked(!liked);
     //      togglePostFav(projectId)
     // }, [liked]);

     const handleToggleFav = useCallback(() => {
          setIsFav(!isFav);
          toggleFav(id);
     }, [isFav]);

     const handleMenuClick = useCallback(() => {
          setShowMenu(!showMenu);
     }, [showMenu]);

     const handleMenuClickClose = useCallback(() => {
          setShowMenu(showMenu);
     }, [showMenu]);


     const handleGoDetails = useCallback((id: string) => {
          if (logged) {
               navigate(`/projectdetails/${id}`);
               console.log(id)
               window.scrollTo(0, 0);

          } else {
               navigate('/login')
          }

     }, [navigate]);

     const daysLeft = (date: string) => {
          const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
          const today = new Date();
          const difference = new Date(date).getTime() - today.getTime();
          return Math.round(Math.abs((difference) / oneDay));

     }

     return (
          <CardContainer>
               <ContainerImg>
                    <VideoThumbail

                         url={url}

                    />
               </ContainerImg>
               <ContainerTitle>
                    <Title>{title}</Title>
               </ContainerTitle>
               <ContainerInvestor>
                    <TotalInvestor>
                         <SpanText>Total investors:</SpanText>
                         <SpanData>{totalInvestor}</SpanData>
                    </TotalInvestor>
               </ContainerInvestor>

               <ContainerDays>
                    <TotalInvestor><SpanText>Will end:</SpanText><SpanData>{' '}{daysLeft(duration!)}{' '}days</SpanData></TotalInvestor>
               </ContainerDays>
               <ContainerDesc>
                    <Description>{description}</Description>
               </ContainerDesc>
               <ContainerLocations>

                    <Country>{country},</Country>{' '}<City>{city}</City>
               </ContainerLocations>
               <ContainerCategories>
                    <Categories>
                         {tags ? tags.map((tag) => tag.name).join(' ') : ''}
                    </Categories>
               </ContainerCategories>
               <ContainerLinear>
                    <LinearWithValueLabel
                         current={totalInvest || 0}
                         min={0}
                         max={goal || 0}
                    />
               </ContainerLinear>

               <div>
                    <ContainerButtonModal>
                         <Button
                              variant="text"
                              sx={{
                                   color: '#7E1B75',
                                   marginBottom: '12px',
                                   marginRight: '10px',
                                   borderColor: '#7E1B75',
                                   '&:hover': {
                                        backgroundColor: '#7E1B75',
                                        borderColor: '#7E1B75',
                                        color: 'white',
                                   },
                              }}
                              onClick={() => handleGoDetails(id)}
                         >
                              More Info
                         </Button>
                         {isFav ? (
                              <StyledFavoriteIcon onClick={handleToggleFav} />
                         ) : (
                              <StyledFavoriteBorderOutlinedIcon
                                   className={isFav ? 'active' : ''}
                                   onClick={handleToggleFav}
                              />
                         )}
                         <MenuButton onClick={handleMenuClick}>
                              {showMenuItems && <MoreVertIcon />}
                         </MenuButton>
                    </ContainerButtonModal>
                    {showMenuItems && showMenu && (
                         <Menu onClick={handleMenuClickClose}>
                              <MenuItem>
                                   <DeleteIcon /> <EditIcon />
                              </MenuItem>
                         </Menu>
                    )}
               </div>
          </CardContainer>
     );
};

export default memo(Card);
