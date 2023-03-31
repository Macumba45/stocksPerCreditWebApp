import { FC, useCallback, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ButtonContainer, MainContainer, SubTitle, SubTitleContainer, Title, TitleContainer } from './styles';
import { useNavigate } from 'react-router-dom';


const FirsTimeStocks: FC = () => {
     const navigate = useNavigate()
     const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
     const [token] = useState<string | null>(
          window.localStorage.getItem('token')
     );

     useEffect(() => {
          if (token) {
               setIsAuthenticated(true);
          }
     }, [token]);

     const route = useCallback(() => {
          if (isAuthenticated) {

               navigate('/dashboard')

          } else {
               navigate('/signup')
          }


     }, [navigate])

     return (
          <MainContainer>
               <TitleContainer>
                    <Title>First time in Stocks?</Title>
               </TitleContainer>
               <SubTitleContainer>
                    <SubTitle>
                         Stocks is where early adopters and innovation seekers find lively, imaginative tech before it hits the mainstream.
                    </SubTitle>
               </SubTitleContainer>
               <ButtonContainer>
                    <Stack spacing={2} direction="row">
                         <Button
                              sx={{ backgroundColor: '#7E1B75' }}
                              variant="contained"
                              onClick={route}
                         >
                              {isAuthenticated ? 'Dashboard' : 'Signup'}
                         </Button>
                    </Stack>
               </ButtonContainer>
          </MainContainer>
     );
};

export default FirsTimeStocks;
