import {Modal} from '@mui/material';
import {memo, FC, useState} from 'react';
import {IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {Props} from './types';
import {
     ExpandedPicturesContainer,
     MainContainer,
     PicturesContainer,
} from './styles';

const StandardImageList: FC<Props> = ({image}) => {
     const [expanded, setExpanded] = useState(false);

     const toggleExpanded = () => {
          setExpanded(!expanded);
     };

     return (
          <MainContainer>
               <PicturesContainer onClick={toggleExpanded} src={image} />
               <Modal
                    open={expanded}
                    onClose={toggleExpanded}
                    sx={{backgroundColor: 'black'}}
               >
                    <ExpandedPicturesContainer>
                         <IconButton
                              sx={{
                                   position: 'absolute',
                                   top: 8,
                                   right: 0,
                                   color: '#fff',
                              }}
                              onClick={toggleExpanded}
                         >
                              <CloseIcon />
                         </IconButton>
                         <img
                              style={{
                                   width: '600px',
                                   display: 'flex',
                                   margin: '10rem auto',
                                   alignItems: 'center',
                              }}
                              src={image}
                              alt=""
                         />
                    </ExpandedPicturesContainer>
               </Modal>
          </MainContainer>
     );
};

export default memo(StandardImageList);
