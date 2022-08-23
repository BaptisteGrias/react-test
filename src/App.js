import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Offres from './pages/Offres';
import Projet from './pages/Projet';
import Services from './pages/Services';
import Values from './pages/Values';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/offres" element={<Offres />} />
  <Route path="/projet" element={<Projet />} />
  <Route path="/services" element={<Services />} />
  <Route path="/values" element={<Values />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
</BrowserRouter>
  );
}

export default App;
