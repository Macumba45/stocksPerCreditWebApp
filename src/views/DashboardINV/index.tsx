import {FC, memo, useCallback, useState} from 'react';
import ResponsiveDrawer from '../../components/SidebarDashboardINV';
import {DashboardInvLogic} from './logic';
import {FinishDatePickers} from '../../components/DatePicker';
import Search from '../../components/Search';
import Card from '../../components/CardProjects';
import RangeSlider from '../../components/MoneySlider';
import ContainedButtons from '../../components/ContainedButton';
import {Button, Divider} from '@mui/material';
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
     ButtonSeeMore,
} from './styles';

const DashboardINVe: FC = () => {
     const {
          groupedProjectsData,
          handleApplyFilters,
          handleRangeChange,
          handleFiltersTagsChange,
          handleDateChange,
          toggleFavorite,
          isLoading,
          tagsGroup,
          projectsData,
     } = DashboardInvLogic();

     const pageSize = 5;
     const [page, setPage] = useState(1); // Estado que controla la cantidad de partes cargadas

     // Obtener la sección de la lista de proyectos que se debe mostrar en función del estado actual
     const visibleProjects = projectsData.slice(0, pageSize * page) || [];

     // Función que se ejecuta cuando se hace clic en el botón "ver más proyectos"
     const handleLoadMore = useCallback(() => {
          setPage(page + 1);
     }, [page]);

     if (isLoading) {
          return <p>cargando</p>;
     }

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
                                   handleFiltersChange={handleFiltersTagsChange}
                                   options={tagsGroup}
                              />
                              {/* <ContainedButtons/> */}
                         </FiltersDiv>
                    </TagDiv>
               </Container>
               <Container>
                    <ButtonContainer>
                         <ContainedButtons onClick={handleApplyFilters} />
                    </ButtonContainer>
               </Container>
               <CardsContainer>
                    <NewContainer>
                         <SectionTitle>
                              <H3>ALL PROJECTS</H3>
                              <Divider
                                   sx={{
                                        backgroundColor: '#7E1B75',
                                        height: '5px',
                                   }}
                              />
                         </SectionTitle>
                         <NewCards>
                              {/* Mapear solo los proyectos que son visibles en la página actual */}
                              {visibleProjects.map((project, index) => (
                                   <div key={index}>
                                        <Card
                                             id={project.id}
                                             url={project.url}
                                             showHeartButton={false}
                                             title={project.title}
                                             duration={project.duration}
                                             description={project.description}
                                             country={project.country}
                                             city={project.city}
                                             tags={[]}
                                             collected={project.totalInvest}
                                             totalInvestor={
                                                  project.totalInvestor
                                             }
                                             minimuminvestment={
                                                  project.minimuminvestment
                                             }
                                             goal={project.goal}
                                             limitvalue={project.limitvalue}
                                             totalInvest={project.totalInvest}
                                             toggleFav={toggleFavorite}
                                             deleteIcon={false}
                                        />
                                   </div>
                              ))}
                         </NewCards>
                         {/* Botón que carga la siguiente sección de la lista de proyectos */}
                    </NewContainer>
                    {visibleProjects.length < projectsData.length && (
                         <ButtonSeeMore>
                              <Button
                                   sx={{
                                        color: '#7E1B75',
                                        marginBottom: '12px',
                                        borderColor: '#7E1B75',
                                        '&:hover': {
                                             backgroundColor: '#7E1B75',
                                             borderColor: '#7E1B75',
                                             color: 'white',
                                        },
                                   }}
                                   variant="outlined"
                                   onClick={handleLoadMore}
                              >
                                   See more
                              </Button>
                         </ButtonSeeMore>
                    )}

                    <TopContainer>
                         <SectionTitle>
                              <H3>TOP PROJECTS</H3>
                              <Divider
                                   sx={{
                                        backgroundColor: '#7E1B75',
                                        height: '5px',
                                   }}
                              />
                         </SectionTitle>
                         <TopCards>
                              {groupedProjectsData?.topProjects.map(
                                   (project, index) => (
                                        <div key={index}>
                                             <Card
                                                  id={project.id}
                                                  url={project.url}
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
                                                  toggleFav={toggleFavorite}
                                                  deleteIcon={false}
                                             />
                                        </div>
                                   )
                              )}
                         </TopCards>
                    </TopContainer>

                    <TopContainer>
                         <SectionTitle>
                              <H3>RECENTS PROJECTS</H3>
                              <Divider
                                   sx={{
                                        backgroundColor: '#7E1B75',
                                        height: '5px',
                                   }}
                              />
                         </SectionTitle>
                         <TopCards>
                              {groupedProjectsData
                                   ? groupedProjectsData.latestProjects.map(
                                          (project, index) => (
                                               <div key={index}>
                                                    <Card
                                                         id={project.id}
                                                         url={project.url}
                                                         showHeartButton={false}
                                                         title={project.title}
                                                         duration={
                                                              project.duration
                                                         }
                                                         description={
                                                              project.description
                                                         }
                                                         country={
                                                              project.country
                                                         }
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
                                                         toggleFav={
                                                              toggleFavorite
                                                         }
                                                         deleteIcon={false}
                                                    />
                                               </div>
                                          )
                                     )
                                   : null}
                         </TopCards>
                    </TopContainer>
                    <FinalContainer>
                         <SectionTitle>
                              <H3>PROJECTS CLOSE SOON</H3>
                              <Divider
                                   sx={{
                                        backgroundColor: '#7E1B75',
                                        height: '5px',
                                   }}
                              />
                         </SectionTitle>
                         <FinalCards>
                              {groupedProjectsData?.closeSoonProjects.map(
                                   (project, index) => (
                                        <div key={index}>
                                             <Card
                                                  id={project.id}
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
                                                  toggleFav={toggleFavorite}
                                                  deleteIcon={false}
                                             />
                                        </div>
                                   )
                              )}
                              <NewContainer></NewContainer>
                         </FinalCards>
                    </FinalContainer>
               </CardsContainer>
          </>
     );
};
export default memo(DashboardINVe);
