import { FC, memo, useCallback } from 'react';
import NavBar from '../../components/NavBar';
import VideoHeader from '../../components/VideoHeader';
import TabsDetails from '../../components/TabsDetails';
import LanguageIcon from '@mui/icons-material/Language';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LinearWithValueLabel from '../../components/ProgressLinear';
import { Divider } from '@mui/material';
import ButtonInvest from '../../components/ButtonInvest';
import InputDecorators from '../../components/InvestInputDetails'
import CalculadoraAcciones from '../../components/SimulationInvestDetails'
import Footer from '../../components/Footer';
import { Fab, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Dashboard } from '@mui/icons-material';
import {
     ButtonContainer,
     CalculadoraAccionesContainer,
     LinearProgress,
     LocationCity,
     LocationContainer,
     LocationCountry,
     MainContainer,
     MainContainerDesktop,
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
     const videoProject =
          'https://www.youtube.com/embed/FR0yfiN1dEo?controls=0';

     const navigate = useNavigate();
     const goDashboard = useCallback(() => {

          navigate('/dashboard');
     }, [navigate])


     const CustomTooltip = ({ title, children }: any) => {
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
                         <VideoHeader src={videoProject} />
                    </MainContainer>
                    <MainContainer style={{ marginTop: '3rem' }}>
                         <TitleContainer>
                              <Title>
                                   Lorem ipsum dolor sit amet consectetur
                                   adipisicing elit. Blanditiis enim culpa
                                   possimus.
                              </Title>
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
                              <SubTitle>
                                   Lorem ipsum dolor sit amet consectetur
                                   adipisicing elit. A sit, ratione aut ipsam
                                   nemo repudiandae. Nemo ab, asperiores magnam
                                   aperiam tempora perferendis laboriosam
                                   deserunt minima magni mollitia ipsam sit
                                   quam.Lorem ipsum dolor sit amet consectetur
                                   adipisicing elit. A sit, ratione aut ipsam
                                   nemo repudiandae.Lorem ipsum dolor sit amet
                                   consectetur adipisicing elit. A sit, ratione
                                   aut ipsam nemo repudiandae.
                              </SubTitle>
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
                                             This project will only be funded if it reaches its goal before Mon, March 27, 2023 3:08 PM CEST.
                                        </SubTitleInvest>
                                   </SubTitleInvestContainer>
                                   <ButtonContainer>
                                        <InputDecorators />
                                   </ButtonContainer>
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
                    </MainContainer>
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
                         <StockersTitles>
                              Contributions:
                         </StockersTitles>
                         <SpanData>57.900€</SpanData>
                    </StockersFunds>
                    <StockersInvestors>
                         <StockersTitles>
                              Stockers:
                         </StockersTitles>{' '}
                         <SpanData>458 stockers</SpanData>
                    </StockersInvestors>
                    <StockersTime>
                         <StockersTitles>
                              Time:
                         </StockersTitles>

                         <SpanData>46 days more</SpanData>
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
                         <SpanLocation>United States</SpanLocation>
                    </LocationCountry>
                    <LocationCity>
                         <LocationCityIcon />{' '}
                         <SpanLocation>New York</SpanLocation>
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
                         min={0}
                         max={100}
                         current={50} />
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
                    <Tags>
                         <SpanTags>TAG NUMERO 1</SpanTags>
                    </Tags>
                    <Tags>
                         <SpanTags>TAG NUMERO 2</SpanTags>
                    </Tags>
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
