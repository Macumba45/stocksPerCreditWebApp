import {FC, memo} from 'react';
import ResponsiveDrawer from '../../components/SidebarDashboardINV';
import {
     Container,
     MinMaxContainer,
     DateContainer,
     TagDiv,
     FiltersDiv,
     MaxContainer,
     SearchDiv,
     DiscretDiv
} from './styles';
import {FinishDatePickers, StartDatePickers} from '../../components/DatePicker';
import CustomizedSlider, {
     // MaxDiscreteSlider,
     // MinDiscreteSlider,
} from '../../components/MoneySlider';
import Search from '../../components/Search';
import {DiscreteSlider} from '../../components/StocksSlider';
import Card from '../../components/CardProjects';
import RangeSlider from '../../components/MoneySlider';


const DashboardINVe: FC = () => {
     return (
          <>
               <Container>
                    <ResponsiveDrawer />
                    <MinMaxContainer>
                         <FiltersDiv>
                              <RangeSlider></RangeSlider>
                              {/* <MinDiscreteSlider></MinDiscreteSlider>
                              <MaxDiscreteSlider></MaxDiscreteSlider> */}
                         </FiltersDiv>
                    </MinMaxContainer>

                    <DateContainer>
                         <FiltersDiv>
                              <StartDatePickers></StartDatePickers>
                              <FinishDatePickers></FinishDatePickers>
                         </FiltersDiv>
                    </DateContainer>

                    <TagDiv>
                    <FiltersDiv>
                         <SearchDiv>
                              <Search></Search>
                              </SearchDiv>
                              <DiscretDiv>
                              <DiscreteSlider></DiscreteSlider>
                              </DiscretDiv>
                              </FiltersDiv>
                    </TagDiv>
               </Container>
         
            <MaxContainer>
            <Card
                 image={''}
                 showHeartButton={false}
                 title={'Mind on me'}
                 description={
                      'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                 }
                 country={'España'}
                 city={'Madrid'}
                 categories={'MEDICINA'}
                 collected={3000}
                 investors={4000}
                 minimuminvestment={300}
                 goals={600}
                 limitvalue={500}
            />
              <Card
                         image={''}
                         showHeartButton={false}
                         title={'Mind on me'}
                         description={
                              'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                         }
                         country={'España'}
                         city={'Madrid'}
                         categories={'MEDICINA'}
                         collected={3000}
                         investors={4000}
                         minimuminvestment={300}
                         goals={600}
                         limitvalue={500}
                    />
                      <Card
                         image={''}
                         showHeartButton={false}
                         title={'Mind on me'}
                         description={
                              'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                         }
                         country={'España'}
                         city={'Madrid'}
                         categories={'MEDICINA'}
                         collected={3000}
                         investors={4000}
                         minimuminvestment={300}
                         goals={600}
                         limitvalue={500}
                    />
                      <Card
                         image={''}
                         showHeartButton={false}
                         title={'Mind on me'}
                         description={
                              'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                         }
                         country={'España'}
                         city={'Madrid'}
                         categories={'MEDICINA'}
                         collected={3000}
                         investors={4000}
                         minimuminvestment={300}
                         goals={600}
                         limitvalue={500}
                    />
                      <Card
                         image={''}
                         showHeartButton={false}
                         title={'Mind on me'}
                         description={
                              'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                         }
                         country={'España'}
                         city={'Madrid'}
                         categories={'MEDICINA'}
                         collected={3000}
                         investors={4000}
                         minimuminvestment={300}
                         goals={600}
                         limitvalue={500}
                    />
                      <Card
                         image={''}
                         showHeartButton={false}
                         title={'Mind on me'}
                         description={
                              'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                         }
                         country={'España'}
                         city={'Madrid'}
                         categories={'MEDICINA'}
                         collected={3000}
                         investors={4000}
                         minimuminvestment={300}
                         goals={600}
                         limitvalue={500}
                    />
                      <Card
                         image={''}
                         showHeartButton={false}
                         title={'Mind on me'}
                         description={
                              'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                         }
                         country={'España'}
                         city={'Madrid'}
                         categories={'MEDICINA'}
                         collected={3000}
                         investors={4000}
                         minimuminvestment={300}
                         goals={600}
                         limitvalue={500}
                    />
                      <Card
                         image={''}
                         showHeartButton={false}
                         title={'Mind on me'}
                         description={
                              'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                         }
                         country={'España'}
                         city={'Madrid'}
                         categories={'MEDICINA'}
                         collected={3000}
                         investors={4000}
                         minimuminvestment={300}
                         goals={600}
                         limitvalue={500}
                    />
                    <Card
                         image={''}
                         showHeartButton={false}
                         title={'Mind on me'}
                         description={
                              'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                         }
                         country={'España'}
                         city={'Madrid'}
                         categories={'MEDICINA'}
                         collected={3000}
                         investors={4000}
                         minimuminvestment={300}
                         goals={600}
                         limitvalue={500}
                    />

                    <Card
                         image={''}
                         showHeartButton={false}
                         title={'Mind on me'}
                         description={
                              'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                         }
                         country={'España'}
                         city={'Madrid'}
                         categories={'MEDICINA'}
                         collected={3000}
                         investors={4000}
                         minimuminvestment={300}
                         goals={600}
                         limitvalue={500}
                    />
                    <Card
                         image={''}
                         showHeartButton={false}
                         title={'Mind on me'}
                         description={
                              'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                         }
                         country={'España'}
                         city={'Madrid'}
                         categories={'MEDICINA'}
                         collected={3000}
                         investors={4000}
                         minimuminvestment={300}
                         goals={600}
                         limitvalue={500}
                    />
                    <Card
                         image={''}
                         showHeartButton={false}
                         title={'Mind on me'}
                         description={
                              'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                         }
                         country={'España'}
                         city={'Madrid'}
                         categories={'MEDICINA'}
                         collected={3000}
                         investors={4000}
                         minimuminvestment={300}
                         goals={600}
                         limitvalue={500}
                    />
             </MaxContainer>
             </>
     );
};

export default memo(DashboardINVe);
