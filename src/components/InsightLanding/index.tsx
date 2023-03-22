import {FC, memo} from 'react';
import PaidIcon from '@mui/icons-material/Paid';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import GroupsIcon from '@mui/icons-material/Groups';
import {Container, DataContainer, MainContainer, TitleInsight} from './styles';

const InsightLanding: FC = () => {
     return (
          <MainContainer>
               <Container>
                    <PaidIcon
                         fontSize="large"
                         style={{marginTop: '1rem', color: '#7E1B75'}}
                    />
                    <TitleInsight>Financial projects</TitleInsight>
                    <DataContainer>40.505</DataContainer>
               </Container>
               <Container>
                    <GroupWorkIcon
                         fontSize="large"
                         style={{marginTop: '1rem', color: '#7E1B75'}}
                    />
                    <TitleInsight>Project success ratio</TitleInsight>
                    <DataContainer>90%</DataContainer>
               </Container>
               <Container>
                    <GroupsIcon
                         fontSize="large"
                         style={{marginTop: '1rem', color: '#7E1B75'}}
                    />
                    <TitleInsight>Contributions</TitleInsight>
                    <DataContainer>473.859.485€</DataContainer>
               </Container>
          </MainContainer>
     );
};

export default memo(InsightLanding);
