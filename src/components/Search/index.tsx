import {FC, memo, useState} from 'react';
import Autocomplete from '@mui/joy/Autocomplete';
import {Props} from './type';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
     autocomplete: {
       width: '270px',
       marginLeft: 0,
       zIndex: 99,
       '& .MuiAutocomplete-option:hover': {
         backgroundColor: '#7E1B75',
         color: 'white',
         borderColor: '#7E1B75'
       }
     },
   });

const Search: FC = () => {
     const classes = useStyles();
     

     const tags: Props[] = [
          {
               tag: 'Arte',
          },
          {
               tag: 'Ilustraciones',
          },
          {
               tag: 'Tecnología',
          },
          {
               tag: 'Cine',
          },
          {
               tag: 'Deportes',
          },
          {
               tag: 'Videojuegos',
          },
          {
               tag: 'Música',
          },
          {
               tag: 'Salud',
          },
          {
               tag: 'Diseño',
          },
          {
               tag: 'Comida',
          },
     ];

     const [selectedTags, setSelectedTags] = useState<Props[]>([]);

     return (
          <Autocomplete
          className={classes.autocomplete}

               sx={{
                    width: '270px',
                    marginLeft: 0,
                    zIndex: 99,
                    // '& .MuiAutocomplete-option:hover': {
                    //      backgroundColor: '#7E1B75 !important', // reemplazar con tu color de fondo deseado
                    //      color: 'white',
                    //      ":focus":'#7E1B75' // reemplazar con tu color de texto deseado
                    // },
                    
               }}
               multiple
               id="tags-default"
               options={tags}
               getOptionLabel={(option) => option.tag}
               value={selectedTags}
               onChange={(event, newValue) => {
                    setSelectedTags(newValue);
               }}
          />
     );
};

export default memo(Search);
