

import { FC, memo, useCallback, useEffect, useState } from "react";
import Button from '@mui/material/Button';
import PaymentIcon from '@mui/icons-material/Payment';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";

const ButtonPayment: FC = () => {

    const navigate = useNavigate()

    const goPayment = useCallback(() => {

        navigate('/payment')

    }, [navigate])



    return (
        <Stack>
            <Button
                onClick={goPayment}
                size="large"
                sx={{
                    backgroundColor: '#7E1B75',
                    padding: '1rem 4rem',
                    // margin: '0rem 10rem',
                    width: '200px',
                    '&:hover': {
                        backgroundColor: '#9c27b0' // Cambia el color del hover aquí
                    }
                }}
                variant="contained"
                endIcon={<PaymentIcon />}
            >
                PAY
            </Button>
        </Stack>
    );

}




export default memo(ButtonPayment)