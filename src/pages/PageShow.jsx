import React, {useState} from 'react';
import Navigation from '../components/Navigation';
import ShowButton from '../components/ShowButton';
import ShowListe from '../components/ShowListe';

const PageShow = () => {
    
    const [isShown, setIsShown] = useState(false)

    const toggleDisplay = () => {
        setIsShown(!isShown)
    }

    return (
        <div>
            <Navigation />
            <h1>Ma Listes</h1>
           <ShowButton handler={toggleDisplay}  text={!isShown ? "Show Liste" : "Hide Liste"}  />
              {isShown ? <ShowListe /> : null}
        </div>
    );
};

export default PageShow;
