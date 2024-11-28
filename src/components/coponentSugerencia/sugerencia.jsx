import React from "react";
import '../styles/App.css'
import logo from '../img/logo.png'

const Sugerencias = () => {
  return (
    <div className="containerSug">
      <hr/>
      <img src={logo} alt="Logo" className="tuflogo" />
      <div className="tit">Sugerencias</div>
      <div className="texta">Déjanos tu comentario y nos pondremos en contacto contigo</div>

      <form className="form">
        <h2 className="form-title">Contáctanos</h2>
        <input
          type="text"
          className="input-field"
          placeholder="Ingrese su nombre"
        />
        <input
          type="email"
          className="input-field"
          placeholder="Ingrese su correo"
        />
        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </div>
  );
};

export default Sugerencias;