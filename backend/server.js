const express = require('express');
const serverRoutes = require('./routes/serverRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/api', serverRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});