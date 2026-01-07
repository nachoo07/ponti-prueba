const express = require('express');
const app = express();

// Google Cloud Run nos pasa el puerto automáticamente en la variable PORT
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  // Leemos algunas variables para ver si la configuración funcionó
  const dbHost = process.env.DB_HOST || '(No configurado)';
  const environment = process.env.NODE_ENV || 'Desconocido';
  
  res.send(`
    <h1>🚀 ¡Servicio Funcionando!</h1>
    <p>Estoy corriendo en el ambiente: <b>${environment}</b></p>
    <p>Mi base de datos apuntaría a: <b>${dbHost}</b></p>
    <hr>
    <p><i>Este es el código Node.js respondiendo desde Cloud Run.</i></p>
  `);
});

app.listen(port, () => {
  console.log(`Ponti App escuchando en puerto ${port}`);
});