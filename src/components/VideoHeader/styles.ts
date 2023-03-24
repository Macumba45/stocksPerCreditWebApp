import styled from 'styled-components';

export const MainContainer = styled.div``;

export const VideoContainer = styled.div`
     width: 100%;
     /* height: 300px; */
     /* background-color: black; */
     margin-top: 3.5rem;
     @media screen and (min-width: 600px) {
          /* height: 600px; */
          margin-top: 4.2rem;
     }
`;
export const VideoIframe = styled.iframe`
     @media screen and (max-width: 600px) {
          height: 300px;
     }
`;

export const VideoSource = styled.source``;
