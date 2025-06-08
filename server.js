const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('🚀 Hello from OpenShift Node.js App!');
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
