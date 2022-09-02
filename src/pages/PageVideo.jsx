import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import Navigation from '../components/Navigation';
import InputVideo from '../components/InputVideo';
import UrlVideo from '../components/UrlVideo';

const PageVideo = () => {

    const [url, setUrl] = useState("");
    

    return (
        <div>
            <Navigation />
            <h1>Video</h1>
            <InputVideo setUrl={setUrl} url={url}/>
            <div className='player-wrapper'>
             <ReactPlayer 
            className='react-player'
            url={url}
            playing={true} 
            />
            </div>
            <UrlVideo url={url}/>
        </div>
    );
};

export default PageVideo;