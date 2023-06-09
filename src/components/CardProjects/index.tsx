import {useState, memo, useCallback, FC} from 'react';
import Button from '@mui/material/Button';
import LinearWithValueLabel from '../ProgressLinear/index';
import DeleteIcon from '@mui/icons-material/Delete';
import {useLocation} from 'react-router';
import {useNavigate} from 'react-router-dom';
import {Props} from './type';
import VideoThumbail from './video/index';
import {getUserRole} from '../../services/storage/userRole';

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
     TotalInvestor,
     ContainerInvestor,
     StyledFavoriteIcon,
     StyledFavoriteBorderOutlinedIcon,
     SpanText,
     SpanData,
     ContainerDays,
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
     goal,
     ProjectTag,
     showHeartButton,
     toggleFav,
     isFavorite,
     onDelete,
     deleteIcon,
}) => {
     const [isFav, setIsFav] = useState(isFavorite);
     const navigate = useNavigate();
     const [showMenu, setShowMenu] = useState(false);

     const logged = getUserRole() !== 'INVESTOR' || 'ENTREPRENEUR';

     const handleToggleFav = useCallback(() => {
          setIsFav(!isFav);
          toggleFav(id);
     }, [isFav]);

     const handleGoDetails = useCallback(
          (id: string) => {
               if (logged) {
                    navigate(`/projectdetails/${id}`);
                    window.scrollTo(0, 0);
               } else {
                    navigate('/dashboard');
               }
          },
          [navigate]
     );

     const daysLeft = (date: string) => {
          const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
          const today = new Date();
          const difference = new Date(date).getTime() - today.getTime();
          return Math.round(Math.abs(difference / oneDay));
     };

     return (
          <CardContainer>
               <ContainerImg>
                    <VideoThumbail url={url} />
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
                    <TotalInvestor>
                         <SpanText>Will end:</SpanText>
                         <SpanData> {daysLeft(duration!)} days</SpanData>
                    </TotalInvestor>
               </ContainerDays>
               <ContainerDesc>
                    <Description>{description}</Description>
               </ContainerDesc>
               <ContainerLocations>
                    <Country>{country},</Country> <City>{city}</City>
               </ContainerLocations>
               <ContainerCategories>
                    {ProjectTag &&
                         ProjectTag.map((tag: any) => (
                              <Categories key={tag.id}>{tag.name}</Categories>
                         ))}
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
                         {showHeartButton &&
                              (isFav ? (
                                   <StyledFavoriteIcon
                                        onClick={handleToggleFav}
                                   />
                              ) : (
                                   <StyledFavoriteBorderOutlinedIcon
                                        className={isFav ? 'active' : ''}
                                        onClick={handleToggleFav}
                                   />
                              ))}
                         {deleteIcon && (
                              <DeleteIcon
                                   onClick={onDelete}
                                   sx={{color: 'red',
                                   cursor: 'pointer'}}
                              />
                         )}
                    </ContainerButtonModal>
               </div>
          </CardContainer>
     );
};

export default memo(Card);
