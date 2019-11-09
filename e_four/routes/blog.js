const express = require('express');
const { getBlog } = require('../db');

const router = express.Router();

router.get('/:id', (req, res) => {
  getBlog(req.params.id).then((content) => {
    res.json(content || {});
  });
});

module.exports = router;
