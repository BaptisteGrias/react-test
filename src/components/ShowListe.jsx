import React from 'react';

const ShowListe = () => {

    const listesData = [{id: 1, title: "SandMAn", show: 'Netflix '},
        {id: 2, title: "SEE", show: 'Apple TV+'},
        {id: 3, title: "The Lord of the Rings", show: 'Prime video'},
        {id: 4, title: "Game of Thrones", show: 'HBO'},
        {id: 5, title: "Black bird", show: 'Apple TV+'},
        {id: 6, title: "Peaky Blinders", show: 'Netflix'},
        {id: 7, title: "The Boys", show: 'Prime video'},
        {id: 8, title: "House of Dragon", show: 'HBO'},
        ]

    return (
        <div className='liste-container'>
            {listesData.map((info, index) =>{
                return (
                <div key={index}>
                    <h3 className='liste liste-title' >{info.title}</h3>
                    <h4 className='liste liste-show' >{info.show}</h4>

                </div>
                )  
            })}
        </div>
    );
};

export default ShowListe;