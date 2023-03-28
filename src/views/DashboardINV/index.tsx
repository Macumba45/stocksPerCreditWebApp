import {FC, memo, useCallback, useEffect, useState} from 'react';
import ResponsiveDrawer from '../../components/SidebarDashboardINV';
import {FinishDatePickers} from '../../components/DatePicker';
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
import {getAuthenticatedToken} from '../../services/storage/token';
import {getProjects} from '../../services/api/investDashboard';
import {InvestDashboardResponse} from '../../services/api/investDashboard';

const DashboardINVe: FC = () => {
     const [selectedRange, setSelectedRange] = useState<{
          min: number;
          max: number;
     }>({min: 0, max: 0});
     const [filters, setFilters] = useState({selectedTags: []});
     const [selectedDate, setSelectedDate] = useState({finishDate: ''});
     const [projectData, setprojectData] = useState<InvestDashboardResponse>();

     const getProjectData = useCallback(async () => {
          getAuthenticatedToken();
          const data = await getProjects();
          if (data) {
               setprojectData(data);
          }
     }, []);
     console.log(projectData);

     useEffect(() => {
          getProjectData();
     }, [getProjectData]);

     const handleDateChange = (newDates: any) => {
          setSelectedDate((prevDates) => ({
               ...prevDates,
               ...newDates,
          }));
     };

     const handleFiltersChange = (newFilters: any) => {
          setFilters((prevFilters) => ({
               ...prevFilters,
               ...newFilters,
          }));
     };

     const handleRangeChange = (range: {min: number; max: number}) => {
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
          <>
               {' '}
               <ResponsiveDrawer />
               <Container>
                    <MinMaxContainer>
                         <FiltersDiv>
                              <RangeSlider
                                   handleRangeChange={handleRangeChange}
                              />
                         </FiltersDiv>
                    </MinMaxContainer>
                    <DateContainer>
                         <FiltersDiv>
                              <FinishDatePickers
                                   handleDateChange={handleDateChange}
                              />
                         </FiltersDiv>
                    </DateContainer>
                    <TagDiv>
                         <FiltersDiv>
                              <p>Select tags to filter your search </p>
                              <Search
                                   handleFiltersChange={handleFiltersChange}
                              />

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
                    <NewContainer>
                         <SectionTitle>
                              <H3>ALL PROJECTS</H3>
                         </SectionTitle>
                         <NewCards>
                              {projectData?.allProjects.map(
                                   (project, index) => (
                                        <div key={index}>
                                             <Card
                                                  url={project.url}
                                                  showHeartButton={false}
                                                  title={project.title}
                                                  description={
                                                       project.description
                                                  }
                                                  country={project.country}
                                                  city={project.city}
                                                  tags={[]}
                                                  collected={
                                                       project.totalInvest
                                                  }
                                                  totalInvestor={
                                                       project.totalInvestor
                                                  }
                                                  minimuminvestment={
                                                       project.minimuminvestment
                                                  }
                                                  goal={project.goal}
                                                  limitvalue={
                                                       project.limitvalue
                                                  }
                                                  totalInvest={project.totalInvest}
                                             />
                                        </div>
                                   )
                              )}
                         </NewCards>
                    </NewContainer>
                    <TopContainer>
                         <SectionTitle>
                              <Divider />
                              <H3>TOP PROJECTS</H3>
                         </SectionTitle>
                         <TopCards>
                         {projectData?.topProjects.map(
                                   (project, index) => (
                                        <div key={index}>
                                             <Card
                                                  url={project.url}
                                                  showHeartButton={false}
                                                  title={project.title}
                                                  description={
                                                       project.description
                                                  }
                                                  country={project.country}
                                                  city={project.city}
                                                  tags={[]}
                                                  collected={
                                                       project.totalInvest
                                                  }
                                                  totalInvestor={
                                                       project.totalInvestor
                                                  }
                                                  minimuminvestment={
                                                       project.minimuminvestment
                                                  }
                                                  goal={project.goal}
                                                  limitvalue={
                                                       project.limitvalue
                                                  }
                                                  totalInvest={project.totalInvest}
                                             />
                                        </div>
                                   )
                              )}
                         </TopCards>
                    </TopContainer>

                    <NewContainer>
                         <SectionTitle>
                              <H3>LANDING</H3>
                         </SectionTitle>
                         <NewCards>
                         {projectData?.latestProjects.map(
                                   (project, index) => (
                                        <div key={index}>
                                             <Card
                                                  url={project.url}
                                                  showHeartButton={false}
                                                  title={project.title}
                                                  description={
                                                       project.description
                                                  }
                                                  country={project.country}
                                                  city={project.city}
                                                  tags={[]}
                                                  collected={
                                                       project.totalInvest
                                                  }
                                                  totalInvestor={
                                                       project.totalInvestor
                                                  }
                                                  minimuminvestment={
                                                       project.minimuminvestment
                                                  }
                                                  goal={project.goal}
                                                  limitvalue={
                                                       project.limitvalue
                                                  }
                                                  totalInvest={project.totalInvest}
                                             />
                                        </div>
                                   )
                              )}
                         </NewCards>
                    </NewContainer>
                    <FinalContainer>
                         <SectionTitle>
                              <H3>CLOSE SOON</H3>
                         </SectionTitle>
                         <FinalCards>
                         {projectData?.closeSoonProjects.map(
                                   (project, index) => (
                                        <div key={index}>
                                             <Card
                                                  url={project.url}
                                                  showHeartButton={false}
                                                  title={project.title}
                                                  description={
                                                       project.description
                                                  }
                                                  country={project.country}
                                                  city={project.city}
                                                  tags={[]}
                                                  collected={
                                                       project.totalInvest
                                                  }
                                                  totalInvestor={
                                                       project.totalInvestor
                                                  }
                                                  minimuminvestment={
                                                       project.minimuminvestment
                                                  }
                                                  goal={project.goal}
                                                  limitvalue={
                                                       project.limitvalue
                                                  }
                                                  totalInvest={project.totalInvest}
                                             />
                                        </div>
                                   )
                              )}
                         </FinalCards>
                    </FinalContainer>
               </CardsContainer>
          </>
     );
};

export default memo(DashboardINVe);
