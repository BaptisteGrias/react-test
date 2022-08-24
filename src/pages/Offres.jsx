import React from 'react';
import Navigation from '../components/Navigation';
import Offre from '../components/Offre';
import '../styles/Offres.css';

const Offres = () => {
    const offres = [
        {id: 1, title: "Création d'un Site vitrine", text: 'lorem ipsum '},
        {id: 2, title: "Création d'un Site Catalogue", text: 'lorem ipsum '},
        {id: 3, title: "Création d'un Site E-commerce", text: 'lorem ipsum '},
        {id: 4, title: "Création d'un Site MVP produit", text: 'lorem ipsum '},
    ];

    return (
        <div>
            <Navigation />
            <h1>Nos Offres</h1>
            <div className='container-table'>
                
            {offres.map((offre) => <Offre key={offre.id} title={offre.title} text={offre.text} /> )}
            

            </div>
        </div>
    );
};


export default Offres;