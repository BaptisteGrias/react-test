import React, {useState} from 'react';
import Navigation from '../components/Navigation';
import PageShowButton from '../components/PageShowButton';
import PageShowListe from '../components/PageShowListe';

const PageShow = () => {
    

        const [isShown, setIsShown] = useState(false)

        const showListe = () => {
            setIsShown(true)
            
        }

        const hideListe = () => {
            setIsShown(!true)
        }

    return (
        <div>
            <Navigation />
            <h1>Ma Listes</h1>
           <PageShowButton handler={showListe}  text="Show List" />
           <PageShowButton handler={hideListe}  text="Hide List" />
              {isShown ? <PageShowListe /> : null}
        </div>
    );
};

export default PageShow;
