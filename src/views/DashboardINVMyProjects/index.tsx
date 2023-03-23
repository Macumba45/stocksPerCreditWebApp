import {FC, memo} from 'react';
import ResponsiveDrawer from '../../components/SidebarDashboardINV/index';

const DashboardProjects: FC = () => {
     return (
          <>
               <ResponsiveDrawer />
          </>
     );
};

export default memo(DashboardProjects);
