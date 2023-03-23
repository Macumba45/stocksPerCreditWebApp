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

const DashboardINVe: FC = () => {
     return (
          <>
               <Container>
                    <ResponsiveDrawer />

               </Container>
          </>
     );
};

export default memo(DashboardINVe);
