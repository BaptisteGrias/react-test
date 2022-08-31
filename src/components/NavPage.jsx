import React, {useState} from 'react';
import '../styles/Button.css'
import CompteurClick from './CompteurClick';
import NavButton from './NavButton';
import NavIndexDisplay from './NavIndexDisplay';

const NavPage = () => {
   
    const [index, setIndex] = useState(0)
    const [click, setClick] =  useState(0)
   
    const incrHandler = (index) =>{
        setIndex(index + 1)
        setClick(click + 1)
    }
    const decrHandler = (index) =>{
        setIndex(index - 1)
        setClick(click + 1)
    }

    return (
        <div className='buttonPage'>
            <CompteurClick handler={incrHandler} nbrClick={click}  />
           <NavButton handler={decrHandler} index={index} text="précédent"/>
           <NavIndexDisplay index={index}/>
           <NavButton handler={incrHandler} index={index} text="suivant"/>
        </div>
    );
};

export default NavPage;


