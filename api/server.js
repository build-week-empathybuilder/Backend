const express = require('express');

const configureMiddleware = require('./middleware.js');

const server = express();

configureMiddleware(server);

server.get('/', (req, res) => {
    res.send(`It's working.gif`)
})

module.exports = server;
