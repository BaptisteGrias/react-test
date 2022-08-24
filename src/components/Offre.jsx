import React from 'react'


function Offre({title, text}) {
  return (
    <div className='container-offres'>
        <div className='offre'>{title}</div>
        <p>{text}</p>
    </div>
  )
}

export default Offre;