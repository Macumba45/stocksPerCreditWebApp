import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

function valuetext(value: number) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const [value, setValue] = useState<number[]>([0, 5000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleSliderChangeCommitted = (event: any, newValue: number | number[]) => {
   };

  return (
    <Box sx={{ width: 300 }}>
     <div>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        onChangeCommitted={handleSliderChangeCommitted}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max={10000}
      />
        <p>Precio: {value[0]}€ / {value[1]}€.</p>
        </div>
    </Box>
  );
}
