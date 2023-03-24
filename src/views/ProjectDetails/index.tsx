import {FC, memo} from 'react';
import NavBar from '../../components/NavBar';
import VideoHeader from '../../components/VideoHeader';
import TabsDetails from '../../components/TabsDetails';
import LanguageIcon from '@mui/icons-material/Language';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import {
     LocationCity,
     LocationContainer,
     LocationCountry,
     MainContainer,
     SpanData,
     SpanLocation,
     StockersContainer,
     StockersFunds,
     StockersInvestors,
     StockersTime,
     SubTitle,
     SubTitleContainer,
     Title,
     TitleContainer,
} from './styles';
import {Divider} from '@mui/material';

const ProjectDetails: FC = () => {
     return (
          <MainContainer>
               <NavBar />
               <VideoHeader video="" />
               <TitleContainer>
                    <Title>
                         Lorem ipsum dolor sit amet consectetur adipisicing
                         elit. Blanditiis enim culpa possimus.
                    </Title>
               </TitleContainer>
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
               <SubTitleContainer>
                    <SubTitle>
                         Lorem ipsum dolor sit amet consectetur adipisicing
                         elit. A sit, ratione aut ipsam nemo repudiandae. Nemo
                         ab, asperiores magnam aperiam tempora perferendis
                         laboriosam deserunt minima magni mollitia ipsam sit
                         quam.Lorem ipsum dolor sit amet consectetur adipisicing
                         elit. A sit, ratione aut ipsam nemo repudiandae.Lorem
                         ipsum dolor sit amet consectetur adipisicing elit. A
                         sit, ratione aut ipsam nemo repudiandae.
                    </SubTitle>
               </SubTitleContainer>
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
                         Contributions: <br />
                         <SpanData>57.900€</SpanData>
                    </StockersFunds>
                    <StockersInvestors>
                         Stockers: <br /> <SpanData>458 stockers</SpanData>
                    </StockersInvestors>
                    <StockersTime>
                         Time:
                         <br />
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
               <TabsDetails />
          </MainContainer>
     );
};

export default memo(ProjectDetails);
