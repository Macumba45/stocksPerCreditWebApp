import {FC, memo} from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme: Theme) =>
     createStyles({
          root: {
               width: 300,
          },
          margin: {
               height: theme.spacing(3),
          },
     })
);

const marks = [
     {
          value: 0,
          label: '0€',
     },
     {
          value: 20,
          label: '100€',
     },
     {
          value: 37,
          label: '300€',
     },
     {
          value: 100,
          label: '1000€',
     },
];

function valuetext(value: number) {
     return `${value}€`;
}

export const MaxDiscreteSlider: FC = () => {
     const classes = useStyles();

     return (
          <div className={classes.root}>
               <Typography id="discrete-slider-custom" gutterBottom>
                    Maximum Investement
               </Typography>
               <Slider
                    defaultValue={100}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-custom"
                    step={1}
                    valueLabelDisplay="auto"
                    marks={marks}
               />
          </div>
     );
};

export const MinDiscreteSlider: FC = () => {
     const classes = useStyles();

     return (
          <div className={classes.root}>
               <Typography id="discrete-slider-custom" gutterBottom>
                    Minimun Investement
               </Typography>
               <Slider
                    defaultValue={100}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-custom"
                    step={1}
                    valueLabelDisplay="auto"
                    marks={marks}
               />
          </div>
     );
};
export default memo(MinDiscreteSlider);
export const MaxDiscreteSliderMemo = memo(MaxDiscreteSlider);
