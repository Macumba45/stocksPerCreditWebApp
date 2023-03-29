import {FC, memo} from 'react';
import ResponsiveDrawer from '../../components/SidebarDashboardINV';
import {FavoriteViewLogic} from './logic';
import Card from '../../components/CardProjects';
import {
     CardsContainer,
     H3,
     SectionTitle,
     TopCards,
     TopContainer,
} from './styles';
import {Divider} from '@mui/material';

const DashboardFavorites: FC = () => {
     const {getFavorites, favoriteData, toggleFavorite} = FavoriteViewLogic();

     return (
          <>
               <ResponsiveDrawer />
               <CardsContainer>
                    <TopContainer>
                         <SectionTitle>
                              <H3>YOUR FAVORITES</H3>
                              <Divider
                                   sx={{
                                        backgroundColor: '#7E1B75',
                                        height: '5px',
                                   }}
                              />
                         </SectionTitle>
                         <TopCards>
                              {favoriteData?.map((favorite, index) => (
                                   <div key={index}>
                                        <Card
                                             id={favorite.id}
                                             url={favorite.url}
                                             title={favorite.title}
                                             duration={favorite.duration}
                                             description={favorite.description}
                                             country={favorite.country}
                                             city={favorite.city}
                                             tags={[]}
                                             collected={favorite.totalInvest}
                                             totalInvestor={
                                                  favorite.totalInvestor
                                             }
                                             minimuminvestment={
                                                  favorite.minimuminvestment
                                             }
                                             goal={favorite.goal}
                                             limitvalue={favorite.limitvalue}
                                             totalInvest={favorite.totalInvest}
                                             toggleFav={toggleFavorite}
                                        />
                                   </div>
                              ))}
                         </TopCards>
                    </TopContainer>
               </CardsContainer>
          </>
     );
};

export default memo(DashboardFavorites);
