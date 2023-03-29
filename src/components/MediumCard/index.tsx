import { FC, memo } from 'react';
import Chart from './chart';
import { Container } from './styles';
import { Props } from './types';

const MediumCard: FC = () => {
     return (

          <Container>
               <Chart />
          </Container>
     )
};

export default memo(MediumCard);



