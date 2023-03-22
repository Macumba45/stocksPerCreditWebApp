import { FC, memo } from 'react';
import Card from '../../components/CardProjects';
import SidebarDashboardEMP from '../../components/SidebarDashboardEMP';
import { MaxContainer } from './styles'

const DashboardEMP: FC = () => {
    return (
        <>
        <SidebarDashboardEMP />
        <MaxContainer>
          <Card 
            image={''}
            showHeartButton={false}
            title={'Me voy a suicidar'} 
            description={'dadjahsdhabfhsabfhabfhasbfhafbahsbfhabfebfaebfeabfyeafbeab'}
          />
        </MaxContainer>
      </>
    );
};

export default memo(DashboardEMP);
