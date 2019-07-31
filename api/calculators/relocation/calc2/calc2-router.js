const router = require('express').Router();

const calc2 = require('./calc2-model.js');

router.get('/', (req, res) => {
    calc2.find()
    .then(calc => {
        res.status(200).json(calc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    calc2.findByUser(id)
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

router.get('/:userId/:id', (req, res) => {
    const {userId} = req.params
    const {id} = req.params
    calc2.findByItemId(userId, id)
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

router.post('/', (req, res) => {
    const newCalc = req.body;
    const {userId} = req.body;
    const {workLifeTotal} = req.body;
    const {lodgingTotal} = req.body;
    const {newHomeTotal} = req.body;
    const {newTransportationTotal} = req.body;
    const {miscellaneousExpensesTotal} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing fields: userId"})
    }
    if (!workLifeTotal) {
        res.status(422).json({message: "Missing fields: workLifeTotal"})
    }
    if (!lodgingTotal) {
        res.status(422).json({message: "Missing fields: lodgingTotal"})
    }
    if (!newHomeTotal) {
        res.status(422).json({message: "Missing fields: newHomeTotal"})
    }
    if (!newTransportationTotal) {
        res.status(422).json({message: "Missing fields: newTransportationTotal"})
    }
    if (!miscellaneousExpensesTotal) {
        res.status(422).json({message: "Missing fields: miscellaneousExpensesTotal"})
    }
    console.log(newCalc);
    calc2.add(newCalc)
    .then(calc => {
        res.status(201).json(calc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:id', (req, res) => {
    const updatedCalc = req.body;
    const {id} = req.params;
    const {userId} = req.body;
    const {workLifeTotal} = req.body;
    const {lodgingTotal} = req.body;
    const {newHomeTotal} = req.body;
    const {newTransportationTotal} = req.body;
    const {miscellaneousExpensesTotal} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing updated fields: userId"})
    }
    if (!workLifeTotal) {
        res.status(422).json({message: "Missing updated fields: workLifeTotal"})
    }
    if (!lodgingTotal) {
        res.status(422).json({message: "Missing updated fields: lodgingTotal"})
    }
    if (!newHomeTotal) {
        res.status(422).json({message: "Missing updated fields: newHomeTotal"})
    }
    if (!newTransportationTotal) {
        res.status(422).json({message: "Missing updated fields: newTransportationTotal"})
    }
    if (!miscellaneousExpensesTotal) {
        res.status(422).json({message: "Missing updated fields: miscellaneousExpensesTotal"})
    }
    console.log(updatedCalc);
    calc2.update(id, updatedCalc)
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

router.put('/:userId/:id', (req, res) => {
    const updatedCalc = req.body;
    const {id} = req.params;
    const {userId} = req.body;
    const {workLifeTotal} = req.body;
    const {lodgingTotal} = req.body;
    const {newHomeTotal} = req.body;
    const {newTransportationTotal} = req.body;
    const {miscellaneousExpensesTotal} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing updated fields: userId"})
    }
    if (!workLifeTotal) {
        res.status(422).json({message: "Missing updated fields: workLifeTotal"})
    }
    if (!lodgingTotal) {
        res.status(422).json({message: "Missing updated fields: lodgingTotal"})
    }
    if (!newHomeTotal) {
        res.status(422).json({message: "Missing updated fields: newHomeTotal"})
    }
    if (!newTransportationTotal) {
        res.status(422).json({message: "Missing updated fields: newTransportationTotal"})
    }
    if (!miscellaneousExpensesTotal) {
        res.status(422).json({message: "Missing updated fields: miscellaneousExpensesTotal"})
    }
    calc2.updateByItemId(userId, id, updatedCalc)
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

router.delete('/:userId/:id', (req, res) => {
    const {userId} = req.params
    const {id} = req.params
    calc2.remove(userId, id)
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