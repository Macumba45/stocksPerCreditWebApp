import {FC, memo} from 'react';
import BigCard from '../../components/BigCard';
import LittleCard from '../../components/LittleCard';
import MediumCard from '../../components/MediumCard';
import ResponsiveDrawer from '../../components/SidebarDashboardINV';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PaidIcon from '@mui/icons-material/Paid';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import {
     Container,
     ContainerBigCards,
     ContainerMediumCards,
     LilDivContainer,
     MainContainer,
} from './styles';

const DashboardINVe: FC = () => {
     return (
          <>
               <Container>
                    <ResponsiveDrawer />
                    <MainContainer>
                         <LilDivContainer>
                              <LittleCard
                                   label="Earning:"
                                   data="423.34€"
                                   icon={
                                        <QueryStatsIcon
                                             sx={{
                                                  color: '#7E1B75',
                                                  fontSize: 40,
                                             }}
                                        />
                                   }
                              />
                              <LittleCard
                                   label="Total Projects:"
                                   data="423.34€"
                                   icon={
                                        <PaidIcon
                                             sx={{
                                                  color: '#7E1B75',
                                                  fontSize: 40,
                                             }}
                                        />
                                   }
                              />
                              <LittleCard
                                   label="Earning:"
                                   data="423.34€"
                                   icon={
                                        <HomeIcon
                                             sx={{
                                                  color: '#7E1B75',
                                                  fontSize: 40,
                                             }}
                                        />
                                   }
                              />
                              <LittleCard
                                   label="Earning:"
                                   data="423.34€"
                                   icon={
                                        <QueryStatsIcon
                                             sx={{
                                                  color: '#7E1B75',
                                                  fontSize: 40,
                                             }}
                                        />
                                   }
                              />
                              <LittleCard
                                   label="Earning:"
                                   data="423.34€"
                                   icon={
                                        <AccountBalanceIcon
                                             sx={{
                                                  color: '#7E1B75',
                                                  fontSize: 40,
                                             }}
                                        />
                                   }
                              />
                              <LittleCard
                                   label="Earning:"
                                   data="423.34€"
                                   icon={
                                        <AccountBalanceIcon
                                             sx={{
                                                  color: '#7E1B75',
                                                  fontSize: 40,
                                             }}
                                        />
                                   }
                              />
                         </LilDivContainer>

                         <ContainerMediumCards>
                              <MediumCard />
                              <MediumCard />
                              <MediumCard />
                         </ContainerMediumCards>

                         <ContainerBigCards>
                              <BigCard />
                              <BigCard />
                         </ContainerBigCards>
                    </MainContainer>
               </Container>
          </>
     );
};

export default memo(DashboardINVe);
