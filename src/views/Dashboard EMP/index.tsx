import {FC, memo} from 'react';
import Card from '../../components/CardEmpr';
import SidebarDashboardEMP from '../../components/SidebarDashboardEMP'

const DashboardEMP: FC = () => {
     return (
          <>
               <SidebarDashboardEMP />
               <Card image={''} 
               title={''} description={''} 
               onClick={function (): void {
                    throw new Error('Function not implemented.');
               } } liked={false}/>
          </>
     );
};

export default memo(DashboardEMP);
