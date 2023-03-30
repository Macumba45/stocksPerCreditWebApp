import { FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthenticatedToken, setAuthenticatedToken } from '../../services/storage/token';
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

     const token = getAuthenticatedToken()

     const navigate = useNavigate()

     const start = useCallback(() => {
          if (token) {
               navigate('/dashboard')
          } else {
               navigate('/login')

          }
     }, [])
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
                         <ButtonSimulation onClick={start} >Start</ButtonSimulation>
                    </ButtonContainer>
               </ContainerText>
          </MainContainer>
     );
};

export default memo(DashboardLanding);
