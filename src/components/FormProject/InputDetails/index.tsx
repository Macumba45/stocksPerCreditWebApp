import { FC, memo, useState } from "react";
import Input from '@mui/joy/Input';



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