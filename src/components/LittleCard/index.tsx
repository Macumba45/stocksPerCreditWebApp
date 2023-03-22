import {FC, memo} from 'react';
import {Container, Image, Info, ContainerIcon} from './styles';
import {Props} from './types';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';

const LittleCard: FC<Props> = ({image}) => {
     return (
          <Container>
               <Image src={image} />
               <ContainerIcon>
                    <LeaderboardRoundedIcon
                         style={{color: '#7E1B75', fontSize: 60}}
                    />
               </ContainerIcon>
               <Info>Earnings $340.5</Info>
          </Container>
     );
};

export default memo(LittleCard);
