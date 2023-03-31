import { FC, memo, useState } from 'react';
import Autocomplete from '@mui/joy/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import type { Props } from './type';
import type { Tag } from '../../models/tag';

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

const Search: FC<Props> = ({ handleFiltersChange, options, value }) => {
     const classes = useStyles();
     const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
     const handleTagSelection = (tags: Tag[]) => {
          setSelectedTags(tags);
          handleFiltersChange(
               tags
               // ...otros filtros
          );
     };

     return (
          <Autocomplete
               className={classes.autocomplete}
               sx={{
                    width: '350px',
                    marginLeft: 0,
                    height: '80px',
                    zIndex: 99,
               }}
               multiple
               // id="tags-default"
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
