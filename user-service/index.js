const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'Pravesh is Rockstar' }]);
});

app.listen(4000, () => console.log('User service running on port 4000'));
