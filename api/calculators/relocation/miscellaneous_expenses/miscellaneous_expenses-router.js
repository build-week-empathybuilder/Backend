const router = require('express').Router();

const misc = require('./miscellaneous_expenses-model');

const authenticate = require('../../../../auth-middleware/authenticate.js');

router.get('/', authenticate, (req, res) => {
    misc.find()
    .then(misc => {
        res.status(200).json(misc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', authenticate, (req, res) => {
    const {id} = req.params
    misc.findByUser(id)
    .then(misc => {
        if (misc) {
            res.status(200).json(misc)
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
    misc.findByItemId(userId, id)
    .then(misc => {
        if (misc) {
            res.status(200).json(misc)
        } else {
            res.status(404).json({message: "Could not retrieve specific calculator by user ID"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.post('/', authenticate, (req, res) => {
    const newmisc = req.body;
    const {userId} = req.body;
    const {storageUnit} = req.body;
    const {furnitureAppliances} = req.body;
    const {petExpenses} = req.body;
    const {cellPhoneDisconnectionFees} = req.body;
    const {additionalSecurityMeasures} = req.body;
    const {miscellaneousExpensesTotal} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing fields: userId"})
    }
    if (!storageUnit) {
        res.status(422).json({message: "Missing fields: storageUnit"})
    }
    if (!furnitureAppliances) {
        res.status(422).json({message: "Missing fields: furnitureAppliances"})
    }
    if (!petExpenses) {
        res.status(422).json({message: "Missing fields: petExpenses"})
    }
    if (!cellPhoneDisconnectionFees) {
        res.status(422).json({message: "Missing fields: cellPhoneDisconnectionFees"})
    }
    if (!additionalSecurityMeasures) {
        res.status(422).json({message: "Missing fields: additionalSecurityMeasures"})
    }
    if (!miscellaneousExpensesTotal) {
        res.status(422).json({message: "Missing fields: miscellaneousExpensesTotal"})
    }
    console.log(newmisc);
    misc.add(newmisc)
    .then(misc => {
        res.status(201).json(misc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:id', authenticate, (req, res) => {
    const updatedmisc = req.body;
    const {id} = req.params;
    const {userId} = req.body;
    const {storageUnit} = req.body;
    const {furnitureAppliances} = req.body;
    const {petExpenses} = req.body;
    const {cellPhoneDisconnectionFees} = req.body;
    const {additionalSecurityMeasures} = req.body;
    const {miscellaneousExpensesTotal} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing updated fields: userId"})
    }
    if (!storageUnit) {
        res.status(422).json({message: "Missing updated fields: storageUnit"})
    }
    if (!furnitureAppliances) {
        res.status(422).json({message: "Missing updated fields: furnitureAppliances"})
    }
    if (!petExpenses) {
        res.status(422).json({message: "Missing updated fields: petExpenses"})
    }
    if (!cellPhoneDisconnectionFees) {
        res.status(422).json({message: "Missing updated fields: cellPhoneDisconnectionFees"})
    }
    if (!additionalSecurityMeasures) {
        res.status(422).json({message: "Missing fields: additionalSecurityMeasures"})
    }
    if (!miscellaneousExpensesTotal) {
        res.status(422).json({message: "Missing updated fields: miscellaneousExpensesTotal"})
    }
    console.log(updatedmisc);
    misc.update(id, updatedmisc)
    .then(misc => {
        if (misc) {
        res.status(201).json(misc)
        } else {
        res.status(404).json({message: "This personal calculator for this user does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:userId/:id', authenticate, (req, res) => {
    const updatedmisc = req.body;
    const {id} = req.params;
    const {userId} = req.body;
    const {storageUnit} = req.body;
    const {furnitureAppliances} = req.body;
    const {petExpenses} = req.body;
    const {cellPhoneDisconnectionFees} = req.body;
    const {additionalSecurityMeasures} = req.body;
    const {miscellaneousExpensesTotal} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing updated fields: userId"})
    }
    if (!storageUnit) {
        res.status(422).json({message: "Missing updated fields: storageUnit"})
    }
    if (!furnitureAppliances) {
        res.status(422).json({message: "Missing updated fields: furnitureAppliances"})
    }
    if (!petExpenses) {
        res.status(422).json({message: "Missing updated fields: petExpenses"})
    }
    if (!cellPhoneDisconnectionFees) {
        res.status(422).json({message: "Missing updated fields: cellPhoneDisconnectionFees"})
    }
    if (!additionalSecurityMeasures) {
        res.status(422).json({message: "Missing fields: additionalSecurityMeasures"})
    }
    if (!miscellaneousExpensesTotal) {
        res.status(422).json({message: "Missing updated fields: miscellaneousExpensesTotal"})
    }
    misc.updateByItemId(userId, id, updatedmisc)
    .then(misc => {
        if (misc) {
        res.status(201).json(misc)
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
    misc.remove(userId, id)
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