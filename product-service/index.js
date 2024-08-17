const express = require('express');
const app = express();
app.get('/products', (req, res) => {
  res.json([{ id: 1, name: 'Product A' }]);
});
app.listen(4001, () => console.log('Product service running on port 4001'));
