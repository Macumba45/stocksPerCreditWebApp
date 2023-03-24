import {FC, memo} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
     root: {
          width: 300,
     },
});

function valuetext(value: number) {
     return `${value}°C`;
}

export const DiscreteSlider: FC = () => {
     const classes = useStyles();

     return (
          <div className={classes.root}>
               <Typography id="discrete-slider-small-steps" gutterBottom>
                    Stocks Per Credit
               </Typography>
               <Slider
                    defaultValue={25}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-small-steps"
                    step={50}
                    marks
                    min={0}
                    max={1000}
                    valueLabelDisplay="auto"
               />
          </div>
     );
};

export default memo(DiscreteSlider);
