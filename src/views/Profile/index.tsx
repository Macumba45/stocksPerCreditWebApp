import { FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import { Fab, Tooltip } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';



const Profile: FC = () => {
     const navigate = useNavigate();

     const goDashboard = useCallback(() => {

          navigate('/dashboard');
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
               <NavBar />
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
               <div>Profile</div>
          </>
     );
};

export default memo(Profile);
