import { useState } from 'react';

// ==========================================
// 1. Responsabilidad única: Validar que el texto contenga únicamente letras y espacios.
// ==========================================
const esSoloLetras = (texto) => {
  return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(texto);
};

// ==========================================
// 2. Responsabilidad única: Validar que la edad sea un número válido y menor o igual a 120.
// ==========================================
const esSoloNumerosValidos = (texto) => {
  const soloDigitos = texto.replace(/\D/g, '');
  return soloDigitos === '' || Number(soloDigitos) <= 120;
};

// ==========================================
// 3. Responsabilidad única: Determinar el mensaje y el color según el número que salga en el dado.
// ==========================================
const obtenerResultadoDado = (numero, nombre) => {
  switch (numero) {
    case 1:
      return { 
        texto: `¡Qué mala suerte ${nombre}, sacaste un 1! Perdiste. ❌`, 
        color: '#ef4444' 
      };
    case 2:
    case 3:
    case 4:
    case 5:
      return { 
        texto: `¡Casi ${nombre}, sacaste un ${numero}! Resultado regular. ⚠️`, 
        color: '#eab308' 
      };
    case 6:
      return { 
        texto: `¡Impresionante ${nombre}, sacaste un 6! ¡Ganaste! 🎉`, 
        color: '#22c55e' 
      };
    default:
      return { texto: 'Sigue intentando', color: '#eab308' };
  }
};

// ==========================================
// 4. Responsabilidad única: Administrar los estados globales y coordinar las acciones del juego.
// ==========================================
export function usarJuegoService() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [dado, setDado] = useState('🎲');
  const [error, setError] = useState('');
  const [resultado, setResultado] = useState({ texto: '¡Listo para jugar!', color: '#ffd166' });

  // Responsabilidad única: Manejar el cambio y validación del input Nombre
  const handleNombre = (e) => {
    const valor = e.target.value;
    if (esSoloLetras(valor)) {
      setNombre(valor);
      if (error) setError('');
    }
  };

  // Responsabilidad única: Manejar el cambio y validación del input Apellido
  const handleApellido = (e) => {
    const valor = e.target.value;
    if (esSoloLetras(valor)) {
      setApellido(valor);
      if (error) setError('');
    }
  };

  // Responsabilidad única: Manejar el cambio y validación del input Edad
  const handleEdad = (e) => {
    const valor = e.target.value;
    if (esSoloNumerosValidos(valor)) {
      setEdad(valor.replace(/\D/g, ''));
      if (error) setError('');
    }
  };

  // Responsabilidad única: Ejecutar la lógica principal de tirar el dado y validar campos vacíos
  const lanzarDado = () => {
    if (!nombre.trim() || !apellido.trim() || !edad.trim()) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    setError('');
    const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
    setDado(numeroAleatorio);

    const nuevoResultado = obtenerResultadoDado(numeroAleatorio, nombre);
    setResultado(nuevoResultado);
  };

  return {
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
  };
}