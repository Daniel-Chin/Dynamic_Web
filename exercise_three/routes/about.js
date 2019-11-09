const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
  res.send('This is about.js');
});

router.get('/me', (_, res) => {
  res.send('about me');
});

module.exports = router;
