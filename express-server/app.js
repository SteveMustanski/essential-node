const express = require('express');
const app = express();
const cors = require('cors');

const port = 3000;

let vtTerms = [
  {
    term: 'bong sau',
    defined: 'wing arm',
  },
  {
    term: 'tan sau',
    defined: 'receiving hand',
  },
  {
    term: 'Sil Lim Tao',
    defined: 'Little Idea.  The first form.',
  },
];

app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

app.use(express.static('./public'));
app.use(cors());

app.get('/dictionary-api', (req, res) => {
  res.json(vtTerms);
});

app.listen(3000);

console.log(`Express app is running on ${port}`);

module.exports = app;
