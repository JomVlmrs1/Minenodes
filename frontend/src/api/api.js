import axios from 'axios';

export const createServer = async (data) => {
  try {
    const response = await axios.post('/api/create-server', data);
    return response.data;
  } catch (error) {
    console.error('Error creating server:', error);
    throw error;
  }
};