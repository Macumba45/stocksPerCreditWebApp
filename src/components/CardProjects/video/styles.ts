import styled from 'styled-components';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export const StyledPlayArrowIcon = styled(PlayArrowIcon)`
     position: absolute;
     top: 0;
     left: 0;
     bottom: 0;
     right: 0;
     margin: auto;
     color: white;
     cursor: pointer;
     transition: transform 1.2;
     font-size: 4em;

     &:hover {
          transform: scale(1.2);
     }
`;
