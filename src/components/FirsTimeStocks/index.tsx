import { FC, memo } from 'react';
import {
     ButtonContainer,
     MainContainer,
     SubTitle,
     SubTitleContainer,
     Title,
     TitleContainer,
} from './styles';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

const FirsTimeStocks: FC = () => {
     return (
          <MainContainer>
               <TitleContainer>
                    <Title>First time in Stocks?</Title>
               </TitleContainer>
               <SubTitleContainer>
                    <SubTitle>
                         Stocks is where early adopters and innovation seekers
                         find lively, imaginative tech before it hits the
                         mainstream.
                    </SubTitle>
               </SubTitleContainer>
               <ButtonContainer>
                    <Stack spacing={2} direction="row">
                         <Button sx={{ backgroundColor: '#7E1B75' }} variant="contained">Signup</Button>
                    </Stack>
               </ButtonContainer>
          </MainContainer >
     );
};

export default memo(FirsTimeStocks);
