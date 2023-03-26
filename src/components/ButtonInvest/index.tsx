import { FC, memo } from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import PaymentIcon from '@mui/icons-material/Payment';
import Stack from '@mui/material/Stack';

const ButtonInvest: FC = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" endIcon={<PaymentIcon />}>
                Invest in this StartUp
            </Button>
        </Stack>
    );
}

export default memo(ButtonInvest)