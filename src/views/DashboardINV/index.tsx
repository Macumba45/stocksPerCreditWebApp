import { FC, memo, useState } from 'react';
import ResponsiveDrawer from '../../components/SidebarDashboardINV';
import { FinishDatePickers } from '../../components/DatePicker';
import Search from '../../components/Search';
import Card from '../../components/CardProjects';
import RangeSlider from '../../components/MoneySlider';
import ContainedButtons from '../../components/ContainedButton';
import Divider from '@mui/material/Divider';
import {
     Container,
     MinMaxContainer,
     DateContainer,
     TagDiv,
     FiltersDiv,
     SearchDiv,
     TopContainer,
     CardsContainer,
     TopCards,
     SectionTitle,
     NewContainer,
     NewCards,
     FinalContainer,
     FinalCards,
     H3,
     ButtonContainer,
} from './styles';


const DashboardINVe: FC = () => {

     const [selectedRange, setSelectedRange] = useState<{ min: number, max: number }>({ min: 0, max: 0 });
     const [filters, setFilters] = useState({ selectedTags: [] });
     const [selectedDate, setSelectedDate] = useState({ finishDate: '' });

     const handleDateChange = (newDates: any) => {
          setSelectedDate((prevDates) => ({
               ...prevDates,
               ...newDates
          }));
     };

     const handleFiltersChange = (newFilters: any) => {
          setFilters((prevFilters) => ({
               ...prevFilters,
               ...newFilters
          }));
     };

     const handleRangeChange = (range: { min: number, max: number }) => {
          setSelectedRange(range);
     };

     const handleFilter2 = () => {
          console.log({
               selectedRange,
               selectedDate,

               selectedTags: filters.selectedTags,

          });
     };


     return (
          <>  <ResponsiveDrawer />
               <Container>
                    <MinMaxContainer>
                         <FiltersDiv>

                              <RangeSlider handleRangeChange={handleRangeChange} />
                         </FiltersDiv>
                    </MinMaxContainer>
                    <DateContainer>
                         <FiltersDiv>
                              <FinishDatePickers handleDateChange={handleDateChange} />
                         </FiltersDiv>
                    </DateContainer>
                    <TagDiv>
                         <FiltersDiv>

                              <p>Select tags to filter your search </p>
                              <Search handleFiltersChange={handleFiltersChange} />

                              {/* <ContainedButtons/> */}
                         </FiltersDiv>
                    </TagDiv>

               </Container>
               <Container>
                    <ButtonContainer>
                         <ContainedButtons onClick={handleFilter2} />
                    </ButtonContainer>
               </Container>


               <CardsContainer>
                    <TopContainer>
                         <SectionTitle>
                              <Divider style={{ width: '100' }} />
                              <Divider />
                              <H3>TOP PROJECTS</H3>
                         </SectionTitle>
                         <TopCards>
                              <Card
                                   url={'https://player.vimeo.com/video/800507584'}
                                   showHeartButton={false}
                                   title={'Mind on me'}
                                   description={
                                        'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                                   }
                                   country={'España'}
                                   city={'Madrid'}
                                   tags={[]}
                                   collected={3000}
                                   investors={4000}
                                   minimuminvestment={300}
                                   goal={600}
                                   limitvalue={500}
                              />
                              <Card
                                   url={'https://player.vimeo.com/video/800507584'}
                                   showHeartButton={false}
                                   title={'Mind on me'}
                                   description={
                                        'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                                   }
                                   country={'España'}
                                   city={'Madrid'}
                                   tags={[]}
                                   collected={3000}
                                   investors={4000}
                                   minimuminvestment={300}
                                   goal={600}
                                   limitvalue={500}
                              />
                              <Card
                                   url={'https://player.vimeo.com/video/800507584'}
                                   showHeartButton={false}
                                   title={'Mind on me'}
                                   description={
                                        'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                                   }
                                   country={'España'}
                                   city={'Madrid'}
                                   tags={[]}
                                   collected={3000}
                                   investors={4000}
                                   minimuminvestment={300}
                                   goal={600}
                                   limitvalue={500}
                              />
                              <Card
                                   url={'https://player.vimeo.com/video/800507584'}
                                   showHeartButton={false}
                                   title={'Mind on me'}
                                   description={
                                        'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                                   }
                                   country={'España'}
                                   city={'Madrid'}
                                   tags={[]}
                                   collected={3000}
                                   investors={4000}
                                   minimuminvestment={300}
                                   goal={600}
                                   limitvalue={500}
                              />
                              <Card
                                   url={'https://player.vimeo.com/video/800507584'}
                                   showHeartButton={false}
                                   title={'Mind on me'}
                                   description={
                                        'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                                   }
                                   country={'España'}
                                   city={'Madrid'}
                                   tags={[]}
                                   collected={3000}
                                   investors={4000}
                                   minimuminvestment={300}
                                   goal={600}
                                   limitvalue={500}
                              />
                              <Card
                                   url={'https://player.vimeo.com/video/800507584'}
                                   showHeartButton={false}
                                   title={'Mind on me'}
                                   description={
                                        'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                                   }
                                   country={'España'}
                                   city={'Madrid'}
                                   tags={[]}
                                   collected={3000}
                                   investors={4000}
                                   minimuminvestment={300}
                                   goal={600}
                                   limitvalue={500}
                              />
                         </TopCards>
                    </TopContainer>

                    <NewContainer>
                         <SectionTitle>
                              <H3>LANDING</H3>
                         </SectionTitle>
                         <NewCards>
                              <Card
                                   url={'https://player.vimeo.com/video/800507584'}
                                   showHeartButton={false}
                                   title={'Mind on me'}
                                   description={
                                        'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                                   }
                                   country={'España'}
                                   city={'Madrid'}
                                   tags={[]}
                                   collected={3000}
                                   investors={4000}
                                   minimuminvestment={300}
                                   goal={600}
                                   limitvalue={500}
                              />
                              <Card
                                   url={'https://player.vimeo.com/video/800507584'}
                                   showHeartButton={false}
                                   title={'Mind on me'}
                                   description={
                                        'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                                   }
                                   country={'España'}
                                   city={'Madrid'}
                                   tags={[]}
                                   collected={3000}
                                   investors={4000}
                                   minimuminvestment={300}
                                   goal={600}
                                   limitvalue={500}
                              />
                              <Card
                                   url={'https://player.vimeo.com/video/800507584'}
                                   showHeartButton={false}
                                   title={'Mind on me'}
                                   description={
                                        'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                                   }
                                   country={'España'}
                                   city={'Madrid'}
                                   tags={[]}
                                   collected={3000}
                                   investors={4000}
                                   minimuminvestment={300}
                                   goal={600}
                                   limitvalue={500}
                              />
                              <Card
                                   url={'https://player.vimeo.com/video/800507584'}
                                   showHeartButton={false}
                                   title={'Mind on me'}
                                   description={
                                        'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                                   }
                                   country={'España'}
                                   city={'Madrid'}
                                   tags={[]}
                                   collected={3000}
                                   investors={4000}
                                   minimuminvestment={300}
                                   goal={600}
                                   limitvalue={500}
                              />
                              <Card
                                   url={'https://player.vimeo.com/video/800507584'}
                                   showHeartButton={false}
                                   title={'Mind on me'}
                                   description={
                                        'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                                   }
                                   country={'España'}
                                   city={'Madrid'}
                                   tags={[]}
                                   collected={3000}
                                   investors={4000}
                                   minimuminvestment={300}
                                   goal={600}
                                   limitvalue={500}
                              />
                              <Card
                                   url={'https://player.vimeo.com/video/800507584'}
                                   showHeartButton={false}
                                   title={'Mind on me'}
                                   description={
                                        'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                                   }
                                   country={'España'}
                                   city={'Madrid'}
                                   tags={[]}
                                   collected={3000}
                                   investors={4000}
                                   minimuminvestment={300}
                                   goal={600}
                                   limitvalue={500}
                              />
                         </NewCards>
                    </NewContainer>
                    <FinalContainer>
                         <SectionTitle>
                              <H3>CLOSE SOON</H3>
                         </SectionTitle>
                         <FinalCards>
                              <Card
                                   url={'https://player.vimeo.com/video/800507584'}
                                   showHeartButton={false}
                                   title={'Mind on me'}
                                   description={
                                        'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                                   }
                                   country={'España'}
                                   city={'Madrid'}
                                   tags={[]}
                                   collected={3000}
                                   investors={4000}
                                   minimuminvestment={300}
                                   goal={600}
                                   limitvalue={500}
                              />
                              <Card
                                   url={'https://player.vimeo.com/video/800507584'}
                                   showHeartButton={false}
                                   title={'Mind on me'}
                                   description={
                                        'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                                   }
                                   country={'España'}
                                   city={'Madrid'}
                                   tags={[]}
                                   collected={3000}
                                   investors={4000}
                                   minimuminvestment={300}
                                   goal={600}
                                   limitvalue={500}
                              />
                              <Card
                                   url={'https://player.vimeo.com/video/800507584'}
                                   showHeartButton={false}
                                   title={'Mind on me'}
                                   description={
                                        'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                                   }
                                   country={'España'}
                                   city={'Madrid'}
                                   tags={[]}
                                   collected={3000}
                                   investors={4000}
                                   minimuminvestment={300}
                                   goal={600}
                                   limitvalue={500}
                              />
                              <Card
                                   url={'https://player.vimeo.com/video/800507584'}
                                   showHeartButton={false}
                                   title={'Mind on me'}
                                   description={
                                        'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                                   }
                                   country={'España'}
                                   city={'Madrid'}
                                   tags={[]}
                                   collected={3000}
                                   investors={4000}
                                   minimuminvestment={300}
                                   goal={600}
                                   limitvalue={500}
                              />
                              <Card
                                   url={'https://player.vimeo.com/video/800507584'}
                                   showHeartButton={false}
                                   title={'Mind on me'}
                                   description={
                                        'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                                   }
                                   country={'España'}
                                   city={'Madrid'}
                                   tags={[]}
                                   collected={3000}
                                   investors={4000}
                                   minimuminvestment={300}
                                   goal={600}
                                   limitvalue={500}
                              />
                              <Card
                                   url={'https://player.vimeo.com/video/800507584'}
                                   showHeartButton={false}
                                   title={'Mind on me'}
                                   description={
                                        'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                                   }
                                   country={'España'}
                                   city={'Madrid'}
                                   tags={[]}
                                   collected={3000}
                                   investors={4000}
                                   minimuminvestment={300}
                                   goal={600}
                                   limitvalue={500}
                              />
                         </FinalCards>
                    </FinalContainer>
               </CardsContainer>
          </>
     );
};

export default memo(DashboardINVe);
