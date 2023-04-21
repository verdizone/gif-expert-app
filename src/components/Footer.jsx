import React from "react";
import logo from '../assets/linkedIn_logo.png'

const Footer = () => {
  const fecha = new Date().getFullYear();
  return (
    <footer>
      <div className="foot1">
        <div>
          <h3>Autor:</h3>
          <p>Jeroham Miranda</p>
          <a href="/">
            <img 
              className="imagen-link" 
              src={logo} alt="linkedIn_logo.png" />

          </a>
        </div>

        <div>
          <h3>Conocimientos aplicados:</h3>
          <p>React con Hooks</p>
          <p>Hooks personalizados</p>
          <p>Vite con Javascript</p>
          <p>CSS</p>
          <p>Maquetado con HTML</p>
          <p>Fetch API</p>
        </div>

        <div>
          <h3>Agradecimientos especiales:</h3>
          <p>Fernando Herrera</p>
          <p>Luis Antonio Aguilar Suárez</p>
        </div>
      </div>
      
      <div className="foot2">
        <h3>Verdizone - Todos los derechos resevados &copy; {fecha}</h3>
      </div>
    </footer>
  );
};

export default Footer;
