const router = require('express').Router();

const bcrypt = require('bcryptjs');

const tokenMaker = require('../../auth-middleware/token-maker.js');
const authenticate = require('../../auth-middleware/authenticate.js');
const Users = require('../users/users-model.js');

router.get('/users', (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users)
    })
})
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
        res.status(500).json(error);
    })
})

router.delete('/:id', authenticate, (req, res) => {
    Users.remove(req.params.id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({message: "This user has been removed from the database"})
        } else {
            res.status(404).json({message: "This user does not exist!"})
        }
    })
})

module.exports = router;