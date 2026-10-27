import React from 'react';

export function SeccionDado({ dado, lanzarDado, resultado }) {
  return (
    <div className="juego__seccion">
      <div className="juego__caja-dado">
        <div className="juego__display">{dado}</div>
        <button className="juego__boton" onClick={lanzarDado}>Lanzar Dado</button>
        <p className="juego__mensaje" style={{ color: resultado.color }}>
          {resultado.texto}
        </p>
      </div>
    </div>
  );
}