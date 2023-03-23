import LinearProgress, {
     LinearProgressProps,
} from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {FC, memo, useEffect, useState} from 'react';

interface Props extends LinearProgressProps {
     max: number;
     min: number;
     value: number;
}

interface LinearWithValueLabelProps {
     min: number;
     max: number;
}

function LinearProgressWithLabel(props: Props) {
     const {value, min, max, ...otherProps} = props;
     const percentage = ((value - min) / (max - min)) * 100;
     return (
          <Box sx={{display: 'flex', alignItems: 'center'}}>
               <Box sx={{width: '100%', mr: 1}}>
                    <LinearProgress
                         variant="determinate"
                         value={percentage}
                         {...otherProps}
                    />
               </Box>
               <Box sx={{minWidth: 35}}>
                    <Typography
                         variant="body2"
                         color="text.secondary"
                    >{`${Math.round(percentage)}%`}</Typography>
               </Box>
          </Box>
     );
}

const LinearWithValueLabel: FC<LinearWithValueLabelProps> = ({min, max}) => {
     return (
          <Box sx={{width: '100%'}}>
               <LinearProgressWithLabel sx={{height: '10px'}} value={30} min={min} max={max} />
          </Box>
     );
};

export default memo(LinearWithValueLabel);
