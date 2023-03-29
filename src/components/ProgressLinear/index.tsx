import LinearProgress, {
     LinearProgressProps,
} from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {FC, memo} from 'react';
import {DateContainer, SpanCollected, SpanCollectedMoney} from './styles';

interface Props extends LinearProgressProps {
     max: number;
     min: number;
     value: number;
     current: number;
}

interface LinearWithValueLabelProps {
     max: number;
     min: number;
     current: number;
}

function LinearProgressWithLabel(props: Props) {
     const {value, min, max, ...otherProps} = props;
     const percentage = value * 100;
     return (
          <Box sx={{display: 'flex', alignItems: 'center'}}>
               <Box sx={{width: '100%', mr: 1}}>
                    <LinearProgress
                         variant="determinate"
                         value={percentage}
                         sx={{backgroundColor: 'black', color: 'black'}}
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

const LinearWithValueLabel: FC<LinearWithValueLabelProps> = ({
     min,
     max,
     current,
}) => {
     const difference = max - current;
     const value = difference / max;
     const remaining = 1 - value; // calcula el porcentaje restante

     return (
          <Box
               sx={{
                    width: '100%',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '12px',
               }}
          >
               <SpanCollected>
                    <DateContainer>Collected:</DateContainer>
               </SpanCollected>
               <SpanCollectedMoney>
                    <br />
                    {current + '€'} of {max + '€'}
               </SpanCollectedMoney>
               <LinearProgressWithLabel
                    sx={{
                         height: '10px',
                         marginTop: '10px',
                         backgroundColor: '#7e1b7637',
                         '& .MuiLinearProgress-bar': {
                              backgroundColor: '#7E1B75',
                         },
                    }}
                    color="inherit"
                    value={remaining}
                    current={current}
                    min={min}
                    max={max}
               />
          </Box>
     );
};

export default memo(LinearWithValueLabel);
