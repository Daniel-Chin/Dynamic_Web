const express = require('express');

const PORT = 4000;

const app = express();

app.listen(PORT, function () {
  console.log(`listening @ port ${PORT}...`);
});
