import { Box, Button, Modal, Typography } from '@mui/material';
import { FC, memo } from 'react';

interface Props {
    handleCloseModal: () => void;
    isOpen: boolean;
}

const ModalPayment: FC<Props> = ({ handleCloseModal, isOpen }) => {
    return (
        <Modal open={isOpen} onClose={handleCloseModal}>
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                borderRadius: '10px'
            }}>
                <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                    Payment Successful
                </Typography>
                <Typography sx={{ mb: 2 }}>
                    Thank you for your investment! Your payment has been received.
                </Typography>
                <Button sx={{
                    backgroundColor: '#7E1B75',
                    width: '40px',
                    '&:hover': {
                        backgroundColor: '#9c27b0', // Cambia el color del hover aquí
                    },
                }} variant="contained" onClick={handleCloseModal}>Close</Button>
            </Box>
        </Modal>
    )
}

export default memo(ModalPayment);
