import {FC, memo} from 'react';
import {FeaturedImg, MainContainer} from './styles';

const FeaturedCard: FC = () => {
     return (
          <MainContainer>
               <FeaturedImg src="https://www.ealde.es/wp-content/uploads/2019/12/ciclos-vida-proyectos-pmbok-ealde.jpg" />
          </MainContainer>
     );
};

export default memo(FeaturedCard);
