const router = require('express').Router();

const transportation = require('./transportation-model.js');

router.get('/', (req, res) => {
    transportation.find()
    .then(transportation => {
        res.status(200).json(transportation)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    transportation.findById(id)
    .then(transportation => {
        if (transportation) {
            res.status(200).json(transportation)
        } else {
            res.status(404).json({message: "That user's personal running total calculator does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.post('/', (req, res) => {
    const newtransportation = req.body;
    const {userId} = req.body;
    const {transportationTotal} = req.body;
    const {carInsurance} = req.body;
    const {carPayment} = req.body;
    const {gas} = req.body;
    const {parking} = req.body;
    const {publicTransit} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing fields: userId"})
    }
    if (!transportationTotal) {
        res.status(422).json({message: "Missing fields: transportationTotal"})
    }
    if (!carInsurance) {
        res.status(422).json({message: "Missing fields: carInsurance"})
    }
    if (!carPayment) {
        res.status(422).json({message: "Missing fields: carPayment"})
    }
    if (!gas) {
        res.status(422).json({message: "Missing fields: gas"})
    }
    if (!parking) {
        res.status(422).json({message: "Missing fields: parking"})
    }
    if (!publicTransit) {
        res.status(422).json({message: "Missing fields: publicTransit"})
    }
    console.log(newtransportation);
    transportation.add(newtransportation)
    .then(transportation => {
        res.status(201).json(transportation)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:id', (req, res) => {
    const updatedtransportation = req.body;
    const {id} = req.params;
    const {userId} = req.body;
    const {transportationTotal} = req.body;
    const {carInsurance} = req.body;
    const {carPayment} = req.body;
    const {gas} = req.body;
    const {parking} = req.body;
    const {publicTransit} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing updated fields: userId"})
    }
    if (!transportationTotal) {
        res.status(422).json({message: "Missing updated fields: transportationTotal"})
    }
    if (!carInsurance) {
        res.status(422).json({message: "Missing updated fields: carInsurance"})
    }
    if (!carPayment) {
        res.status(422).json({message: "Missing updated fields: carPayment"})
    }
    if (!gas) {
        res.status(422).json({message: "Missing updated fields: gas"})
    }
    if (!parking) {
        res.status(422).json({message: "Missing fields: parking"})
    }
    if (!publicTransit) {
        res.status(422).json({message: "Missing fields: publicTransit"})
    }
    console.log(updatedtransportation);
    transportation.update(id, updatedtransportation)
    .then(transportation => {
        if (transportation) {
        res.status(201).json(transportation)
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
    transportation.remove(id)
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