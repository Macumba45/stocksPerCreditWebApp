import { FC, memo } from 'react';
import { Container, MainContainer } from './styles';
import { Props } from './types';

const BigCard: FC<Props> = ({ chart }) => {
     return (
          <MainContainer>
               <Container>
                    {chart}
               </Container>
          </MainContainer>
     );
};

export default memo(BigCard);
