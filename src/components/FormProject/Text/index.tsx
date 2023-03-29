import * as React from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';

export default function MinHeightTextarea() {
     return (
          <TextareaAutosize
               aria-label="minimum height"
               minRows={3}
               placeholder="Minimum 3 rows"
               style={{
                    minWidth: 300,
                    maxWidth: 300,
                    minHeight: '3rem',
                    maxHeight: '3rem',
               }}
          />
     );
}
