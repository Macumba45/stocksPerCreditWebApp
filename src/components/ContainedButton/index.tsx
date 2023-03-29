import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {FC, memo} from 'react';
import {Props} from './types';

const ContainedButton: FC<Props> = ({onClick}) => {
     const buttonStyle = {
          backgroundColor: '#7E1B75',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '5px',
          padding: '10px 20px',
          boxShadow: 'none',
          margin: 'auto',
     };

     return (
          <Stack direction="column" spacing={2}>
               <Button
                    onClick={onClick}
                    variant="contained"
                    style={buttonStyle}
               >
                    Apply Filters
               </Button>
          </Stack>
     );
};

export default memo(ContainedButton);
