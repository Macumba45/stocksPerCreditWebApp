import {FC, memo} from 'react';
import {Container, Image, Info} from './styles';
import {Props} from './types';

const LittleCard: FC<Props> = ({image}) => {
     return (
          <Container>
               <Image src={image} />
               <>
                    <Info>Earnings $340.5</Info>
               </>
          </Container>
     );
};

export default memo(LittleCard);
