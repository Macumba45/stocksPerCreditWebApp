import {FC, memo} from 'react';
import BigCard from '../../components/BigCard';
import LittleCard from '../../components/LittleCard';
import MediumCard from '../../components/MediumCard';
import SidebarDashboardEMP2 from '../../components/SidebarDashboardINV';
import {
     BigDivsContainer,
     Container,
     LilDivContainer,
     MainContainer,
     MixDivsContainer,
} from './styles';

const DashboardINV: FC = () => {
     return (
          <>
               <Container>
                    <SidebarDashboardEMP2 />
                    <MainContainer>
                         <LilDivContainer>
                             <LittleCard/>
                             <LittleCard/>
                             <LittleCard/>
                             <LittleCard/>
                             <LittleCard/>
                             <LittleCard/>
                         </LilDivContainer>

                         <BigDivsContainer>
                              <BigCard />
                              <BigCard />
                         </BigDivsContainer>

                         <MixDivsContainer>
                              <BigCard />
                              <MediumCard />
                              <MediumCard />
                         </MixDivsContainer>
                          <MixDivsContainer>
                              <BigCard />
                              <MediumCard />
                              <MediumCard />
                         </MixDivsContainer>
                    </MainContainer>
               </Container>
          </>
     );
};

export default memo(DashboardINV);
