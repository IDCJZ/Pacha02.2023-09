// Mascotas.js
import React from 'react';

const Mascotas = ({ match }) => {
  const { id } = match.params;

  // Lógica para obtener o mostrar la mascota según el ID

  return (
    <div>
      <h2>Detalles de la mascota {id}</h2>
      {/* Contenido de la mascota */}
    </div>
  );
};

export default Mascotas;


