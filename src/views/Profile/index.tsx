import {FC, useState, useCallback, useEffect, memo} from 'react';
import {getUserInfo} from '../../services/api/profile';
import {useNavigate} from 'react-router-dom';
import {User} from '../../models/profile';
import {NavBarProfile} from '../../components/NavbarProfile';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FolderList from '../../components/ProfileMui';
import {
     App,
     ButtonBack,
     ButtonContainer,
     Container,
     AvatarContainer,
} from './styles';

const Profile: FC = () => {
     const [userinfo, setUserInfo] = useState<User | null>(null);
     const [isloading, setIsLoading] = useState<boolean>(false);
     const navigate = useNavigate();

     const getProfileInfo = useCallback(async () => {
          setIsLoading(true);
          const userprofile = await getUserInfo();
          setUserInfo(userprofile);
          setIsLoading(false);
     }, []);

     const goToBack = useCallback(() => {
          navigate('/dashboard', {replace: true});
     }, [navigate]);

     const goToEditProfile = useCallback(() => {
          navigate('/editprofile', {replace: true});
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
                    <ButtonContainer>
                         <ButtonBack onClick={goToBack}>
                              <KeyboardBackspaceIcon />
                         </ButtonBack>
                    </ButtonContainer>
                    <Container>
                         <ButtonContainer>
                              <ButtonBack onClick={goToEditProfile}>
                              </ButtonBack>
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
