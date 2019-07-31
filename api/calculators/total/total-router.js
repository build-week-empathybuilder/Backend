const router = require('express').Router();

const total = require('./total-model.js');

router.get('/', (req, res) => {
    total.find()
    .then(calc => {
        res.status(200).json(calc)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    total.findByUser(id)
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
    total.findByItemId(userId, id)
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
    const {runningTotal} = req.body;
    const {calc1Total} = req.body;
    const {calc2Total} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing fields: userId"})
    }
    if (!runningTotal) {
        res.status(422).json({message: "Missing fields: runningTotal"})
    }
    if (!calc1Total) {
        res.status(422).json({message: "Missing fields: calc1Total"})
    }
    if (!calc2Total) {
        res.status(422).json({message: "Missing fields: calc2Total"})
    }
    console.log(newCalc);
    total.add(newCalc)
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
    const {runningTotal} = req.body;
    const {calc1Total} = req.body;
    const {calc2Total} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing fields: userId"})
    }
    if (!runningTotal) {
        res.status(422).json({message: "Missing fields: runningTotal"})
    }
    if (!calc1Total) {
        res.status(422).json({message: "Missing fields: calc1Total"})
    }
    if (!calc2Total) {
        res.status(422).json({message: "Missing fields: calc2Total"})
    }
    console.log(updatedCalc);
    total.update(id, updatedCalc)
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
    const {runningTotal} = req.body;
    const {calc1Total} = req.body;
    const {calc2Total} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing fields: userId"})
    }
    if (!runningTotal) {
        res.status(422).json({message: "Missing fields: runningTotal"})
    }
    if (!calc1Total) {
        res.status(422).json({message: "Missing fields: calc1Total"})
    }
    if (!calc2Total) {
        res.status(422).json({message: "Missing fields: calc2Total"})
    }
    total.updateByItemId(userId, id, updatedCalc)
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
    total.remove(userId, id)
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