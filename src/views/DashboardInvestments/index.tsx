import { FC, memo } from 'react';
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
import Chart from '../../components/MediumCard/chart';
import RadialChart from '../../components/MediumCard/radial';
import RadarChartComponent from '../../components/MediumCard/radar';
import Stacked from '../../components/BigCard/stacked';
import TynyBar from '../../components/BigCard/TynyBar';





const DashboardInvestment: FC = () => {
     const iconStyle = {
          color: '#7E1B75',
          fontSize: 40,
     };

     const data = [
          {
               label: 'Total Invest:',
               data: '423.34€',
               icon: <QueryStatsIcon sx={iconStyle} />,
          },
          {
               label: 'Total Projects:',
               data: '3',
               icon: <PaidIcon sx={iconStyle} />,
          },
          {
               label: 'Revenue:',
               data: '2423.34€',
               icon: <HomeIcon sx={iconStyle} />,
          },
          {
               label: 'Earning:',
               data: '423.34€',
               icon: <QueryStatsIcon sx={iconStyle} />,
          },
          {
               label: 'Earning:',
               data: '423.34€',
               icon: <AccountBalanceIcon sx={iconStyle} />,
          },
          {
               label: 'Earning:',
               data: '423.34€',
               icon: <AccountBalanceIcon sx={iconStyle} />,
          },
     ];

     return (
          <>
               <Container>
                    <ResponsiveDrawer />
                    <MainContainer>
                         <LilDivContainer>
                              {data.map((item, index) => (
                                   <LittleCard
                                        key={index}
                                        label={item.label}
                                        data={item.data}
                                        icon={item.icon}
                                   />
                              ))}
                         </LilDivContainer>
                         <ContainerMediumCards>
                              <MediumCard
                                   chart={<Chart />} />
                              <MediumCard
                                   chart={<RadialChart />} />
                              <MediumCard
                                   chart={<RadarChartComponent />} />
                         </ContainerMediumCards>

                         <ContainerBigCards>
                              <BigCard chart={<Stacked />} />
                              <BigCard chart={<TynyBar />} />
                         </ContainerBigCards>
                    </MainContainer>
               </Container>
          </>
     );
};

export default memo(DashboardInvestment);
