import React, { useState } from 'react';
import WebSocketClient from './WebSocketClient';

function ParentComponent() {
  const [message, setMessage] = useState('');

  // Function to handle incoming WebSocket messages
  const handleUpdate = (message) => {
    setMessage(message);
  };

  return (
    <div>
      <h1>WebSocket Example</h1>
      <WebSocketClient onUpdate={handleUpdate} />
      <p>Received message: {message}</p>
    </div>
  );
}

export default ParentComponent;
