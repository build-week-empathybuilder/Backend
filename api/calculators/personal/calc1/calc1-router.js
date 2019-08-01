const router = require('express').Router();

const calc1 = require('./calc1-model.js');

const authenticate = require('../../../../auth-middleware/authenticate.js');

router.get('/', authenticate, (req, res) => {
    calc1.find()
    .then(calc => {
        res.status(200).json(calc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', authenticate, (req, res) => {
    const {id} = req.params
    calc1.findByUser(id)
    .then(calc => {
        if (calc) {
            res.status(200).json(calc)
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
    calc1.findByItemId(userId, id)
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
    const newCalc = req.body;
    const {userId} = req.body;
    const {foodTotal} = req.body;
    const {transportationTotal} = req.body;
    const {healthCareTotal} = req.body;
    const {debtTotal} = req.body;
    const {housingTotal} = req.body;
    const {utilitiesTotal} = req.body;
    const {clothingTotal} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing fields: userId"})
    }
    if (!foodTotal) {
        res.status(422).json({message: "Missing fields: foodTotal"})
    }
    if (!transportationTotal) {
        res.status(422).json({message: "Missing fields: transportationTotal"})
    }
    if (!healthCareTotal) {
        res.status(422).json({message: "Missing fields: healthCareTotal"})
    }
    if (!debtTotal) {
        res.status(422).json({message: "Missing fields: debtTotal"})
    }
    if (!housingTotal) {
        res.status(422).json({message: "Missing fields: housingTotal"})
    }
    if (!utilitiesTotal) {
        res.status(422).json({message: "Missing fields: utilitiesTotal"})
    }
    if (!clothingTotal) {
        res.status(422).json({message: "Missing fields: clothingTotal"})
    }
    calc1.add(newCalc)
    .then(calc => {
        res.status(201).json(calc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:id', authenticate, (req, res) => {
    const updatedCalc = req.body;
    const {id} = req.params;
    const {userId} = req.body;
    const {foodTotal} = req.body;
    const {transportationTotal} = req.body;
    const {healthCareTotal} = req.body;
    const {debtTotal} = req.body;
    const {housingTotal} = req.body;
    const {utilitiesTotal} = req.body;
    const {clothingTotal} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing updated fields: userId"})
    }
    if (!foodTotal) {
        res.status(422).json({message: "Missing updated fields: foodTotal"})
    }
    if (!transportationTotal) {
        res.status(422).json({message: "Missing updated fields: transportationTotal"})
    }
    if (!healthCareTotal) {
        res.status(422).json({message: "Missing updated fields: healthCareTotal"})
    }
    if (!debtTotal) {
        res.status(422).json({message: "Missing updated fields: debtTotal"})
    }
    if (!housingTotal) {
        res.status(422).json({message: "Missing updated fields: housingTotal"})
    }
    if (!utilitiesTotal) {
        res.status(422).json({message: "Missing updated fields: utilitiesTotal"})
    }
    if (!clothingTotal) {
        res.status(422).json({message: "Missing updated fields: clothingTotal"})
    }
    calc1.update(id, updatedCalc)
    .then(calc => {
        if (calc) {
        res.status(201).json(calc)
        } else {
        res.status(404).json({message: "This personal calculator for this user does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:userId/:id', authenticate, (req, res) => {
    const {id} = req.params;
    const updatedCalc = req.body;
    const {userId} = req.body;
    const {foodTotal} = req.body;
    const {transportationTotal} = req.body;
    const {healthCareTotal} = req.body;
    const {debtTotal} = req.body;
    const {housingTotal} = req.body;
    const {utilitiesTotal} = req.body;
    const {clothingTotal} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing updated fields: userId"})
    }
    if (!foodTotal) {
        res.status(422).json({message: "Missing updated fields: foodTotal"})
    }
    if (!transportationTotal) {
        res.status(422).json({message: "Missing updated fields: transportationTotal"})
    }
    if (!healthCareTotal) {
        res.status(422).json({message: "Missing updated fields: healthCareTotal"})
    }
    if (!debtTotal) {
        res.status(422).json({message: "Missing updated fields: debtTotal"})
    }
    if (!housingTotal) {
        res.status(422).json({message: "Missing updated fields: housingTotal"})
    }
    if (!utilitiesTotal) {
        res.status(422).json({message: "Missing updated fields: utilitiesTotal"})
    }
    if (!clothingTotal) {
        res.status(422).json({message: "Missing updated fields: clothingTotal"})
    }
    calc1.updateByItemId(userId, id, updatedCalc)
    .then(calc => {
        if (calc) {
        res.status(201).json(calc)
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
    calc1.remove(userId, id)
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