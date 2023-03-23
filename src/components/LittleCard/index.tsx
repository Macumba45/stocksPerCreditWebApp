import { FC, memo } from 'react';
import { Container, Image, ContainerIcon, ContainerInfo, LabelSpan, DataSpan, MainContainer } from './styles';
import { Props } from './types';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';

const LittleCard: FC<Props> = ({ icon, label, data }) => {
     return (

          <MainContainer>
               <Container>
                    <ContainerIcon>
                         {icon}
                    </ContainerIcon>
                    <ContainerInfo>
                         <LabelSpan>{label}</LabelSpan>
                         <DataSpan>{data}</DataSpan>
                    </ContainerInfo>

               </Container>
          </MainContainer>
     );
};

export default memo(LittleCard);
