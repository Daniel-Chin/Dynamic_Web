const express = require('express');
const blogRoute = require('./blog');
const { getAll, setBlog } = require('../db');

const router = express.Router();

router.get('/blogs', (_, res) => {  // list all blogs
  getAll().then((x) => {
    res.json(x);
  });
});

router.post('/set', (req, res) => { // create/modify a blog
  const { id, content } = req.body;
  setBlog(id, content).then(() => {
    res.send('ok');
  });
});

router.use('/blog', blogRoute);     // request a single blog

router.get('/status', (_, res) => { // For debugging
  const msg = `The server is up and running. It is ${new Date()}`;
  console.log(msg);
  res.send(msg);
});

module.exports = router;
