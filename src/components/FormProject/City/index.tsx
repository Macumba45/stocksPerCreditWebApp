import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function FreeSolo() {
     return (
          <Stack spacing={2} sx={{width: 300}}>
               <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={top100Films.map((option) => option.nombre)}
                    renderInput={(params) => (
                         <TextField
                              {...params}
                              label="Search input"
                              InputProps={{
                                   ...params.InputProps,
                                   type: 'search',
                              }}
                         />
                    )}
               />
          </Stack>
     );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
     {nombre: 'Tokio'},
     {nombre: 'Nueva York'},
     {nombre: 'Shanghái'},
     {nombre: 'Pekín'},
     {nombre: 'Mumbai'},
     {nombre: 'Estambul'},
     {nombre: 'Lahore'},
     {nombre: 'Bangkok'},
     {nombre: 'Moscú'},
     {nombre: 'Guangzhou'},
     {nombre: 'Shenzhen'},
     {nombre: 'São Paulo'},
     {nombre: 'México D.F.'},
     {nombre: 'Dhaka'},
     {nombre: 'El Cairo'},
     {nombre: 'Osaka'},
     {nombre: 'Nueva Delhi'},
     {nombre: 'Beijing'},
     {nombre: 'Manila'},
     {nombre: 'Seúl'},
     {nombre: 'Yakarta'},
     {nombre: 'Los Ángeles'},
     {nombre: 'Buenos Aires'},
     {nombre: 'Teherán'},
     {nombre: 'Chengdu'},
     {nombre: 'Bangalore'},
     {nombre: 'Chicago'},
     {nombre: 'Londres'},
     {nombre: 'Tianjin'},
     {nombre: 'Lima'},
];
