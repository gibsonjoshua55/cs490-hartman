// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
require('dotenv').config();
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();
const authentication = require('./api/authentication');
const sanity = require('./api/sanity');
// const setupPassport = require('./api/authentication/set-up-passport');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var setUpPassport = require('./setup-passport');

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(cookieParser());

  setUpPassport(server);

  authentication(server);
  sanity(server);
  server.get('/login', (req, res) => {
    app.render(req, res, '/login');
  });
  server.get('*', (req, res) => {
    handle(req, res);
  });
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})

