import React from 'react';

const PageShowButton = ({handler, text, text2}) => {

    return (
        <div className='button-container'>
            <button className='buttonListe' onClick={handler}>{text}{text2}</button> 
        </div>
    );
};

export default PageShowButton;