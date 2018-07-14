const express = require('express');
const path = require('path');

const router = express.Router();
const request = require('request-promise');
const _ = require('lodash');

const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();

app.use(function (req, res, next) {
  res.setHeader(`Access-Control-Allow-Origin`, `*`);
  res.setHeader(`Access-Control-Allow-Credentials`, `true`);
  res.setHeader(`Access-Control-Allow-Methods`, `GET,HEAD,OPTIONS,POST,PUT,DELETE`);
  res.setHeader(`Access-Control-Allow-Headers`, `Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers`);
  res.setHeader(`Cache-Control`, `no-cache`);
  next();
});

// Defined Routes

app.get('/test', (request, response) => {
  response.send('test');
  return 'Test';
});

app.get('/', (request, response) => {
  response.send(JSON.stringify({ bob: "dole" }));
  return 'Test';
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = router;
