import styled from 'styled-components';

export const MainContainer = styled.div`
     width: 700px;
     /* margin-left: 2rem; */
     @media screen and (max-width: 600px) {
          width: 100%;
     }
`;

export const VideoContainer = styled.div`
     width: 100%;
     /* height: 300px; */
     /* background-color: black; */
     margin-left: 0rem;
     margin-top: 3.5rem;
     @media screen and (min-width: 600px) {
          /* height: 600px; */
          margin-top: 6rem;
          width: 100%;
          display: flex;
          margin-left: 1rem;

     }
`;
export const VideoIframe = styled.iframe`
     height: 600px;
     border-bottom-right-radius:5px;
     border-bottom-left-radius:5px;
     @media screen and (max-width: 600px) {
          height: 300px;
     }
`;
