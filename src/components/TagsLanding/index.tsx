import { FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import {

     MainContainer,
     SubTitle,
     SubTitleBorderButton,
     SubTitleContainer,
     Title,
     TitleContainer,
} from './styles';


const TagsLanding: FC = () => {

     const navigate = useNavigate()

     const handleLogin = useCallback(() => {
          navigate('/login')

     }, [])

     return (
          <MainContainer>
               <TitleContainer>
                    <Title>Which categories interest you?</Title>
               </TitleContainer>
               <SubTitleContainer>
                    <SubTitle>
                         Discover projects just for you and get great recommendations when you select your interests.
                    </SubTitle>
               </SubTitleContainer>
               <SubTitleContainer>
                    <SubTitleBorderButton
                         onClick={handleLogin}>
                         Signup or Login to discover your interest
                    </SubTitleBorderButton>
               </SubTitleContainer>
          </MainContainer>
     );
};

export default memo(TagsLanding);
