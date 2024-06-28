import express from 'express';

const app = express();

/**
 * Manejador para la ruta raíz que devuelve un mensaje de 'Hello World!'.
 * @param {express.Request} req - Objeto de solicitud HTTP.
 * @param {express.Response} res - Objeto de respuesta HTTP.
 */
function handleRootRequest(req, res) {
  res.send('Hello World!');
}

app.get('/', handleRootRequest);

/**
 * Función que inicia el servidor Express en el puerto 3000.
 */
function startServer() {
  const port = 3000;
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
  });
}

// Llamamos a la función para iniciar el servidor
startServer();
