// import { FC, memo, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import NavBar from '../../components/NavBar';
// import { Fab, Tooltip } from '@mui/material';
// import DashboardIcon from '@mui/icons-material/Dashboard';

// const Profile: FC = () => {
//      const navigate = useNavigate();

//      const goDashboard = useCallback(() => {

//           navigate('/dashboard');
//      }, [navigate])

//      const CustomTooltip = ({ title, children }: any) => {
//           return (
//                <Tooltip title={title} placement="left">
//                     {children}
//                </Tooltip>
//           );
//      };

//      return (
//           <>
//                <NavBar />
//                <CustomTooltip title="Go to Dashboard">
//                     <Fab
//                          onClick={goDashboard}
//                          size="small"
//                          sx={{
//                               position: 'fixed',
//                               bottom: '2rem',
//                               right: 0,
//                               marginRight: '2rem',
//                               backgroundColor: '#7E1B75',
//                               '&:hover': {
//                                    backgroundColor: '#7e1b7655', // Cambiar color del hover
//                               },

//                          }}
//                          color="primary"
//                          aria-label="add"
//                     >
//                          <DashboardIcon />
//                     </Fab>
//                </CustomTooltip>
//                <div>Profile</div>
//           </>
//      );
// };

// export default memo(Profile);

import { FC, useState, useCallback, useEffect, memo } from 'react';
import { getUserInfo } from '../../services/api/profile';
import { useNavigate } from 'react-router-dom';
import { App, ButtonBack, ButtonContainer, Container, AvatarContainer } from './styles';
import { User } from '../../models/profile';
import { NavBarProfile } from '../../components/NavbarProfile';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FolderList from '../../components/ProfileMui';


const Profile: FC = () => {
  const [userinfo, setUserInfo] = useState<User | null>(null);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const getProfileInfo = useCallback(async () => {
    setIsLoading(true);
    const userprofile = await getUserInfo();
    console.log('esto es el userprofile' + userprofile)
    setUserInfo(userprofile);
    setIsLoading(false);
  }, []);

  const goToBack = useCallback(() => {
    navigate('/dashboard', { replace: true });
  }, [navigate]);

  useEffect(() => {
    getProfileInfo();
  }, [getProfileInfo]);

  if (isloading) {
    return <div>LOADING</div>;
  }

  return (
    <>
      <NavBarProfile />
      <App>
        <Container>
          <ButtonContainer>
            <ButtonBack onClick={goToBack}><KeyboardBackspaceIcon /></ButtonBack>
          </ButtonContainer>
          <AvatarContainer>
            <AccountCircleIcon />
          </AvatarContainer>
          <FolderList />
        </Container>
      </App>
    </>

  );
};
export default memo(Profile);
