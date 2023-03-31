import {FC, memo} from 'react';
import {Props} from './type';
import {MainContainer, VideoContainer, VideoIframe} from './styles';

const VideoHeader: FC<Props> = ({src}) => {
     return (
          <MainContainer>
               <VideoContainer>
                    <VideoIframe
                         width="100%"
                         height="600px"
                         src={src}
                         title="YouTube video player"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></VideoIframe>
               </VideoContainer>
          </MainContainer>
     );
};

export default memo(VideoHeader);
