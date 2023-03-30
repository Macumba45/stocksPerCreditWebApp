import {FC, memo, useCallback, useState} from 'react';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

interface Props {
     value?: number;
     onChange: (value: number) => void;
}

const InputDecorators: FC<Props> = ({value = 10, onChange}) => {
     const [currency, setCurrency] = useState('eur');

     const handleInvest = useCallback(
          (newValue: any) => {
               onChange(newValue);
          },
          [onChange]
     );

     return (
          <Input
               value={value}
               onChange={(e) => handleInvest(e.target.value)}
               type="number"
               onKeyPress={(e) => {
                    if (e.key === 'e') {
                         e.preventDefault();
                    }
               }}
               style={{borderColor: '#7E1B75'}}
               placeholder="Amount"
               startDecorator={{dollar: '$', pound: '£', eur: '€'}[currency]}
               endDecorator={
                    <>
                         <Divider orientation="vertical" />
                         <Select
                              variant="plain"
                              value={currency}
                              onChange={(_, value) => setCurrency(value!)}
                              // sx={{
                              //     mr: -1.5,
                              //     '&:hover': { bgcolor: 'transparent' },
                              //     '&:focus-within': { borderColor: '#7E1B75' },
                              // }}
                         >
                              <Option sx={{with: '10px'}} value="dollar">
                                   $
                              </Option>
                              <Option value="pound">£</Option>
                              <Option value="eur">€</Option>
                         </Select>
                    </>
               }
               sx={{
                    width: 200,
               }}
          />
     );
};

export default memo(InputDecorators);
