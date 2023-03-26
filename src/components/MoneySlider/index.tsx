// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';
// import { useState } from 'react';

// function valuetext(value: number) {
//   return `${value}€`;
// }

// export default function RangeSlider() {
//   const [value, setValue] = useState<number[]>([0, 5000]);

//   const handleChange = (event: Event, newValue: number | number[]) => {
//     setValue(newValue as number[]);
//   };

//   const handleSliderChangeCommitted = (event: any, newValue: number | number[]) => {
//    };

//   return (
//     <Box sx={{ width: 300 }}>
//      <div>
//       <Slider
//         getAriaLabel={() => 'Money range'}
//         value={value}
//         onChange={handleChange}
//         onChangeCommitted={handleSliderChangeCommitted}
//         valueLabelDisplay="auto"
//         getAriaValueText={valuetext}
//         max={10000}
//       />
//         <p>Precio: {value[0]}€ / {value[1]}€.</p>
//         </div>
//     </Box>
//   );
// }

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import { InputContainer, MaxLabel, MinLabel, MoneyOutput, RangeSliderDiv } from './styles';

function valuetext(value: number) {
  return `${value}€`;
}

export default function RangeSlider() {
  const [value, setValue] = useState<number[]>([0, 5000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleSliderChangeCommitted = (event: any, newValue: number | number[]) => {
   };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = parseInt(event.target.value, 10);
    const updatedValue = [...value];
    updatedValue[index] = newValue;
    setValue(updatedValue);
  };

  return (
    <Box sx={{ width: 300 }}>
     <RangeSliderDiv>
      <Slider
        getAriaLabel={() => 'Money range'}
        value={value}
        onChange={handleChange}
        onChangeCommitted={handleSliderChangeCommitted}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max={10000}
      />
      <InputContainer>
        <MinLabel htmlFor="lower-input">Precio mínimo:</MinLabel>
        <input
          id="lower-input"
          type="number"
          value={value[0]}
          onChange={(event) => handleInputChange(event, 0)}
        />
      </InputContainer>
      <InputContainer>
        <MaxLabel htmlFor="upper-input">Precio máximo:</MaxLabel>
        <input
          id="upper-input"
          type="number"
          value={value[1]}
          onChange={(event) => handleInputChange(event, 1)}
        />
      </InputContainer>
      <MoneyOutput>Precio: {value[0]}€ / {value[1]}€.</MoneyOutput>
      </RangeSliderDiv>
    </Box>
  );
}


