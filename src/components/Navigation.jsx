import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/" className="nav">
                    <li>Inkkubate</li>
                </NavLink>
                <NavLink to="/offres" className="nav">
                    <li>Offres</li>
                </NavLink>
                <NavLink to="/projet" className="nav">
                    <li>Projet</li>
                </NavLink>
                <NavLink to="/services" className="nav">
                    <li>Services</li>
                </NavLink>
                <NavLink to="/values" className="nav">
                    <li>Valeurs</li>
                </NavLink>
                <NavLink to="/posts" className="nav">
                    <li>Posts</li>
                </NavLink>
                <NavLink to="/contact" className="nav">
                    <li>Contact</li>
                </NavLink>
                <NavLink to="/about" className="nav">
                    <li>A propos de nous</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;