import {FC, memo, useCallback} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AlbumIcon from '@mui/icons-material/Album';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import {
     ContainerTags,
     IndividualTags,
     LabelTag,
     MainContainer,
     SubTitle,
     SubTitleBorderButton,
     SubTitleContainer,
     Title,
     TitleContainer,
} from './styles';

const TagsLanding: FC = () => {
     const navigate = useNavigate();

     const handleLogin = useCallback(() => {
          navigate('/signup');
     }, [navigate]);

     return (
          <MainContainer>
               <TitleContainer>
                    <Title>Which categories interest you?</Title>
               </TitleContainer>
               <SubTitleContainer>
                    <SubTitle>
                         Discover projects just for you and get great
                         recommendations when you select your interests.
                    </SubTitle>
               </SubTitleContainer>
               <SubTitleContainer>
                    <SubTitleBorderButton onClick={handleLogin}>
                         Signup or Login to discover your interest
                    </SubTitleBorderButton>
               </SubTitleContainer>
               <ContainerTags>
                    <Link
                         to="/home"
                         style={{textDecoration: 'none', color: 'black'}}
                    >
                         <IndividualTags>
                              <HomeIcon
                                   fontSize="large"
                                   sx={{color: '#7E1B75'}}
                              />
                              <LabelTag>Home</LabelTag>
                         </IndividualTags>
                    </Link>

                    <Link
                         to="/phone"
                         style={{textDecoration: 'none', color: 'black'}}
                    >
                         <IndividualTags>
                              <PhoneIphoneIcon
                                   fontSize="large"
                                   sx={{color: '#7E1B75'}}
                              />
                              <LabelTag>Phone</LabelTag>
                         </IndividualTags>
                    </Link>

                    <Link
                         to="/travel"
                         style={{textDecoration: 'none', color: 'black'}}
                    >
                         <IndividualTags>
                              <ModeOfTravelIcon
                                   fontSize="large"
                                   sx={{color: '#7E1B75'}}
                              />
                              <LabelTag>Travel</LabelTag>
                         </IndividualTags>
                    </Link>

                    <Link
                         to="/fitness"
                         style={{textDecoration: 'none', color: 'black'}}
                    >
                         <IndividualTags>
                              <FitnessCenterIcon
                                   fontSize="large"
                                   sx={{color: '#7E1B75'}}
                              />
                              <LabelTag>Fitness</LabelTag>
                         </IndividualTags>
                    </Link>

                    <Link
                         to="/audio"
                         style={{textDecoration: 'none', color: 'black'}}
                    >
                         <IndividualTags>
                              <AlbumIcon
                                   fontSize="large"
                                   sx={{color: '#7E1B75'}}
                              />
                              <LabelTag>Audio</LabelTag>
                         </IndividualTags>
                    </Link>

                    <Link
                         to="/film"
                         style={{textDecoration: 'none', color: 'black'}}
                    >
                         <IndividualTags>
                              <LiveTvIcon
                                   fontSize="large"
                                   sx={{color: '#7E1B75'}}
                              />
                              <LabelTag>Film</LabelTag>
                         </IndividualTags>
                    </Link>
               </ContainerTags>
          </MainContainer>
     );
};

export default memo(TagsLanding);
