import { FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/CardProjects';
import NavBarEmp from '../../components/NavbarEmp';
import { MaxContainer } from './styles';
import { Fab, Tooltip } from '@mui/material';
import { Home } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import Person4Icon from '@mui/icons-material/Person4';


const DashboardEMP: FC = () => {

     const navigate = useNavigate();
     const goDashboard = useCallback(() => {

          navigate('/');
     }, [navigate])

     const goNewProject = useCallback(() => {

          navigate('/dashboard/new-project');
     }, [navigate])

     const goProfile = useCallback(() => {

          navigate('/profile');
     }, [navigate])

     const CustomTooltip = ({ title, children }: any) => {
          return (
               <Tooltip title={title} placement="left">
                    {children}
               </Tooltip>
          );
     };


     return (
          <>
               <NavBarEmp />
               <CustomTooltip title="Go to Landing">
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
                         <Home />
                    </Fab>
               </CustomTooltip>

               <CustomTooltip title="New Project">
                    <Fab
                         onClick={goNewProject}
                         size="small"
                         sx={{
                              position: 'fixed',
                              bottom: '6rem',
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
                         <AddIcon />
                    </Fab>

               </CustomTooltip>
               <CustomTooltip title="Profile">
                    <Fab
                         onClick={goProfile}
                         size="small"
                         sx={{
                              position: 'fixed',
                              bottom: '10rem',
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
                         <Person4Icon />
                    </Fab>

               </CustomTooltip>
               <MaxContainer>
                    <Card
                         url={'https://player.vimeo.com/video/800507584'}
                         showHeartButton={false}
                         title={'Mind on me'}
                         description={
                              'Deteccion de deterioro cognitivo precoz mediante IA y PNL'
                         }
                         country={'España'}
                         city={'Madrid'}
                         tags={[]}
                         collected={3000}
                         investors={4000}
                         minimuminvestment={300}
                         goal={600}
                         limitvalue={500}
                    />
               </MaxContainer>
          </>
     );
};

export default memo(DashboardEMP);
