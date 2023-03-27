import {FC, memo, useState} from 'react';
import ResponsiveDrawer from '../../components/SidebarDashboardINV';
import {
     Container,
     MinMaxContainer,
     DateContainer,
     TagDiv,
     FiltersDiv,
     SearchDiv,
     DiscretDiv,
     TopContainer,
     CardsContainer,
     TopCards,
     SectionTitle,
     NewContainer,
     NewCards,
     FinalContainer,
     FinalCards,
     H3,
} from './styles';
import {FinishDatePickers} from '../../components/DatePicker';
import Search from '../../components/Search';
import {DiscreteSlider} from '../../components/StocksSlider';
import Card from '../../components/CardProjects';
import RangeSlider from '../../components/MoneySlider';
import ContainedButtons from '../../components/ContainedButton';
// import {Divider} from '@mui/material';

const DashboardINVe: FC = () => {
     const [rangeValue, setRangeValue] = useState([0, 100]);
     const [selectedDate, setSelectedDate] = useState<Date | null>(null);
     const [selectedTags, setSelectedTags] = useState<string[]>([]);
     const [sliderValue, setSliderValue] = useState<number>(0);
     const [filteredData, setFilteredData] = useState<string[]>([]);
     const [data, setData] = useState<string[]>([]);

     // const handleFilter = () => {
     //      // Filtrar por rango de valor
     //      const filteredDataByRange = data.filter((item) => item.value >= rangeValue[0] && item.value <= rangeValue[1]);

     //      // Filtrar por fecha seleccionada
     //      const filteredDataByDate = selectedDate
     //        ? filteredDataByRange.filter((item) => item.date.toDateString() === selectedDate.toDateString())
     //        : filteredDataByRange;

     //      // Filtrar por etiquetas seleccionadas
     //      const filteredDataByTags = selectedTags.length > 0
     //        ? filteredDataByDate.filter((item) => selectedTags.every((tag) => item.tags.includes(tag)))
     //        : filteredDataByDate;

     //      // Actualizar el estado de la aplicación con los datos filtrados
     //      setFilteredData(filteredDataByTags);

     //      // Actualizar el valor del slider con la suma de los valores filtrados
     //      const totalValue = filteredDataByTags.reduce((acc, item) => acc + item.value, 0);
     //      setSliderValue(totalValue);
     //    };
     const handleFilter2 = () => {
          console.log('Aplicar filtros');
     };

     return (
          <>
               <Container>
                    <ResponsiveDrawer />
                    <MinMaxContainer>
                         <FiltersDiv>
                              <RangeSlider></RangeSlider>
                         </FiltersDiv>
                    </MinMaxContainer>
                    <DateContainer>
                         <FiltersDiv>
                              <FinishDatePickers></FinishDatePickers>
                         </FiltersDiv>
                    </DateContainer>
                    <TagDiv>
                         <FiltersDiv>
                              <SearchDiv>
                                   <p>Select tags to filter your search </p>
                                   <Search></Search>
                              </SearchDiv>
                         </FiltersDiv>
                         <FiltersDiv>
                              <DiscretDiv>
                                   <DiscreteSlider></DiscreteSlider>
                              </DiscretDiv>
                         </FiltersDiv>
                         <FiltersDiv>
                              {/* <ContainedButtons/> */}
                              <ContainedButtons onClick={handleFilter2} />
                         </FiltersDiv>
                    </TagDiv>
               </Container>

               <CardsContainer>
                    <TopContainer>
                         <SectionTitle>
                              <H3>TOP PROJECTS</H3>
                         </SectionTitle>
                         <TopCards>
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
                         </TopCards>
                    </TopContainer>

                    <NewContainer>
                         <SectionTitle>
                              <H3>DESPEGANDO</H3>
                         </SectionTitle>
                         <NewCards>
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
                         </NewCards>
                    </NewContainer>
                    <FinalContainer>
                         <SectionTitle>
                              <H3>RECTA FINAL</H3>
                         </SectionTitle>
                         <FinalCards>
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
                         </FinalCards>
                    </FinalContainer>
               </CardsContainer>
          </>
     );
};

export default memo(DashboardINVe);
