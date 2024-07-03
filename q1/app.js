const express = require('express');
const productsRouter = require('./productRouter');

const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json
app.use('/products', productsRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
