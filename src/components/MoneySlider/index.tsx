import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {FC, memo, useState} from 'react';
import {
     Input,
     InputContainer,
     MaxLabel,
     MinLabel,
     MoneyOutput,
     RangeSliderDiv,
} from './styles';

function valuetext(value: number) {
     return `${value}€`;
}

interface RangeProps {
     handleRangeChange: (range: {min: number; max: number}) => void;
}

const RangeSlider: FC<RangeProps> = ({handleRangeChange}) => {
     const [value, setValue] = useState<number[]>([1000, 5000]);

     const handleChange = (event: Event, newValue: number | number[]) => {
          if (Array.isArray(newValue)) {
               setValue(newValue);
          }
     };

     const handleSliderChangeCommitted = (
          event: any,
          newValue: number | number[]
     ) => {
          if (Array.isArray(newValue)) {
               handleRangeChange({min: newValue[0], max: newValue[1]});
          }
     };

     const handleInputChange = (
          event: React.ChangeEvent<HTMLInputElement>,
          index: number
     ) => {
          const newValue = parseInt(event.target.value, 10);
          const updatedValue = [...value];
          updatedValue[index] = newValue;
          setValue(updatedValue);
     };

     return (
          <Box sx={{width: 300}}>
               <RangeSliderDiv>
                    <Slider
                         sx={{
                              color: '#7E1B75',
                              '& .MuiSlider-thumb': {
                                   backgroundColor: '#7E1B75',
                                   '& .MuiSlider-track': {
                                        backgroundColor: '#7E1B75',
                                   },
                                   '& .MuiSlider-rail': {
                                        backgroundColor: '#7E1B75',
                                   },
                                   '& .MuiSlider-valueLabel': {
                                        color: 'white',
                                   },
                              },
                              marginBottom: '1rem',
                         }}
                         getAriaLabel={() => 'Money range'}
                         value={value}
                         onChange={handleChange}
                         onChangeCommitted={handleSliderChangeCommitted}
                         valueLabelDisplay="auto"
                         getAriaValueText={valuetext}
                         max={10000}
                    />
                    <InputContainer>
                         <MinLabel htmlFor="lower-input">Minimum:</MinLabel>
                         <Input
                              id="lower-input"
                              type="number"
                              value={value[0]}
                              onChange={(event) => handleInputChange(event, 0)}
                         />
                    </InputContainer>
                    <InputContainer>
                         <MaxLabel htmlFor="upper-input">Maximum:</MaxLabel>
                         <Input
                              id="upper-input"
                              type="number"
                              value={value[1]}
                              onChange={(event) => handleInputChange(event, 1)}
                         />
                    </InputContainer>
                    <MoneyOutput>
                         Total: {value[0]}€ / {value[1]}€.
                    </MoneyOutput>
               </RangeSliderDiv>
          </Box>
     );
};

export default memo(RangeSlider);
