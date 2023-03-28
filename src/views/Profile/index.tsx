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
import { useNavigate, useParams } from 'react-router-dom';
import { App, ButtonBack, ButtonContainer, Container, Info } from './styles';
import { User } from '../../models/profile';
import { NavBarProfile } from '../../components/NavbarEmp copy';

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
    <NavBarProfile/>
    <App>
      <ButtonContainer>
        <ButtonBack onClick={goToBack}>Go Back!</ButtonBack>
      </ButtonContainer>
      <Container>
        <Info>ID: {userinfo?.id}</Info>
        <Info>Name: {userinfo?.name}</Info>
        <Info>LastName: {userinfo?.lastName}</Info>
        <Info>EMAIL: {userinfo?.email}</Info>
        <Info>Country: {userinfo?.country}</Info>
        <Info>City: {userinfo?.city}</Info>
        <Info>Phone: {userinfo?.phone}</Info>
        <Info>Rol: {userinfo?.userRol}</Info>
      </Container>
    </App>
    </>

  );
};
export default memo(Profile);
