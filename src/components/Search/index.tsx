import { FC, memo, useState } from 'react';
import Autocomplete from '@mui/joy/Autocomplete';
import { Props } from './type';
import { makeStyles } from '@material-ui/core/styles';

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

interface SearchProps {
     handleFiltersChange: (filters: any) => void;
}

const Search: FC<SearchProps> = ({ handleFiltersChange }) => {
     const classes = useStyles();
     const [selectedTags, setSelectedTags] = useState<Props[]>([]);

     const handleTagSelection = (tags: Props[]) => {
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
               options={tags}
               getOptionLabel={(option) => option.tag}
               value={selectedTags}
               onChange={(event, newValue) => {
                    handleTagSelection(newValue);
               }}
          />

     );
};

export default memo(Search);
