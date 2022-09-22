import React from 'react'
import "./Navbar.css"
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {
  return (
  <div className="Navbar">
    <span className="nav-logo">LEBURGUER</span>
    <div className="nav-items">
        <a href="/inicio">Inicio</a>
        <a href="/menu">Menu</a>
        <a href="/contacto">Contacto</a>
        <a href="/sobrenosotros">Sobre Nosotros</a>
    </div>
    <div>
        <CartWidget />
    </div>
  </div>
  );
};

export default Navbar
