const express = require('express');
const app = express();

const port = 3000;

app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

app.use(express.static('./public'));

app.listen(3000);

console.log(`Express app is running on ${port}`);

module.exports = app;
