const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

const authRouter = require('./auth/auth-router.js');
const usersRouter = require('./users/users-router.js');

// Personal calculator routers
const calcRouter = require('./calculators/personal/calc1/calc1-router.js')
const clothingRouter = require('./calculators/personal/clothing/clothing-router.js')
const debtRouter = require('./calculators/personal/debt/debt-router.js')
const foodRouter = require('./calculators/personal/food/food-router.js')
const healthCareRouter = require('./calculators/personal/health_care/health_care-router.js')
const housingRouter = require('./calculators/personal/health_care/health_care-router.js')
const transportationRouter = require('./calculators/personal/transportation/transportation-router.js')
const utilitiesRouter = require('./calculators/personal/utilities/utilities-router.js')

// Relocation calculator routers
const calc2Router = require('./calculators/relocation/calc2/calc2-router.js')
const lodgingRouter = require('./calculators/relocation/lodging/lodging-router.js')
const miscRouter = require('./calculators/relocation/miscellaneous_expenses/miscellaneous_expenses-router.js')
const newHomeRouter = require('./calculators/relocation/new_home/new_home-router.js')
const newTransportationRouter = require('./calculators/relocation/new_transportation/new_transportation-router.js')
const workLifeRouter = require('./calculators/relocation/work_life/work_life-router.js') 

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

// Use files for personal calculator
server.use('/api/calc1', calcRouter);
server.use('/api/clothing', clothingRouter);
server.use('/api/debt', debtRouter);
server.use('/api/food', foodRouter);
server.use('/api/health', healthCareRouter);
server.use('/api/housing', housingRouter);
server.use('/api/car', transportationRouter);
server.use('/api/bills', utilitiesRouter);

// Use files for relocation calculator
server.use('/api/calc2', calc2Router);
server.use('/api/lodging', lodgingRouter);
server.use('/api/misc', miscRouter);
server.use('/api/newhome', newHomeRouter);
server.use('/api/newcar', newTransportationRouter);
server.use('/api/work', workLifeRouter);


server.get('/', (req, res) => {
    const messageOfTheDay = process.env.MOTD || "Welcome to the server!"
    res.send(`<h1>${messageOfTheDay}</h1>`)
})

module.exports = server;
