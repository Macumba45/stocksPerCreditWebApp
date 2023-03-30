import {FC, memo, useState} from 'react';
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
          projectData,
          handleApplyFilters,
          handleRangeChange,
          handleFiltersTagsChange,
          handleDateChange,
          toggleFavorite,
          isLoading,
          tags,
     } = DashboardInvLogic();

     const pageSize = 5;
     const [page, setPage] = useState(1); // Estado que controla la cantidad de partes cargadas
     const projects = projectData?.allProjects || []; // La lista de proyectos

     // Obtener la sección de la lista de proyectos que se debe mostrar en función del estado actual
     const visibleProjects = projects.slice(0, pageSize * page) || [];

     // Función que se ejecuta cuando se hace clic en el botón "ver más proyectos"
     const handleLoadMore = () => {
          setPage(page + 1);
     };

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
                                   options={tags}
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
                                        />
                                   </div>
                              ))}
                         </NewCards>
                         {/* Botón que carga la siguiente sección de la lista de proyectos */}
                    </NewContainer>
                    {visibleProjects.length < projects.length && (
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
                              {projectData?.topProjects.map(
                                   (project, index) => (
                                        <div key={index}>
                                             <Card
                                                  id={project.id}
                                                  url={project.url}
                                                  // showHeartButton={true}
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

                              {projectData ? (
                                   projectData.latestProjects.map((project, index) => (
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
                                                  totalInvestor={project.totalInvestor}
                                                  minimuminvestment={project.minimuminvestment}
                                                  goal={project.goal}
                                                  limitvalue={project.limitvalue}
                                                  totalInvest={project.totalInvest}
                                                  toggleFav={toggleFavorite}
                                             />
                                        </div>
                                   ))
                              ) : null}
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
                              {projectData?.closeSoonProjects.map(
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
                                             />
                                        </div>
                                   )
                              )}
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
                                        {visibleProjects.map(
                                             (project, index) => (
                                                  <div key={index}>
                                                       <Card
                                                            id={project.id}
                                                            url={project.url}
                                                            showHeartButton={
                                                                 false
                                                            }
                                                            title={
                                                                 project.title
                                                            }
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
                                                       />
                                                  </div>
                                             )
                                        )}
                                   </NewCards>
                                   {/* Botón que carga la siguiente sección de la lista de proyectos */}
                              </NewContainer>
                              {visibleProjects.length < projects.length && (
                                   <ButtonSeeMore>
                                        <Button
                                             sx={{
                                                  color: '#7E1B75',
                                                  marginBottom: '12px',
                                                  borderColor: '#7E1B75',
                                                  '&:hover': {
                                                       backgroundColor:
                                                            '#7E1B75',
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
                         </FinalCards>
                    </FinalContainer>
               </CardsContainer>
          </>
     );
};
export default memo(DashboardINVe);
