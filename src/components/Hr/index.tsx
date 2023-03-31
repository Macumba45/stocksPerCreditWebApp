import {Divider} from '@mui/material';
import Chip from '@mui/material/Chip';
import {FC, memo} from 'react';
import {Props} from './type';

const Hr: FC<Props> = ({label}) => {
     return (
          <Divider
               sx={{
                    width: '350px',
                    margin: '0 auto',
                    marginBottom: '8rem',
                    marginTop: '8rem',
               }}
          >
               <Chip
                    sx={{backgroundColor: '#7E1B75', color: 'white'}}
                    label={label}
               />
          </Divider>
     );
};

export default memo(Hr);
