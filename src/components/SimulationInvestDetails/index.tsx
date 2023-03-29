import {FC, memo, useState} from 'react';
import {TextField, Select, MenuItem, Button} from '@material-ui/core';
import {
     CurrencySimulationContainer,
     InputLabelStyled,
     LabelSimulation,
     LabelSimulationContainer,
     MainContainer,
     MainContainerButtonSimulation,
     MainContainerSimulation,
     SpanTotal,
     TitleSimulation,
     TitleSimulationContainer,
     TotalActions,
} from './styles';

const CalculadoraAcciones: FC = () => {
     const [cantidadInversion, setCantidadInversion] = useState(0);
     const [cantidadAcciones, setCantidadAcciones] = useState(0);
     const [showDiv, setShowDiv] = useState(false);
     const [moneda, setMoneda] = useState('EUR'); // Moneda por defecto

     const opcionesMonedas = [
          {codigo: 'EUR', nombre: '€'},
          {codigo: 'GBP', nombre: '£'},
          {codigo: 'USD', nombre: '$'},
     ];

     const calcularAcciones = (event: any) => {
          const precioAccion = 10; // Aquí colocas el precio de la acción
          const calculo = event.target.value / precioAccion;
          setCantidadAcciones(calculo);
          setCantidadInversion(event.target.value);
     };

     const handleMonedaChange = (event: any) => {
          setMoneda(event.target.value);
     };

     const toggleDiv = () => {
          setShowDiv(!showDiv);
     };

     return (
          <MainContainerButtonSimulation>
               <Button variant="outlined" onClick={toggleDiv}>
                    {showDiv ? 'Hide simulation' : 'Show simulation'}
               </Button>
               {showDiv && (
                    <MainContainer>
                         <TitleSimulationContainer>
                              <TitleSimulation>
                                   Simulate your invest
                              </TitleSimulation>
                         </TitleSimulationContainer>

                         <MainContainerSimulation>
                              <CurrencySimulationContainer>
                                   <InputLabelStyled style={{color: 'black'}}>
                                        Currency:
                                   </InputLabelStyled>
                                   <Select
                                        style={{marginLeft: '20px'}}
                                        value={moneda}
                                        onChange={handleMonedaChange}
                                   >
                                        {opcionesMonedas.map((moneda) => (
                                             <MenuItem
                                                  key={moneda.codigo}
                                                  value={moneda.codigo}
                                             >
                                                  {moneda.nombre}
                                             </MenuItem>
                                        ))}
                                   </Select>
                              </CurrencySimulationContainer>
                              <LabelSimulationContainer>
                                   <LabelSimulation htmlFor="cantidad-inversion">
                                        Amount Invest:
                                   </LabelSimulation>
                                   <TextField
                                        type="number"
                                        id="cantidad-inversion"
                                        name="cantidad-inversion"
                                        value={cantidadInversion}
                                        onChange={calcularAcciones}
                                        style={{
                                             marginLeft: '1rem',
                                             width: '50px',
                                        }}
                                   />
                                   <div
                                        style={{
                                             fontFamily: 'Roboto',
                                             color: '#7E1B75',
                                        }}
                                   >
                                        {moneda}
                                   </div>
                              </LabelSimulationContainer>
                         </MainContainerSimulation>
                         <TotalActions>
                              <LabelSimulation htmlFor="cantidad-acciones">
                                   Total Stocks:
                              </LabelSimulation>
                              <SpanTotal id="cantidad-acciones">
                                   {cantidadAcciones} Stocks x{' '}
                                   {cantidadInversion} {moneda}
                              </SpanTotal>
                         </TotalActions>
                    </MainContainer>
               )}
          </MainContainerButtonSimulation>
     );
};

export default memo(CalculadoraAcciones);
