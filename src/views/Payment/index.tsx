import { Avatar, Divider } from "@mui/material";
import { FC, memo, useCallback, useState } from "react";
import NavBar from "../../components/NavBar";
import InputDecorators from '../../components/InvestInputDetails'
import Radio from '@mui/material/Radio';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ButtonPay from "../../components/ButtonPay";
import { useNavigate } from "react-router-dom";
import { Fab, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MainContainer, ContainerForm, ContainerSteps, TextSteps2, TextSteps1, ContainerTitle, TitleStartup, ContainerAmount, ContainerPayment, TitlePayment, MastercardPayment, ContainerMastercard, IconPaymentCard, LabelPaymentCard, IconPaymentCardPaypal, ButtonPaymentContainer } from "./styles";





const Payment: FC = () => {

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    const navigate = useNavigate();
    const goBack = useCallback(() => {
        window.scrollTo(0, 0)
        window.history.back();
    }, [navigate])


    const CustomTooltip = ({ title, children }: any) => {
        return (
            <Tooltip title={title} placement="left">
                {children}
            </Tooltip>
        );
    };


    return (
        <>
            <NavBar />
            <CustomTooltip title="Go to Landing">
                <Fab
                    onClick={goBack}
                    size="small"
                    sx={{
                        position: 'fixed',
                        bottom: '2rem',
                        right: 0,
                        marginRight: '2rem',
                        backgroundColor: '#7E1B75',
                        '&:hover': {
                            backgroundColor: '#7e1b7655', // Cambiar color del hover
                        },


                    }}
                    color="primary"
                    aria-label="add"
                >
                    <ArrowBackIcon />
                </Fab>
            </CustomTooltip>
            <MainContainer>
                <ContainerForm>
                    <ContainerSteps>
                        <Avatar sx={{ backgroundColor: 'grey', width: '20px', height: '20px', marginLeft: '1rem', fontFamily: 'Roboto', fontSize: '10px' }}>1</Avatar>
                        <TextSteps1>Investment details</TextSteps1>
                        <Avatar sx={{ backgroundColor: '#7E1B75', width: '20px', height: '20px', marginLeft: '1rem', fontFamily: 'Roboto', fontSize: '10px' }}>2</Avatar>
                        <TextSteps2>Payment</TextSteps2>
                    </ContainerSteps>
                    <ContainerTitle>
                        <TitleStartup>
                            Titulo del Projecto a invertir
                        </TitleStartup>
                        <ContainerAmount>
                            <InputDecorators />
                        </ContainerAmount>
                        <Divider sx={{ width: '300px' }} />
                        <ContainerPayment>
                            <TitlePayment>
                                PAYMENT METHODS
                            </TitlePayment>
                            <ContainerMastercard>
                                <MastercardPayment>
                                    <Radio
                                        checked={selectedValue === 'a'}
                                        onChange={handleChange}
                                        value="a"
                                        name="radio-buttons"
                                        inputProps={{ 'aria-label': 'A' }}
                                    />
                                    <IconPaymentCardPaypal /><LabelPaymentCard>Paypal</LabelPaymentCard><CreditCardIcon />
                                </MastercardPayment>
                            </ContainerMastercard>
                            <ContainerMastercard>
                                <MastercardPayment>
                                    <Radio
                                        checked={selectedValue === 'b'}
                                        onChange={handleChange}
                                        value="b"
                                        name="radio-buttons"
                                        inputProps={{ 'aria-label': 'B' }}
                                    />
                                    <IconPaymentCard /><LabelPaymentCard>Mastercard</LabelPaymentCard><CreditCardIcon />
                                </MastercardPayment>
                            </ContainerMastercard>
                        </ContainerPayment>
                    </ContainerTitle>
                    <ButtonPaymentContainer>
                        <ButtonPay />
                    </ButtonPaymentContainer>
                </ContainerForm>
            </MainContainer>
        </>


    )
}

export default memo(Payment)