import React from 'react';
import { usarJuegoService } from '../services/juegoService';
import { SeccionFormulario } from '../components/SeccionFormulario';
import { SeccionDado } from '../components/SeccionDado';
import '../css/estilos.css';

export function JuegoPagina() {
  const {
    nombre,
    apellido,
    edad,
    dado,
    error,
    resultado,
    handleNombre,
    handleApellido,
    handleEdad,
    lanzarDado
  } = usarJuegoService();

  return (
    <div className="juego">
      <h1 className="juego__titulo">El Dado de la Suerte 🎲</h1>

      <div className="juego__contenedor-grid">
        
        <SeccionFormulario 
          nombre={nombre} 
          apellido={apellido} 
          edad={edad} 
          error={error}
          handleNombre={handleNombre}
          handleApellido={handleApellido}
          handleEdad={handleEdad}
        />

        <SeccionDado 
          dado={dado}
          lanzarDado={lanzarDado}
          resultado={resultado}
        />
      </div>
    </div>
  );
}