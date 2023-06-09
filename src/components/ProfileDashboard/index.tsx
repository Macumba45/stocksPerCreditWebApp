import {FC, memo, useCallback} from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import {Fab, Tooltip} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {MainContainer} from './styles';

const ProfileDashboard: FC = () => {
     const navigate = useNavigate();

     const logout = useCallback(() => {
          window.localStorage.clear();
          navigate('/');
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
               <CustomTooltip title="Logout">
                    <Fab
                         onClick={logout}
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
                         aria-label="logout"
                    >
                         <LogoutIcon />
                    </Fab>
               </CustomTooltip>
               {/* <SearchContainer>
                    <Search />
               </SearchContainer> */}
          </MainContainer>
     );
};

export default memo(ProfileDashboard);
