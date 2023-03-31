import { FC, memo } from 'react';
import ResponsiveDrawer from '../../components/SidebarDashboardINV';
import { NewCards, NewContainer } from '../DashboardINV/styles';
import Card from '../../components/CardProjects';
import { Container } from './styles';

const DashboardOrders: FC = () => {


     return (
          <>
               <Container>
                    <ResponsiveDrawer />
                    <NewContainer>
                         <NewCards>
                              {/* Mapear solo los proyectos que son visibles en la página actual */}

                              <div >
                                   <Card
                                        id={"abc123"}
                                        url={"https://www.example.com"}
                                        showHeartButton={true}
                                        title={"GreenCycle"}
                                        duration={"1 1 24"}
                                        description={"GreenCycle es una plataforma de reciclaje comunitario que ayuda a los ciudadanos a gestionar de manera sostenible sus residuos."}
                                        country={"España"}
                                        city={"Madrid"}
                                        // tags={ }
                                        collected={10000}
                                        totalInvestor={83}
                                        minimuminvestment={100}
                                        goal={28000}
                                        limitvalue={500}
                                        totalInvest={15000}
                                        toggleFav={() => console.log("Favorito")}
                                        deleteIcon={false}

                                   />
                              </div>

                         </NewCards>
                         {/* Botón que carga la siguiente sección de la lista de proyectos */}
                    </NewContainer>
               </Container>
          </>
     );
};

export default memo(DashboardOrders);
