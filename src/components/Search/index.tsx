import {FC, memo, useState} from 'react';
import Autocomplete from '@mui/joy/Autocomplete';
import {makeStyles} from '@material-ui/core/styles';
import type {Props} from './type';
import type {Tag} from '../../models/tag';

// const tags: Tag[] = [
//      {
//           id: '30586561-a0dd-4ac5-9658-94e6831709ba',
//           name: 'EDUCACION',
//      },
//      {
//           id: '30586561-a0dd-4ac5-9658-94e6831709bc',
//           name: 'BANCA',
//      },
//      {
//           id: '1234',
//           name: 'Tecnología',
//      },
//      {
//           id: '1234',
//           name: 'Cine',
//      },
//      {
//           id: '1234',
//           name: 'Deportes',
//      },
//      {
//           id: '1234',
//           name: 'Videojuegos',
//      },
//      {
//           id: '1234',
//           name: 'Música',
//      },
//      {
//           id: '1234',
//           name: 'Salud',
//      },
//      {
//           id: '1234',
//           name: 'Diseño',
//      },
//      {
//           id: '1234',
//           name: 'Comida',
//      },
// ];

const useStyles = makeStyles({
     autocomplete: {
          width: '270px',
          marginLeft: 0,
          zIndex: 99,
          '& .MuiAutocomplete-option:hover': {
               backgroundColor: '#7E1B75',
               color: 'white',
               borderColor: '#7E1B75',
          },
     },
});

const Search: FC<Props> = ({handleFiltersChange, options}) => {
     const classes = useStyles();
     const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

     const handleTagSelection = (tags: Tag[]) => {
          setSelectedTags(tags);
          handleFiltersChange({
               selectedTags: tags,
               // ...otros filtros
          });
     };

     return (
          <Autocomplete
               className={classes.autocomplete}
               sx={{
                    width: '270px',
                    marginLeft: 0,
                    zIndex: 99,
               }}
               multiple
               id="tags-default"
               options={options}
               getOptionLabel={(option) => option.name}
               value={selectedTags}
               onChange={(_, newValue) => {
                    handleTagSelection(newValue);
               }}
          />
     );
};

export default memo(Search);
