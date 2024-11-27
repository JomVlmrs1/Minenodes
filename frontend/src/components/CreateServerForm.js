import React, { useState } from 'react';
import axios from 'axios';

function CreateServerForm() {
  const [serverName, setServerName] = useState('');
  const [status, setStatus] = useState('');

  const createServer = async () => {
    try {
      const response = await axios.post('/api/create-server', { name: serverName });
      setStatus(`Server created: ${response.data.identifier}`);
    } catch (error) {
      setStatus('Error creating server');
    }
  };

  return (
    <div>
      <h1>Create Minecraft Server</h1>
      <input
        type="text"
        placeholder="Server Name"
        value={serverName}
        onChange={(e) => setServerName(e.target.value)}
      />
      <button onClick={createServer}>Create</button>
      <p>{status}</p>
    </div>
  );
}

export default CreateServerForm;