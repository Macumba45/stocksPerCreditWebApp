import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {FC, memo} from 'react';

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

export const StartDatePickers: FC = () => {
     const classes = useStyles();

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
               />
          </form>
     );
};

export const FinishDatePickers: FC = () => {
     const classes = useStyles();

     return (
          <form className={classes.container} noValidate>
               <TextField
                    id="date"
                    label="Finish Date"
                    type="date"
                    defaultValue="2023-03-24"
                    className={classes.textField}
                    InputLabelProps={{
                         shrink: true,
                    }}
               />
          </form>
     );
};

export default memo(StartDatePickers);

export const FinishDatePickersmemo = memo(FinishDatePickers);
