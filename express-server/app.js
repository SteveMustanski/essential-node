const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(
    `${req.method} request for ${req.url} - ${JSON.stringify(req.body)}`,
  );
  next();
});

app.use(express.static('./public'));
app.use(cors());

app.get('/dictionary-api', (req, res) => {
  res.json(vtTerms);
});

app.post('/dictionary-api', (req, res) => {
  vtTerms.push(req.body);
  res.json(vtTerms);
});

app.listen(3000);

console.log(`Express app is running on ${port}`);

module.exports = app;
