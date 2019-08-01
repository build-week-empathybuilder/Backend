// THIS IS A TEST FILE! NOT MEANT FOR FINAL DEPLOYEMENT

const router = require('express').Router();

const Users = require('../users/users-model.js');
const restricted = require('../../auth-middleware/authenticate.js')

router.delete('/:id', restricted, (req, res) => {
    Users.remove(req.params.id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({message: "The user has been removed from the database"})
        } else {
            res.status(404).json({message: "This user does not exist!"})
        }
    })
})

module.exports = router;