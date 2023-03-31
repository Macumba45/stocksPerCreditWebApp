import {FC, memo, useCallback, useEffect, useState} from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {useNavigate} from 'react-router-dom';
import {Fab, Tooltip} from '@mui/material';
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

const FeaturedCard: FC = () => {
     const navigate = useNavigate();
     const [token] = useState<string | null>(
          window.localStorage.getItem('token')
     );
     const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

     const start = useCallback(() => {
          if (token) {
               navigate('/dashboard');
          } else {
               navigate('/login');
          }
     }, []);

     useEffect(() => {
          if (token) {
               setIsAuthenticated(true);
          }
     }, [token]);

     const goDashboard = useCallback(() => {
          navigate('/dashboard');
     }, [navigate]);

     const CustomTooltip = ({title, children}: any) => {
          return (
               <Tooltip title={title} placement="left">
                    {children}
               </Tooltip>
          );
     };

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
                         <ButtonSimulation onClick={start}>
                              Start
                         </ButtonSimulation>
                         {isAuthenticated && (
                              <CustomTooltip title="Go to Dashboard">
                                   <Fab
                                        onClick={goDashboard}
                                        size="small"
                                        sx={{
                                             position: 'fixed',
                                             bottom: '2rem',
                                             right: 0,
                                             marginRight: '2rem',
                                             backgroundColor: '#7E1B75',
                                             '&:hover': {
                                                  backgroundColor: '#7e1b7655', // Cambiar color del hover
                                             },
                                        }}
                                        color="primary"
                                        aria-label="add"
                                   >
                                        <DashboardIcon />
                                   </Fab>
                              </CustomTooltip>
                         )}
                    </ButtonContainer>
               </ContainerText>
               <ContainerImg></ContainerImg>
          </MainContainer>
     );
};

export default memo(FeaturedCard);