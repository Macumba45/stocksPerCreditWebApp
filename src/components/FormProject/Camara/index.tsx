import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { hover } from '@testing-library/user-event/dist/hover';

export default function UploadButtons() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label" sx={{ background:'#7E1B75' }}>
      
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
    </Stack>
  );
}