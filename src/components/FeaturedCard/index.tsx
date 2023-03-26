import { Fab } from '@mui/material';
import { FC, memo, useCallback, useEffect, useState } from 'react';
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
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router-dom';

const FeaturedCard: FC = () => {
     const navigate = useNavigate();
     const [token] = useState<string | null>(
          window.localStorage.getItem('token')
     );
     const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

     useEffect(() => {
          if (token) {
               setIsAuthenticated(true);
          }
     }, [token]);

     const goDashboard = useCallback(() => {

          navigate('/dashboard');
     }, [navigate])

     return (
          <MainContainer>
               <ContainerText>
                    <Title>
                         <SpanFeatured>
                              Inversores y emprendedores conectados
                         </SpanFeatured>{' '}
                         {<br />}para un futuro mejor
                    </Title>
                    <SubTitle>
                         Encuentra la startup en la que quieres invertir con el
                         respaldo de nuestro test.
                    </SubTitle>
                    <ButtonContainer>
                         <ButtonSimulation>Start</ButtonSimulation>
                         {isAuthenticated && (
                              <Fab onClick={goDashboard} size="small" sx={{ position: 'fixed', bottom: '2rem', right: 0, marginRight: '3rem', backgroundColor: '#7E1B75' }} color="primary" aria-label="add">
                                   <DashboardIcon />
                              </Fab>
                         )}
                    </ButtonContainer>
               </ContainerText>
               <ContainerImg></ContainerImg>
          </MainContainer>
     );
};

export default memo(FeaturedCard);
