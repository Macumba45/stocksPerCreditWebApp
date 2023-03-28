import { memo, useState } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const logo = require('../../../components/NavBar/assets/logo.png')


const VideoThumbnail = ({ url }: any) => {
    const [thumbnailUrl] = useState(logo);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleThumbnailClick = () => {
        setIsPlaying(true);
    };

    return (
        <div>
            {thumbnailUrl && !isPlaying && (
                <>
                    <div style={{ position: 'relative', width: '270px', backgroundColor: 'black', display:'flex', justifyContent:'center' }}>
                        <img width={'170px'} src={thumbnailUrl} alt="Video thumbnail" onClick={handleThumbnailClick} />
                        <PlayArrowIcon style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, margin: 'auto', fontSize: '4em', color: 'white' }} />
                    </div>
                </>

            )}
            {isPlaying && (
                <iframe
                    src={'https://player.vimeo.com/video/800507584'}
                    width="270"
                />
            )}
        </div>
    );
};

export default memo(VideoThumbnail)