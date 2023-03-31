import {FC, memo, useCallback, useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import PaymentIcon from '@mui/icons-material/Payment';
import Stack from '@mui/material/Stack';
import {useNavigate} from 'react-router-dom';

type Props = {
     projectId?:string
}
const ButtonInvest: FC<Props> = ({projectId}) => {
     const navigate = useNavigate();
     const [token] = useState<string | null>(
          window.localStorage.getItem('token')
     );
     const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

     useEffect(() => {
          if (token) {
               setIsAuthenticated(true);
          }
     }, [token, isAuthenticated]);

     const goPayment = useCallback(() => {
          navigate('/payment/'+projectId);
     }, [navigate, projectId]);

     const ButtonStyles = {
          backgroundColor: '#7E1B75',
          padding: '1rem 4rem',
          '&:hover': {
               backgroundColor: '#9c27b0', 
          },
     };

     return (
          <Stack>
               <Button
                    onClick={goPayment}
                    size="large"
                    style={ButtonStyles}
                    variant="contained"
                    endIcon={<PaymentIcon />}
               >
                    INVEST NOW
               </Button>
          </Stack>
     );
};

export default memo(ButtonInvest);
