import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {FC} from 'react';

const useStyles = makeStyles((theme: Theme) =>
     createStyles({
          container: {
               display: 'flex',
               flexWrap: 'wrap',
          },
          textField: {
               marginLeft: theme.spacing(1),
               marginRight: theme.spacing(1),
               width: 200,
          },
     })
);

interface DatePickersProps {
     handleDateChange: (dates: any) => void;
}

const StartDatePickers: FC<DatePickersProps> = ({handleDateChange}) => {
     const classes = useStyles();

     const handleStartDateChange = (
          event: React.ChangeEvent<HTMLInputElement>
     ) => {
          handleDateChange({startDate: event.target.value});
     };
     return (
          <form className={classes.container} noValidate>
               <TextField
                    id="date"
                    label="Start Date"
                    type="date"
                    defaultValue="2023-03-24"
                    className={classes.textField}
                    InputLabelProps={{
                         shrink: true,
                    }}
                    onChange={handleStartDateChange}
               />
          </form>
     );
};

const FinishDatePickers: FC<DatePickersProps> = ({handleDateChange}) => {
     const classes = useStyles();
     const handleFinishDateChange = (
          event: React.ChangeEvent<HTMLInputElement>
     ) => {
          handleDateChange({finishDate: event.target.value});
     };

     return (
          <form className={classes.container} noValidate>
               <TextField
                    id="date"
                    label="Return of investment"
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                         shrink: true,
                    }}
                    onChange={handleFinishDateChange}
               />
          </form>
     );
};

export {StartDatePickers, FinishDatePickers};
