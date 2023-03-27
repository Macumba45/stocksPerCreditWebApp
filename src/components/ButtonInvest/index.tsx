import { FC, memo, useCallback, useEffect, useState } from "react";
import Button from '@mui/material/Button';
import PaymentIcon from '@mui/icons-material/Payment';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";

const ButtonInvest: FC = () => {

    const navigate = useNavigate()
    const [token] = useState<string | null>(
        window.localStorage.getItem('token')
    );
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        if (token) {
            setIsAuthenticated(true);
        }
    }, [token]);

    const handleButton = useCallback(() => {

        navigate('/login')

    }, [navigate])

    if (isAuthenticated) {

        return (
            <Stack>
                <Button
                    size="large"
                    sx={{
                        backgroundColor: '#7E1B75',
                        padding: '1rem 4rem',
                        // margin: '0rem 10rem',
                        '&:hover': {
                            backgroundColor: '#9c27b0' // Cambia el color del hover aquí
                        }
                    }}
                    variant="contained"
                    endIcon={<PaymentIcon />}
                >
                    INVEST NOW
                </Button>
            </Stack>
        );

    }
    else {

        return (
            <Stack>
                <Button
                    onClick={handleButton}
                    size="large"
                    sx={{
                        backgroundColor: '#7E1B75',
                        padding: '1rem 4rem',
                        // margin: '0rem 10rem',
                        '&:hover': {
                            backgroundColor: '#9c27b0' // Cambia el color del hover aquí
                        }
                    }}
                    variant="contained"
                    endIcon={<PaymentIcon />}
                >
                    INVEST NOW
                </Button>
            </Stack>
        );

    }


}

export default memo(ButtonInvest)