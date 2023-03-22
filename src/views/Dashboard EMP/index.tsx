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
          title={'Mind on me'}
          description={'Deteccion de deterioro cognitivo precoz mediante IA y PNL'}
          country={'España'}
          city={'Madrid'}
          categories={'MEDICINA'}
        />
          <Card
          image={''}
          showHeartButton={false}
          title={'Mind on me'}
          description={'Deteccion de deterioro cognitivo precoz mediante IA y PNL'}
          country={'España'}
          city={'Madrid'}    
          categories={'MEDICINA'}
        />
          <Card
          image={''}
          showHeartButton={false}
          title={'Mind on me'}
          description={'Deteccion de deterioro cognitivo precoz mediante IA y PNL'}
          country={'España'}
          city={'Madrid'}      
          categories={'MEDICINA'}
        />
          <Card
          image={''}
          showHeartButton={false}
          title={'Mind on me'}
          description={'Deteccion de deterioro cognitivo precoz mediante IA y PNL'}
          country={'España'}
          city={'Madrid'}         
          categories={'MEDICINA'}
        />
      </MaxContainer>
    </>
  );
};

export default memo(DashboardEMP);
