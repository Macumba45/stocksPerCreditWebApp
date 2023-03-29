import {useState, memo, useCallback, FC} from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import LinearWithValueLabel from '../ProgressLinear/index';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useLocation} from 'react-router';
import {useNavigate} from 'react-router-dom';
import {Props} from './type';
import VideoThumbail from './video/index';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import {
     CardContainer,
     Title,
     HeartButton,
     ContainerImg,
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
     ContainerButtonModal,
     MenuButton,
     Menu,
     MenuItem,
     TotalInvestor,
     ContainerInvestor,
     MainContainer,
     StyledFavoriteIcon,
     StyledFavoriteBorderOutlinedIcon,
     SpanText,
     SpanData
} from './styles';

import { DetailsLogic } from '../../views/ProjectDetails/logic';
import { getUserRole } from '../../services/storage/userRole';


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
     const { daysLeft } = DetailsLogic()
     const [isFav, setIsFav] = useState(isFavorite);
     const navigate = useNavigate();
     const [showMenu, setShowMenu] = useState(false);
     const location = useLocation();
     const showMenuItems =
          location.pathname !== '/' &&
          location.pathname !== '/welcome' &&
          getUserRole() !== 'INVESTOR';


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
          navigate(`/projectdetails/${id}`);
          console.log(id)
          window.scrollTo(0, 0);
     }, [navigate]);

     return (
          <CardContainer>
               <ContainerImg>
                    <VideoThumbail
                         src={url}
                         style={{ width: '100%', margin: 'auto' }}

                    />
               </ContainerImg>
               <ContainerTitle>
                    <Title>{title}</Title>
               </ContainerTitle>
               <ContainerInvestor>
                    <TotalInvestor>
                         <SpanText>Total investors:</SpanText><SpanData>{totalInvestor}</SpanData>
                    </TotalInvestor>
               </ContainerInvestor>
               <ContainerInvestor>
                    <TotalInvestor><SpanText>Finish in:</SpanText><SpanData>{' '}{daysLeft(duration!)}{' '}days</SpanData></TotalInvestor>
               </ContainerInvestor>
               <ContainerDesc>
                    <Description>{description}</Description>
               </ContainerDesc>
               <ContainerLocations>
                    <Country>{country}</Country>{' '}<City>,{city}</City>
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
               <HeartButton
                    className={isFav ? 'active' : ''}
                    onClick={handleToggleFav}
               />

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
          </CardContainer >
     );
};

export default memo(Card);
