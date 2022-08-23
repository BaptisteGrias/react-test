import React from 'react';
import Navigation from '../components/Navigation';
import Image from '../components/Image';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className='container'>
      <Navigation />
      <h1>Inkkube</h1>
      <p>Inkkube est une agence digitale qui aide et acompagne leurs clients à realiser le passage au digital de leur entreprise, de leur association ou bien d'une idée, d'un concept qu'il souhaite réaliser </p>
      <br />
      <Image />
      <p>Depuis plus de 10 ans nous accompagnons les start-ups, entreprises et institutions en France mais aussi a l'international.</p>
      <br />
      <p>
      Simple & funky, c’est notre approche de la communication, des concepts simples, percutants, qui ont du sens, mais toujours avec un brin de folie . C’est aussi notre état d’esprit, des rapports sains, honnêtes, directs et toujours dans la bonne humeur voire l’humour à 2 balles.
      </p>
      <br />
            <img src="./Ashlee.png" alt=""  className='profil-picture'/>
            <img src="./Kyle-SM.png" alt="" className='profil-picture'/>
            <img src="./Teresa.png" alt="" className='profil-picture'/>
            <img src="./Terry.png" alt="" className='profil-picture'/>
      <p>
      Se familiariser avec votre histoire, votre mission et vos valeurs, pour façonner ensemble votre projet qui vous ressemble.
      <br />
      Proposer une équipe de projet qualifiée, la plus en adéquation avec les idées et les attentes clients ou son univers, et donc au final une team adaptée au projet. (compétences variées, télétravail et personnes d’horizons différents).
      </p>
      <br />
      <p>Nous revendiquons des concepts beaux, simples et percutants. Découvrez plus bas une sélection de nos réalisations.</p>
      <br />
      <p>Communication agile, et réelle de bout en bout entre l’’équipe projet et les clients. On suit, on tient informé (l’avancement, les retards éventuels..), on est transparent sur ce qu’on réalise, avec des rencontres et discussions autour du projet.</p>
    </div>
  );
};

export default Home;