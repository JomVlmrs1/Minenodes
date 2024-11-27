const express = require('express');
const router = express.Router();
const pterodactylController = require('../controllers/pterodactylController');

// Endpoint to create a new server
router.post('/create-server', async (req, res) => {
  try {
    const serverData = req.body;
    const result = await pterodactylController.createServer(serverData);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create server' });
  }
});

// Endpoint to start a server
router.post('/start-server/:serverId', async (req, res) => {
  try {
    const serverId = req.params.serverId;
    const result = await pterodactylController.startServer(serverId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to start server' });
  }
});

module.exports = router;