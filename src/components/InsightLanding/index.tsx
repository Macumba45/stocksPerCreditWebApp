import { FC, memo } from 'react';
import PaidIcon from '@mui/icons-material/Paid';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import GroupsIcon from '@mui/icons-material/Groups';
import { Container, DataContainer, MainContainer, TitleInsight } from './styles';
import { Props } from './types';

const InsightLanding: FC<Props> = ({ ratioSuccess, totalAmount, totalProjects }) => {
     return (
          <MainContainer>
               <Container>
                    <PaidIcon
                         fontSize="large"
                         style={{ marginTop: '1rem', color: '#7E1B75' }}
                    />
                    <TitleInsight>Financial projects</TitleInsight>
                    <DataContainer>{totalProjects}</DataContainer>
               </Container>
               <Container>
                    <GroupWorkIcon
                         fontSize="large"
                         style={{ marginTop: '1rem', color: '#7E1B75' }}
                    />
                    <TitleInsight>Project success ratio</TitleInsight>
                    <DataContainer>{Math.trunc(ratioSuccess * 100)}%</DataContainer>
               </Container>
               <Container>
                    <GroupsIcon
                         fontSize="large"
                         style={{ marginTop: '1rem', color: '#7E1B75' }}
                    />
                    <TitleInsight>Contributions</TitleInsight>
                    <DataContainer>{totalAmount}€</DataContainer>
               </Container>
          </MainContainer>
     );
};

export default memo(InsightLanding);
