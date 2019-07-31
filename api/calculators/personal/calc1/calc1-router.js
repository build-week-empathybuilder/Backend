const router = require('express').Router();

const calc1 = require('./calc1-model.js');

router.get('/', (req, res) => {
    calc1.find()
    .then(calc => {
        res.status(200).json(calc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    calc1.findById(id)
    .then(calc => {
        if (calc) {
            res.status(200).json(calc)
        } else {
            res.status(404).json({message: "That user's personal running total calculator does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.post('/', (req, res) => {
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
    console.log(newCalc);
    calc1.add(newCalc)
    .then(calc => {
        res.status(201).json(calc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;