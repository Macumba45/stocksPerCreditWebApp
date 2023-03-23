import {FC, memo, useState} from 'react';
import Autocomplete from '@mui/joy/Autocomplete';
import {Props} from './type';

const Search: FC = () => {
     const tags: Props[] = [
          {
               tag: 'Electronic',
          },
          {
               tag: 'Mobile',
          },
          {
               tag: 'Film',
          },
          {
               tag: 'Travel',
          },
          {
               tag: 'Business',
          },
          {
               tag: 'Audio',
          },
     ];

     const [selectedTags, setSelectedTags] = useState<Props[]>([]);

     return (
          <Autocomplete
               sx={{width: '270px', marginLeft: 0, zIndex: 99}}
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
