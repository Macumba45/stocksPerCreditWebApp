import { FC, memo } from 'react';
import ResponsiveDrawer from '../../components/SidebarDashboardINV';
import Card from '../../components/CardProjects';
import {
     CardsContainer,
     TopCards,
     TopContainer,
} from './styles';

const DashboardFavorites: FC = () => {

     return (
          <>
               <ResponsiveDrawer />
               <CardsContainer>
                    <TopContainer>
                         {/* <SectionTitle>
                              <H3>YOUR FAVORITES</H3>
                              <Divider
                                   sx={{
                                        backgroundColor: '#7E1B75',
                                        height: '5px',
                                   }}
                              />
                         </SectionTitle> */}
                         <TopCards>
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
                         </TopCards>
                    </TopContainer>
               </CardsContainer>
          </>
     );
};

export default memo(DashboardFavorites);
