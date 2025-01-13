const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  console.log('Nuevo cliente conectado');
  
  ws.on('message', message => {
    console.log(`Mensaje recibido: ${message}`);
  });

  ws.send('Hola Mundo desde el servidor!');
});

console.log('Servidor WebSocket escuchando en ws://localhost:8080');
