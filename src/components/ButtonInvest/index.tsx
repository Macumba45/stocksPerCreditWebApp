import { FC, memo } from "react";
import Button from '@mui/material/Button';
import PaymentIcon from '@mui/icons-material/Payment';
import Stack from '@mui/material/Stack';

const ButtonInvest: FC = () => {
    return (
        <Stack>
            <Button
                sx={{
                    backgroundColor: '#7E1B75',
                    '&:hover': {
                        backgroundColor: '#9c27b0' // Cambia el color del hover aquí
                    }
                }}
                variant="contained"
                endIcon={<PaymentIcon />}
            >
                Invest in this StartUp
            </Button>
        </Stack>
    );
}

export default memo(ButtonInvest)