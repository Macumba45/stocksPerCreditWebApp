import { FC, memo } from 'react';
import ResponsiveDrawer from '../../components/SidebarDashboardINV';
import { DashboardInvLogic } from './logic';
import { FinishDatePickers } from '../../components/DatePicker';
import Search from '../../components/Search';
import Card from '../../components/CardProjects';
import RangeSlider from '../../components/MoneySlider';
import ContainedButtons from '../../components/ContainedButton';
import { Divider } from '@mui/material';
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

const DashboardINVe: FC = () => {

     const {

          projectData,
          handleFilter2,
          handleRangeChange,
          handleFiltersChange,
          handleDateChange
     } = DashboardInvLogic()

     console.log(projectData)



     return (
          <>
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
                              <Divider sx={{ backgroundColor: '#7E1B75', height: '5px' }} />
                         </SectionTitle>
                         <NewCards>
                              {projectData?.allProjects.map(
                                   (project, index) => (
                                        <div key={index}>
                                             <Card
                                                  url={project.url}
                                                  showHeartButton={false}
                                                  title={project.title}
                                                  duration={project.duration}
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
                              <H3>TOP PROJECTS</H3>
                              <Divider sx={{ backgroundColor: '#7E1B75', height: '5px' }} />
                         </SectionTitle>
                         <TopCards>
                              {projectData?.topProjects.map(
                                   (project, index) => (
                                        <div key={index}>
                                             <Card
                                                  url={project.url}
                                                  showHeartButton={false}
                                                  title={project.title}
                                                  duration={project.duration}
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
                                                  totalInvest={
                                                       project.totalInvest
                                                  }
                                             />
                                        </div>
                                   )
                              )}
                         </TopCards>
                    </TopContainer>

                    <TopContainer>
                         <SectionTitle>
                              <H3>LANDING</H3>
                              <Divider sx={{ backgroundColor: '#7E1B75', height: '5px' }} />
                         </SectionTitle>
                         <TopCards>

                              {projectData?.latestProjects.map(
                                   (project, index) => (
                                        <div key={index}>
                                             <Card
                                                  url={project.url}
                                                  showHeartButton={false}
                                                  title={project.title}
                                                  duration={project.duration}
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
                                                  totalInvest={
                                                       project.totalInvest
                                                  }
                                             />
                                        </div>
                                   )
                              )}
                         </TopCards>
                    </TopContainer>
                    <FinalContainer>
                         <SectionTitle>
                              <H3>CLOSE SOON</H3>
                              <Divider sx={{ backgroundColor: '#7E1B75', height: '5px' }} />
                         </SectionTitle>
                         <FinalCards>
                              {projectData?.closeSoonProjects.map(
                                   (project, index) => (
                                        <div key={index}>
                                             <Card
                                                  url={project.url}
                                                  showHeartButton={false}
                                                  title={project.title}
                                                  duration={project.duration}
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
                                                  totalInvest={
                                                       project.totalInvest
                                                  }
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
