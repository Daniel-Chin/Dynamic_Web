'use strict';

const express = require('express');
const apiRoute = require('./routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 4000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
if (process.env.PROD) {
  console.log('Production Environment!')
} else {
  console.log('Dev Environment! Using CORS!')
  app.use(cors());
}

app.use('/api', apiRoute);

// hosting the react app production build as static
app.use('/ui', express.static('./front/build/'));

app.get('/', (_, res) => {
  res.redirect('/ui');
});

app.listen(PORT, () => {
  console.log(`Listening @ port ${PORT}...`);
});

// setInterval(()=>{console.log(`running... ${new Date()}`)}, 2000);
