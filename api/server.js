const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

const authRouter = require('./auth/auth-router.js');
const usersRouter = require('./users/users-router.js');
const calcRouter = require('./calculators/personal/calc1/calc1-router.js')


server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/calc1', calcRouter);


server.get('/', (req, res) => {
    const messageOfTheDay = process.env.MOTD || "Welcome to the server!"
    res.send(`<h1>${messageOfTheDay}</h1>`)
})

module.exports = server;
