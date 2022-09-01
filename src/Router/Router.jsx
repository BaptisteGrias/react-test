import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Offres from '../pages/Offres';
import Projet from '../pages/Projet';
import Services from '../pages/Services';
import Values from '../pages/Values';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Posts from '../pages/Posts';
import PageShow from '../pages/PageShow';


const Roads = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/offres" element={<Offres />} />
            <Route path="/projet" element={<Projet />} />
            <Route path="/services" element={<Services />} />
            <Route path="/values" element={<Values />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/listes" element={<PageShow />} />
        </Routes>
    </BrowserRouter>
    );
};

export default Roads;