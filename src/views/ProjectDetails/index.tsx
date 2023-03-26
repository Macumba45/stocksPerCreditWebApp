import { FC, memo } from 'react';
import NavBar from '../../components/NavBar';
import VideoHeader from '../../components/VideoHeader';
import TabsDetails from '../../components/TabsDetails';
import LanguageIcon from '@mui/icons-material/Language';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LinearWithValueLabel from '../../components/ProgressLinear';
import { Divider } from '@mui/material';


import {
     ButtonContainer,
     LinearProgress,
     LocationCity,
     LocationContainer,
     LocationCountry,
     MainContainer,
     MainContainerDesktop,
     MainInvestContainer,
     SpanData,
     SpanLocation,
     StockersContainer,
     StockersFunds,
     StockersInvestors,
     StockersTime,
     StockersTitles,
     SubTitle,
     SubTitleContainer,
     SubTitleInvest,
     SubTitleInvestContainer,
     Title,
     TitleContainer,
     TitleInvest,
     TitleInvestContainer,
} from './styles';
import ButtonInvest from '../../components/ButtonInvest';

const ProjectDetails: FC = () => {
     const videoProject =
          'https://www.youtube.com/embed/FR0yfiN1dEo?controls=0';
     return (
          <MainContainer>
               <NavBar />
               <MainContainerDesktop>
                    <div>
                         <VideoHeader src={videoProject} />
                    </div>
                    <div style={{ marginTop: '3rem' }}>
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
                              <TitleInvestContainer>
                                   <TitleInvest>
                                        Invest in this project
                                   </TitleInvest>
                              </TitleInvestContainer>
                              <SubTitleInvestContainer>
                                   <SubTitleInvest>
                                        Este proyecto sólo será financiado si alcanza la meta antes del lun, 27 de marzo de 2023 15:08 CEST.                                   </SubTitleInvest>
                              </SubTitleInvestContainer>
                              <ButtonContainer>
                                   <ButtonInvest />
                              </ButtonContainer>
                         </MainInvestContainer>

                    </div>
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
                         max={100} />
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
               <TabsDetails />
          </MainContainer>
     );
};

export default memo(ProjectDetails);
