import React, { useState } from 'react';

const InputVideo = ({setUrl, url}) => {
    const [inputUrl, setInputUrl] = useState('')


    const playUrlHandler = () => {
        setUrl(inputUrl);
    }

    const changeHandler = (e) => {
        setInputUrl(e.target.value);
    }

    return (
        <div className='input-container'>
            <input onChange={(e) => changeHandler(e)} type="text" name="URLVideo" placeholder='URL Video' value={inputUrl}/>
            <button onClick={() => playUrlHandler(url)} className="play-button"></button>
        </div>
    );
};

export default InputVideo;