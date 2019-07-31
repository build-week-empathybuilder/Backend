const router = require('express').Router();

const bcrypt = require('bcryptjs');

const tokenMaker = require('../../auth-middleware/token-maker.js');
const Users = require('../users/users-model.js');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash

    Users.add(user)
    .then(user => {
        res.status(201).json(user);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.post('/login', (req, res) => {
    let {username, password} = req.body;
    Users.findBy({username})
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = tokenMaker.generateToken(user);
            const id = user.id;
            res.status(200).json({
                message: `Welcome ${user.username}!`,
                token,
                id
            })
        } else {
            res.status(401).json({message: "Credentials are invalid"});
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json(error);
    })
})

module.exports = router;