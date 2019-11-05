const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
  res.send('This is index.js');
});

module.exports = router;
