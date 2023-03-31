import {FC, memo} from 'react';
import {Props} from './types';
import {Container, MainContainer} from './styles';

const BigCard: FC<Props> = ({chart}) => {
     return (
          <MainContainer>
               <Container>{chart}</Container>
          </MainContainer>
     );
};

export default memo(BigCard);
