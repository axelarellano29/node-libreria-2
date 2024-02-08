const http = require('http');

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
  // Configurar encabezados de respuesta
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Enviar respuesta al cliente
  res.end('¡Hola, mundo!\n');
});

// Definir el puerto en el que el servidor escuchará las solicitudes
const PORT = 3000;

// Iniciar el servidor y escuchar en el puerto especificado
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});
