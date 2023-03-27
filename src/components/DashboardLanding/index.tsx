import { FC, memo } from 'react';
import {
     MainContainer,
     ContainerText,
     ContainerImg,
     Title,
     SubTitle,
     SpanFeatured,
     ButtonContainer,
     ButtonSimulation,
} from './styles';

const DashboardLanding: FC = () => {
     return (
          <MainContainer>
               <ContainerImg></ContainerImg>
               <ContainerText>
                    <Title>
                         <SpanFeatured>Tus inversiones {<br />}</SpanFeatured>
                         claras y seguras
                    </Title>
                    <SubTitle>
                         Invierte desde solo 100€{<br />} en startups en
                         crecimiento de todo el planeta
                    </SubTitle>
                    <ButtonContainer>
                         <ButtonSimulation>Start</ButtonSimulation>
                    </ButtonContainer>
               </ContainerText>
          </MainContainer>
     );
};

export default memo(DashboardLanding);
