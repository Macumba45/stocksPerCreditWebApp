import {FC, memo} from 'react';
import ResponsiveDrawer from '../../components/SidebarDashboardINV';

import {Container} from './styles';

const DashboardFavorites: FC = () => {
     return (
          <>
               <Container>
                    <ResponsiveDrawer />
               </Container>
          </>
     );
};

export default memo(DashboardFavorites);
