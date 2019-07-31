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
    // const {user_id} = req.body;
    // const {food_total} = req.body;
    // const {transportation_total} = req.body;
    // const {health_care_total} = req.body;
    // const {debt_total} = req.body;
    // const {housing_total} = req.body;
    // const {utilities_total} = req.body;
    // const {clothing_total} = req.body;
    // if (!user_id) {
    //     res.status(422).json({message: "Missing fields: user_id"})
    // }
    // if (!food_total) {
    //     res.status(422).json({message: "Missing fields: food_total"})
    // }
    // if (!transportation_total) {
    //     res.status(422).json({message: "Missing fields: transportation_total"})
    // }
    // if (!health_care_total) {
    //     res.status(422).json({message: "Missing fields: health_care_total"})
    // }
    // if (!debt_total) {
    //     res.status(422).json({message: "Missing fields: debt_total"})
    // }
    // if (!housing_total) {
    //     res.status(422).json({message: "Missing fields: housing_total"})
    // }
    // if (!utilities_total) {
    //     res.status(422).json({message: "Missing fields: utilities_total"})
    // }
    // if (!clothing_total) {
    //     res.status(422).json({message: "Missing fields: clothing_total"})
    // }
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