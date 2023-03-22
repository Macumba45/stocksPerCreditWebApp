import {FC, memo} from 'react';
import BigCard from '../../components/BigCard';
import LittleCard from '../../components/LittleCard';
import MediumCard from '../../components/MediumCard';
import ResponsiveDrawer from '../../components/SidebarPrueba';
import {
     BigDivsContainer,
     Container,
     LilDivContainer,
     MainContainer,
     MixDivsContainer,
} from './styles';

const DashboardINVe: FC = () => {
     return (
          <>
               <Container>
                    <ResponsiveDrawer />
                    <MainContainer>
                         <LilDivContainer>
                              <LittleCard />
                              <LittleCard />
                              <LittleCard />
                              <LittleCard />
                              <LittleCard />
                              <LittleCard />
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

export default memo(DashboardINVe);
