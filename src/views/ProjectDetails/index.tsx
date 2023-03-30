import {FC, memo, useCallback} from 'react';
import NavBar from '../../components/NavBar';
import VideoHeader from '../../components/VideoHeader';
import TabsDetails from '../../components/TabsDetails';
import LanguageIcon from '@mui/icons-material/Language';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LinearWithValueLabel from '../../components/ProgressLinear';
import {Divider} from '@mui/material';
import ButtonInvest from '../../components/ButtonInvest';
import CalculadoraAcciones from '../../components/SimulationInvestDetails';
import Footer from '../../components/Footer';
import {Fab, Tooltip} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {Dashboard} from '@mui/icons-material';
import {DetailsLogic} from './logic';

import {
     ButtonContainer,
     CalculadoraAccionesContainer,
     LinearProgress,
     LocationCity,
     LocationContainer,
     LocationCountry,
     MainContainer,
     MainContainerDesktop,
     MainContainerInv,
     MainInvestContainer,
     MainInvestContainerFlex,
     SpanData,
     SpanLocation,
     SpanTags,
     StockersContainer,
     StockersFunds,
     StockersInvestors,
     StockersTime,
     StockersTitles,
     SubTitle,
     SubTitleContainer,
     SubTitleInvest,
     SubTitleInvestContainer,
     Tags,
     TagsContainer,
     Title,
     TitleContainer,
     TitleInvest,
     TitleInvestContainer,
} from './styles';

const ProjectDetails: FC = () => {
     const {dataDetails, daysLeft} = DetailsLogic();
     const navigate = useNavigate();
     const goDashboard = useCallback(() => {
          navigate('/dashboard');
     }, [navigate]);

     const CustomTooltip = ({title, children}: any) => {
          return (
               <Tooltip title={title} placement="left">
                    {children}
               </Tooltip>
          );
     };

     return (
          <MainContainer>
               <CustomTooltip title="Go to Landing">
                    <Fab
                         onClick={goDashboard}
                         size="small"
                         sx={{
                              position: 'fixed',
                              bottom: '2rem',
                              right: 0,
                              marginRight: '2rem',
                              backgroundColor: '#7E1B75',
                              '&:hover': {
                                   backgroundColor: '#7e1b7655', // Cambiar color del hover
                              },
                         }}
                         color="primary"
                         aria-label="add"
                    >
                         <Dashboard />
                    </Fab>
               </CustomTooltip>
               <NavBar />
               <MainContainerDesktop>
                    <MainContainer>
                         <VideoHeader src={dataDetails?.url!} />
                    </MainContainer>

                    <MainContainerInv style={{marginTop: '3rem'}}>
                         <TitleContainer>
                              <Title>{dataDetails?.title}</Title>
                         </TitleContainer>
                         <Divider
                              sx={{
                                   marginTop: '2rem',
                                   marginBottom: '2rem',
                                   width: '300px',
                                   display: 'flex',
                                   marginLeft: 'auto',
                                   marginRight: 'auto',
                              }}
                         />
                         <SubTitleContainer>
                              <SubTitle>{dataDetails?.description}</SubTitle>
                         </SubTitleContainer>
                         <Divider
                              sx={{
                                   marginTop: '3rem',
                                   marginBottom: '2rem',
                                   width: '300px',
                                   display: 'flex',
                                   marginLeft: 'auto',
                                   marginRight: 'auto',
                              }}
                         />
                         <MainInvestContainer>
                              <MainInvestContainerFlex>
                                   <TitleInvestContainer>
                                        <TitleInvest>
                                             Invest in this project
                                        </TitleInvest>
                                   </TitleInvestContainer>
                                   <SubTitleInvestContainer>
                                        <SubTitleInvest>
                                             This project will only be funded if
                                             it reaches its goal before{' '}
                                             {dataDetails?.duration}
                                        </SubTitleInvest>
                                   </SubTitleInvestContainer>
                                   {/* <ButtonContainer>
                                        <InputDecorators />
                                   </ButtonContainer> */}
                                   <ButtonContainer>
                                        <ButtonInvest />
                                   </ButtonContainer>
                              </MainInvestContainerFlex>
                              <MainInvestContainerFlex>
                                   <Divider
                                        sx={{
                                             marginBottom: '3rem',
                                             width: '300px',
                                             display: 'flex',
                                             marginLeft: 'auto',
                                             marginRight: 'auto',
                                        }}
                                   />
                                   <CalculadoraAccionesContainer>
                                        <CalculadoraAcciones />
                                   </CalculadoraAccionesContainer>
                              </MainInvestContainerFlex>
                         </MainInvestContainer>
                    </MainContainerInv>
               </MainContainerDesktop>
               <Divider
                    sx={{
                         marginTop: '3rem',
                         marginBottom: '3rem',
                         width: '300px',
                         display: 'flex',
                         marginLeft: 'auto',
                         marginRight: 'auto',
                    }}
               />
               <StockersContainer>
                    <StockersFunds>
                         <StockersTitles>Contributions:</StockersTitles>
                         <SpanData>{dataDetails?.totalInvest}€</SpanData>
                    </StockersFunds>
                    <StockersInvestors>
                         <StockersTitles>Stockers:</StockersTitles>{' '}
                         <SpanData>{dataDetails?.totalInvestor}</SpanData>
                    </StockersInvestors>
                    <StockersTime>
                         <StockersTitles>Time:</StockersTitles>

                         <SpanData>
                              {daysLeft(dataDetails?.duration!)} days more
                         </SpanData>
                    </StockersTime>
               </StockersContainer>
               <Divider
                    sx={{
                         marginTop: '3rem',
                         marginBottom: '3rem',
                         width: '300px',
                         display: 'flex',
                         marginLeft: 'auto',
                         marginRight: 'auto',
                    }}
               />

               <LocationContainer>
                    <LocationCountry>
                         <LanguageIcon />
                         <SpanLocation>{dataDetails?.country}</SpanLocation>
                    </LocationCountry>
                    <LocationCity>
                         <LocationCityIcon />{' '}
                         <SpanLocation>{dataDetails?.city}</SpanLocation>
                    </LocationCity>
               </LocationContainer>
               <Divider
                    sx={{
                         marginTop: '3rem',
                         marginBottom: '3rem',
                         width: '300px',
                         display: 'flex',
                         marginLeft: 'auto',
                         marginRight: 'auto',
                    }}
               />
               <LinearProgress>
                    <LinearWithValueLabel
                         current={dataDetails?.totalInvest || 0}
                         min={0}
                         max={dataDetails?.goal || 0}
                    />
               </LinearProgress>

               <Divider
                    sx={{
                         marginTop: '6rem',
                         marginBottom: '3rem',
                         width: '300px',
                         display: 'flex',
                         marginLeft: 'auto',
                         marginRight: 'auto',
                    }}
               />
               <TagsContainer>
                    {dataDetails?.ProjectTag?.map((tag) => (
                         <Tags key={tag.id}>
                              <SpanTags>{tag.name}</SpanTags>
                         </Tags>
                    ))}
               </TagsContainer>
               <Divider
                    sx={{
                         marginTop: '3rem',
                         marginBottom: '3rem',
                         width: '300px',
                         display: 'flex',
                         marginLeft: 'auto',
                         marginRight: 'auto',
                    }}
               />
               <TabsDetails />
               <Footer />
          </MainContainer>
     );
};

export default memo(ProjectDetails);
