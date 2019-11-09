const express = require('express');
const indexRoute = require('./routes/index');
const aboutRoute = require('./routes/about');

const PORT = process.env.PORT || 4000;

const app = express();

// app.get('/', (req, res) => {
//   console.log(req);
//   res.send(`Hi, world! `);
// });

let acc = 0;
app.get('/acc', (_, res) => {
  acc += 1;
  res.send(`acc = ${acc}`);
});

app.use('/static', express.static('./public/'));

app.use('/', indexRoute);
app.use('/about', aboutRoute);

app.listen(PORT, () => {console.log(`Listening @ port ${PORT}...`);});
