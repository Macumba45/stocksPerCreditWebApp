import {FC, memo} from 'react';
import {
     MainContainer,
     VideoContainer,
     VideoIframe,
     VideoSource,
} from './styles';
import {Props} from './type';

const VideoHeader: FC<Props> = ({video}) => {
     const videoProject =
          'https://www.youtube.com/embed/FR0yfiN1dEo?controls=0';

     return (
          <MainContainer>
               <VideoContainer>
                    {/* <VideoSource
                    src={'https://www.youtube.com/watch?v=FR0yfiN1dEo'}

                /> */}
                    <VideoIframe
                         width="100%"
                         height="700px"
                         src={videoProject}
                         title="YouTube video player"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></VideoIframe>
               </VideoContainer>
          </MainContainer>
     );
};

export default memo(VideoHeader);
