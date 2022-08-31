import React from 'react';

const NavButton = ({text, handler, index, nbrClick}) => {
   
    return (
        <div>
            <button className='Button' onClick={() => handler(index, nbrClick)}>{text}</button>
        </div>
    );
};

export default NavButton;

