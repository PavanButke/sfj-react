const WS_URL = 'ws://localhost:8098/ws'; // Update with your WebSocket server URL

function connectWebSocket(onMessage) {
  const ws = new WebSocket(WS_URL);
  ws.onopen = () => {
    console.log('WebSocket connection established');
  };
  ws.onmessage = (event) => {
    try {
      const message = JSON.parse(event.data);
      onMessage(message);
    } catch (error) {
      console.error('Error parsing WebSocket message:', error);
    }
  };
  ws.onerror = (error) => {
    console.error('WebSocket error:', error);
  };
  ws.onclose = () => {
    console.log('WebSocket connection closed');
  };
  return ws;
}

const WebSocketService = {
  connectWebSocket,
};

export default WebSocketService;
