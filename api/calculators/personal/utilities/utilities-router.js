const router = require('express').Router();

const utilities = require('./utilities-model.js');

const authenticate = require('../../../../auth-middleware/authenticate.js');

router.get('/', authenticate, (req, res) => {
    utilities.find()
    .then(utilities => {
        res.status(200).json(utilities)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', authenticate, (req, res) => {
    const {id} = req.params
    utilities.findByUser(id)
    .then(utilities => {
        if (utilities) {
            res.status(200).json(utilities)
        } else {
            res.status(404).json({message: "Could not retrieve calculators by user ID"})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
});

router.get('/:userId/:id', authenticate, (req, res) => {
    const {userId} = req.params
    const {id} = req.params
    utilities.findByItemId(userId, id)
    .then(utilities => {
        if (utilities) {
            res.status(200).json(utilities)
        } else {
            res.status(404).json({message: "Could not retrieve specific calculator by user ID"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.post('/', authenticate, (req, res) => {
    const newutilities = req.body;
    const {userId} = req.body;
    const {utilitiesTotal} = req.body;
    const {electricity} = req.body;
    const {gas} = req.body;
    const {water} = req.body;
    const {phoneMobile} = req.body;
    const {internet} = req.body;
    const {cable} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing fields: userId"})
    }
    if (!utilitiesTotal) {
        res.status(422).json({message: "Missing fields: utilitiesTotal"})
    }
    if (!electricity) {
        res.status(422).json({message: "Missing fields: electricity"})
    }
    if (!gas) {
        res.status(422).json({message: "Missing fields: gas"})
    }
    if (!water) {
        res.status(422).json({message: "Missing fields: water"})
    }
    if (!phoneMobile) {
        res.status(422).json({message: "Missing fields: phoneMobile"})
    }
    if (!internet) {
        res.status(422).json({message: "Missing fields: internet"})
    }
    if (!cable) {
        res.status(422).json({message: "Missing fields: cable"})
    }
    console.log(newutilities);
    utilities.add(newutilities)
    .then(utilities => {
        res.status(201).json(utilities)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:id', authenticate, (req, res) => {
    const updatedutilities = req.body;
    const {id} = req.params;
    const {userId} = req.body;
    const {utilitiesTotal} = req.body;
    const {electricity} = req.body;
    const {gas} = req.body;
    const {water} = req.body;
    const {phoneMobile} = req.body;
    const {internet} = req.body;
    const {cable} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing updated fields: userId"})
    }
    if (!utilitiesTotal) {
        res.status(422).json({message: "Missing updated fields: utilitiesTotal"})
    }
    if (!electricity) {
        res.status(422).json({message: "Missing updated fields: electricity"})
    }
    if (!gas) {
        res.status(422).json({message: "Missing updated fields: gas"})
    }
    if (!water) {
        res.status(422).json({message: "Missing updated fields: water"})
    }
    if (!phoneMobile) {
        res.status(422).json({message: "Missing fields: phoneMobile"})
    }
    if (!internet) {
        res.status(422).json({message: "Missing fields: internet"})
    }
    if (!cable) {
        res.status(422).json({message: "Missing fields: cable"})
    }
    console.log(updatedutilities);
    utilities.update(id, updatedutilities)
    .then(utilities => {
        if (utilities) {
        res.status(201).json(utilities)
        } else {
        res.status(404).json({message: "This personal calculator for this user does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:userId/:id', authenticate, (req, res) => {
    const updatedutilities = req.body;
    const {id} = req.params;
    const {userId} = req.body;
    const {utilitiesTotal} = req.body;
    const {electricity} = req.body;
    const {gas} = req.body;
    const {water} = req.body;
    const {phoneMobile} = req.body;
    const {internet} = req.body;
    const {cable} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing updated fields: userId"})
    }
    if (!utilitiesTotal) {
        res.status(422).json({message: "Missing updated fields: utilitiesTotal"})
    }
    if (!electricity) {
        res.status(422).json({message: "Missing updated fields: electricity"})
    }
    if (!gas) {
        res.status(422).json({message: "Missing updated fields: gas"})
    }
    if (!water) {
        res.status(422).json({message: "Missing updated fields: water"})
    }
    if (!phoneMobile) {
        res.status(422).json({message: "Missing fields: phoneMobile"})
    }
    if (!internet) {
        res.status(422).json({message: "Missing fields: internet"})
    }
    if (!cable) {
        res.status(422).json({message: "Missing fields: cable"})
    }
    utilities.updateByItemId(userId, id, updatedutilities)
    .then(utilities => {
        if (utilities) {
        res.status(201).json(utilities)
        } else {
        res.status(404).json({message: "This personal calculator for this user does not exist!"})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.delete('/:userId/:id', authenticate, (req, res) => {
    const {userId} = req.params
    const {id} = req.params
    utilities.remove(userId, id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({message: "This calculator for this user is now removed"})
        } else {
            console.log(err)
            res.status(404).json({message: "This calculator does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;