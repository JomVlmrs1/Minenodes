const axios = require('axios');
const config = require('../config/config');

const pteroClient = axios.create({
  baseURL: config.pterodactylBaseURL,
  headers: {
    'Authorization': `Bearer ${config.apiKey}`,
    'Content-Type': 'application/json',
  },
});

async function createServer(data) {
  try {
    const response = await pteroClient.post('/application/servers', data);
    return response.data;
  } catch (error) {
    console.error('Error creating server:', error);
    throw error;
  }
}

async function startServer(serverId) {
  try {
    const response = await pteroClient.post(`/client/servers/${serverId}/power`, { signal: 'start' });
    return response.data;
  } catch (error) {
    console.error('Error starting server:', error);
    throw error;
  }
}

module.exports = { createServer, startServer };