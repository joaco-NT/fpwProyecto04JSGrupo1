# 📋 Reporte de Progreso General - Proyecto 04

## 👤 Reporte de Progreso - Miembro 1

### 📒 Datos Generales
- **Estudiante:** Torrez Joaquin
- **Ejercicio Asignado:**
  - **Ejercicio 01:** Simulación de un dado de 6 caras con interfaz visual (`SeccionDado.jsx`), botón de acción y mensajes dinámicos según el número obtenido mediante `Math.floor(Math.random() * 6) + 1`.
  - **Ejercicio 02:** Formulario dinámico para registrar datos del jugador (`SeccionFormulario.jsx` con nombre, apellido y edad) y su visualización en tiempo real en una tarjeta de resumen.

---

## 🧩 Capa de Lógica y Estado (`juegoService.js`)

Se centralizó toda la lógica del juego y el manejo de estados en un servicio personalizado (usarJuegoService), separando por completo el comportamiento de la interfaz visual.

- **`useState` (Gestión de Estados):**
  - **Función:** Permite almacenar y actualizar de forma reactiva los valores del juego (`nombre`, `apellido`, `edad`, `dado`, `error`, `resultado`).
- **Validaciones de Entrada:**
  - **`esSoloLetras`:** Expresión regular que filtra los campos de texto para permitir únicamente letras y espacios.
  - **`esSoloNumerosValidos`:** Asegura que el campo de edad acepte solo números válidos menores o iguales a 120.
- **Ubicación:** `src/services/juegoService.js`

---

## 🌐 Gestión de Reglas y Mensajes (`juegoService.js`)

- **Función:** La función `obtenerResultadoDado(numero, nombre)` centraliza las reglas del juego según el resultado del dado.
- **Utilidad:** Separa los textos condicionales del código visual, permitiendo manejar los distintos escenarios (perder con 1, resultados regulares del 2 al 5, y ganar con 6) inyectando el nombre del jugador.
- **Beneficio:** Evita el uso excesivo de estructuras `if/else` o `switch` dentro de las vistas, manteniendo el código ordenado.

---

## 🧱 Componentes de Interfaz Modularizados

- **`SeccionDado.jsx`:**
  - Renderiza la caja del dado, el botón para lanzar y el texto dinámico con su respectivo color según el resultado.
- **`SeccionFormulario.jsx`:**
  - Agrupa los inputs controlados del formulario, maneja la validación de errores y muestra en tiempo real la tarjeta de resumen del jugador cuando se ingresan datos.

---

## 🎨 Estilos y Diseño (`estilos.css`)

- **Técnicas CSS Aplicadas:**
  - **Grid Layout (`display: grid` con dos columnas):** Organiza la interfaz dividiéndola simétricamente entre el formulario (izquierda) y el dado (derecha).

---

## 📄 Estructura de Vistas y Ejecución

- **`JuegoPagina.jsx`:** Vista contenedora principal que importa el hook de servicio y distribuye los datos y eventos a los componentes hijos (`SeccionFormulario` y `SeccionDado`).
- **`App.jsx` y `main.jsx`:** Configuran el punto de montaje de la aplicación para renderizar la página principal en el navegador.

---

## 📁 Gestión de Archivos

- **Archivos Creados:**
  - `src/components/SeccionDado.jsx`
  - `src/components/SeccionFormulario.jsx`
  - `src/css/estilos.css`
  - `src/pages/JuegoPagina.jsx`
  - `src/services/juegoService.js`
  - `src/App.jsx`
  - `src/main.jsx`
- **Archivos Modificados:**
  - `src/components/SeccionDado.jsx`
  - `src/components/SeccionFormulario.jsx`
  - `src/css/estilos.css`
  - `src/pages/JuegoPagina.jsx`
  - `src/services/juegoService.js`
  - `src/App.jsx`
  - `src/main.jsx`
- **Archivos Eliminados:** N/A

---

## 🤖 Uso de Inteligencia Artificial

- **Uso de IA:**
  * [X] Sí
  * [ ] No
- **Forma de uso:** 
  * [ ] **Autogeneración IA:** Código completo hecho por la IA para copiar y pegar.
  * [ ] **Alto (Copiloto):** Trabajo en equipo constante con la IA.
  * [X] **Medio (Guía):** Consulta para resolver dudas y corregir errores.
  * [ ] **Bajo (Consulta puntual):** Ayuda rápida para resolver dudas menores.