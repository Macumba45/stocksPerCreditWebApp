import {FC, memo} from 'react';
import ResponsiveDrawer from '../../components/SidebarDashboardINV';

import {Container} from './styles';

const DashboardOrders: FC = () => {
     return (
          <>
               <Container>
                    <ResponsiveDrawer />
               </Container>
          </>
     );
};

export default memo(DashboardOrders);
