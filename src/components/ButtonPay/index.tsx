import {FC, memo, useCallback, useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import PaymentIcon from '@mui/icons-material/Payment';
import Stack from '@mui/material/Stack';
import {useNavigate} from 'react-router-dom';
import ModalPayment from '../ModalPayment';
import { investOnProject } from '../../services/api/user';

interface Props {
     investAmount: number;
     projectId?: string;
}

const ButtonPayment: FC<Props> = ({investAmount,projectId}) => {
     const navigate = useNavigate();
     const [isOpen, setIsOpen] = useState(false); // Agregamos el estado isOpen al componente

     const handleOpenModal = useCallback(() => {
          // Definimos la función handleOpenModal
          setIsOpen(true);
     }, []);

     const handleCloseModal = useCallback(() => {
          // Definimos la función handleCloseModal
          setIsOpen(false);
          navigate('/dashboard/orders');
     }, []);

     const handleInvest = useCallback(async(projectId: string) => {
          // Realizar la llamada de inversión aquí, usando investAmount
          const invest = {
               projectId,
               amount: {
                    total: investAmount
               }
          }
          if (investAmount) {
               await investOnProject(invest)
          }
          handleOpenModal(); // Llamamos a handleOpenModal para abrir el modal después de realizar la llamada de inversión
     }, [investAmount, handleOpenModal]);

     return (
          <Stack>
               <Button
                    onClick={() => handleInvest(projectId!)}
                    size="large"
                    sx={{
                         backgroundColor: '#7E1B75',
                         padding: '1rem 4rem',
                         // margin: '0rem 10rem',
                         width: '200px',
                         '&:hover': {
                              backgroundColor: '#9c27b0', // Cambia el color del hover aquí
                         },
                    }}
                    variant="contained"
                    endIcon={<PaymentIcon />}
               >
                    Invest
               </Button>
               {isOpen && ( // Renderizamos el modal si isOpen es true
                    <ModalPayment
                         isOpen={isOpen}
                         handleCloseModal={handleCloseModal}
                    />
               )}
          </Stack>
     );
};

export default memo(ButtonPayment);
