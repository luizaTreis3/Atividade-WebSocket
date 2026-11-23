const { WebSocketServer, WebSocket } = require('ws');

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (socket) => {
  console.log('Cliente conectado');

  socket.on('message', (raw) => {
    let message;

    try {
      message = JSON.parse(raw.toString());
    } catch {
      return;
    }

    if (typeof message.text !== 'string' || !message.text.trim()) {
      return;
    }

    const outgoing = JSON.stringify({
      sender: String(message.sender || 'Aluno').trim().slice(0, 30) || 'Aluno',
      text: message.text.trim().slice(0, 500),
      time: Date.now(),
    });

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(outgoing);
      }
    });
  });

  socket.on('close', () => {
    console.log('Cliente desconectado');
  });
});

console.log('Servidor ativo na porta 8080');
