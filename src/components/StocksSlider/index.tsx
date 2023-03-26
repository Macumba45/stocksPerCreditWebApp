import {FC, memo, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value: number) {
  return `${value}€`;
}

export const DiscreteSlider: FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState<number>(25);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     const newValue = parseFloat(event.target.value);
     if (!isNaN(newValue)) {
       setValue(newValue);
     }
   };

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Stocks Per Credit
      </Typography>
      <Slider
        defaultValue={value}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue as number);
        }}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={0.1}
        marks
        min={0}
        max={10}
        valueLabelDisplay="auto"
      />
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default memo(DiscreteSlider);
