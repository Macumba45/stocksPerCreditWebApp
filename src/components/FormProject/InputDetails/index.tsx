import { FC, memo, useState } from "react";
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';


export const InputDecorators: FC = () => {
    const [currency, setCurrency] = useState('eur');
    return (
        <Input
            type="number"
            onKeyPress={(e) => {
                if (e.key === 'e') {
                    e.preventDefault();
                }
            }}
            style={{ borderColor: '#7E1B75' }}
            placeholder="Amount"
            endDecorator={
                <>
                    
                </>
            }
            sx={{
                width: 180
            }}
        />
    );
}


export default memo(InputDecorators)