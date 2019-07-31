const router = require('express').Router();

const misc = require('./miscellaneous_expenses-model');

router.get('/', (req, res) => {
    misc.find()
    .then(misc => {
        res.status(200).json(misc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    misc.findById(id)
    .then(misc => {
        if (misc) {
            res.status(200).json(misc)
        } else {
            res.status(404).json({message: "That user's personal running total calculator does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.post('/', (req, res) => {
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

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
    const {id} = req.params
    misc.remove(id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({message: "This calculator for this user is now removed"})
        } else {
            res.status(404).json({message: "This calculator does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;