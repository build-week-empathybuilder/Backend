const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

const authRouter = require('./auth/auth-router.js');
const usersRouter = require('./users/users-router.js');

// Personal calulator routers
const calcRouter = require('./calculators/personal/calc1/calc1-router.js')
const clothingRouter = require('./calculators/personal/clothing/clothing-router.js')
const debtRouter = require('./calculators/personal/debt/debt-router.js')
const foodRouter = require('./calculators/personal/food/food-router.js')
const healthCareRouter = require('./calculators/personal/health_care/health_care-router.js')
const housingRouter = require('./calculators/personal/health_care/health_care-router.js')
const transportationRouter = require('./calculators/personal/transportation/transportation-router.js')
const utilitiesRouter = require('./calculators/personal/utilities/utilities-router.js')

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

// Use files for personal calculator
server.use('/api/calc1', calcRouter);
server.use('/api/clothing', clothingRouter);
server.use('/api/debt', debtRouter);
server.use('/api/food', foodRouter);
server.use('/api/healthCare', healthCareRouter);
server.use('/api/housing', housingRouter);
server.use('/api/transportation', transportationRouter);
server.use('/api/utilities', utilitiesRouter);


server.get('/', (req, res) => {
    const messageOfTheDay = process.env.MOTD || "Welcome to the server!"
    res.send(`<h1>${messageOfTheDay}</h1>`)
})

module.exports = server;
