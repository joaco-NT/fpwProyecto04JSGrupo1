import React from 'react';

export function SeccionFormulario({ 
  nombre, 
  apellido, 
  edad, 
  error, 
  handleNombre, 
  handleApellido, 
  handleEdad 
}) {
  return (
    <div className="juego__seccion">
      {/* Contenedor principal del formulario */}
      <div className="juego__caja">
        <h3 className="juego__subtitulo">Datos del Jugador</h3>
        
        {/* Grupo de entrada para el Nombre */}
        <div className="juego__grupo-input">
          <label className="juego__label" htmlFor="nombre">Nombre</label>
          <input 
            id="nombre"
            className="juego__input"
            type="text" 
            placeholder="Tu nombre" 
            value={nombre} 
            onChange={handleNombre} 
          />
        </div>

        {/* Grupo de entrada para el Apellido */}
        <div className="juego__grupo-input">
          <label className="juego__label" htmlFor="apellido">Apellido</label>
          <input 
            id="apellido"
            className="juego__input"
            type="text" 
            placeholder="Tu apellido" 
            value={apellido} 
            onChange={handleApellido} 
          />
        </div>

        {/* Grupo de entrada para la Edad */}
        <div className="juego__grupo-input">
          <label className="juego__label" htmlFor="edad">Edad</label>
          <input 
            id="edad"
            className="juego__input"
            type="text"
            inputMode="numeric"
            placeholder="Tu edad" 
            value={edad} 
            onChange={handleEdad} 
          />
        </div>

        {/* Mensaje de error condicional */}
        {error && <p className="juego__error">{error}</p>}
      </div>

      {/* Tarjeta de visualización en tiempo real de los datos ingresados */}
      {(nombre || apellido || edad) && (
        <div className="juego__tarjeta">
          <p><strong>Jugador:</strong> {nombre} {apellido}</p>
          <p><strong>Edad:</strong> {edad ? `${edad} años` : ''}</p>
        </div>
      )}
    </div>
  );
}