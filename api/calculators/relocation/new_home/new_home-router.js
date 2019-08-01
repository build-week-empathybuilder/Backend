const router = require('express').Router();

const newHome = require('./new_home-model.js');

const authenticate = require('../../../../auth-middleware/authenticate.js');

router.get('/', authenticate, (req, res) => {
    newHome.find()
    .then(newhome => {
        res.status(200).json(newhome)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', authenticate, (req, res) => {
    const {id} = req.params
    newHome.findByUser(id)
    .then(newHome => {
        if (newHome) {
            res.status(200).json(newHome)
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
    newHome.findByItemId(userId, id)
    .then(calc => {
        if (calc) {
            res.status(200).json(calc)
        } else {
            res.status(404).json({message: "Could not retrieve specific calculator by user ID"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.post('/', authenticate, (req, res) => {
    const newnewhome = req.body;
    const {userId} = req.body;
    const {housingDeposit} = req.body;
    const {utilitiesDeposit} = req.body;
    const {newHomeTotal} = req.body;
    const {rent} = req.body;
    const {miscellaneousFees} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing fields: userId"})
    }
    if (!housingDeposit) {
        res.status(422).json({message: "Missing fields: housingDeposit"})
    }
    if (!utilitiesDeposit) {
        res.status(422).json({message: "Missing fields: utilitiesDeposit"})
    }
    if (!newHomeTotal) {
        res.status(422).json({message: "Missing fields: newHomeTotal"})
    }
    if (!rent) {
        res.status(422).json({message: "Missing fields: rent"})
    }
    if (!miscellaneousFees) {
        res.status(422).json({message: "Missing fields: miscellaneousFees"})
    }
    console.log(newnewhome);
    newHome.add(newnewhome)
    .then(newhome => {
        res.status(201).json(newhome)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:id', authenticate, (req, res) => {
    const updatednewhome = req.body;
    const {id} = req.params;
    const {userId} = req.body;
    const {housingDeposit} = req.body;
    const {utilitiesDeposit} = req.body;
    const {newHomeTotal} = req.body;
    const {rent} = req.body;
    const {miscellaneousFees} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing updated fields: userId"})
    }
    if (!housingDeposit) {
        res.status(422).json({message: "Missing updated fields: housingDeposit"})
    }
    if (!utilitiesDeposit) {
        res.status(422).json({message: "Missing updated fields: utilitiesDeposit"})
    }
    if (!newHomeTotal) {
        res.status(422).json({message: "Missing updated fields: newHomeTotal"})
    }
    if (!rent) {
        res.status(422).json({message: "Missing updated fields: rent"})
    }
    if (!miscellaneousFees) {
        res.status(422).json({message: "Missing updated fields: miscellaneousFees"})
    }
    console.log(updatednewhome);
    newHome.update(id, updatednewhome)
    .then(newhome => {
        if (newhome) {
        res.status(201).json(newhome)
        } else {
        res.status(404).json({message: "This personal calculator for this user does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:userId/:id', authenticate, (req, res) => {
    const updatednewhome = req.body;
    const {id} = req.params;
    const {userId} = req.body;
    const {housingDeposit} = req.body;
    const {utilitiesDeposit} = req.body;
    const {newHomeTotal} = req.body;
    const {rent} = req.body;
    const {miscellaneousFees} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing updated fields: userId"})
    }
    if (!housingDeposit) {
        res.status(422).json({message: "Missing updated fields: housingDeposit"})
    }
    if (!utilitiesDeposit) {
        res.status(422).json({message: "Missing updated fields: utilitiesDeposit"})
    }
    if (!newHomeTotal) {
        res.status(422).json({message: "Missing updated fields: newHomeTotal"})
    }
    if (!rent) {
        res.status(422).json({message: "Missing updated fields: rent"})
    }
    if (!miscellaneousFees) {
        res.status(422).json({message: "Missing updated fields: miscellaneousFees"})
    }
    newHome.updateByItemId(userId, id, updatednewhome)
    .then(newHome => {
        if (newHome) {
        res.status(201).json(newHome)
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
    newHome.remove(userId, id)
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