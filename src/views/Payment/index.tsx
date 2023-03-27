import { Avatar, Divider } from "@mui/material";
import { FC, memo, useState } from "react";
import NavBar from "../../components/NavBar";
import { MainContainer, ContainerForm, ContainerSteps, TextSteps2, TextSteps1, ContainerTitle, TitleStartup, ContainerAmount, ContainerPayment, TitlePayment, MastercardPayment, ContainerMastercard, IconPaymentCard, LabelPaymentCard, IconPaymentCardPaypal, ButtonPaymentContainer } from "./styles";
import InputDecorators from '../../components/InvestInputDetails'
import Radio from '@mui/material/Radio';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ButtonPay from "../../components/ButtonPay";



const Payment: FC = () => {

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };


    return (
        <>
            <NavBar />
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