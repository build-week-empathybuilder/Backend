const router = require('express').Router();

const newTransport = require('./new_transportation-model.js');

router.get('/', (req, res) => {
    newTransport.find()
    .then(newTransport => {
        res.status(200).json(newTransport)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    newTransport.findById(id)
    .then(newTransport => {
        if (newTransport) {
            res.status(200).json(newTransport)
        } else {
            res.status(404).json({message: "That user's personal running total calculator does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.post('/', (req, res) => {
    const newnewTransport = req.body;
    const {userId} = req.body;
    const {newTransportationTotal} = req.body;
    const {carRental} = req.body;
    const {movingTruckRental} = req.body;
    const {gas} = req.body;
    const {airlineBusTickets} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing fields: userId"})
    }
    if (!newTransportationTotal) {
        res.status(422).json({message: "Missing fields: newTransportationTotal"})
    }
    if (!carRental) {
        res.status(422).json({message: "Missing fields: carRental"})
    }
    if (!movingTruckRental) {
        res.status(422).json({message: "Missing fields: movingTruckRental"})
    }
    if (!gas) {
        res.status(422).json({message: "Missing fields: gas"})
    }
    if (!airlineBusTickets) {
        res.status(422).json({message: "Missing fields: airlineBusTickets"})
    }
    console.log(newnewTransport);
    newTransport.add(newnewTransport)
    .then(newTransport => {
        res.status(201).json(newTransport)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:id', (req, res) => {
    const updatednewTransport = req.body;
    const {id} = req.params;
    const {userId} = req.body;
    const {newTransportationTotal} = req.body;
    const {carRental} = req.body;
    const {movingTruckRental} = req.body;
    const {gas} = req.body;
    const {airlineBusTickets} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing updated fields: userId"})
    }
    if (!newTransportationTotal) {
        res.status(422).json({message: "Missing updated fields: newTransportationTotal"})
    }
    if (!carRental) {
        res.status(422).json({message: "Missing updated fields: carRental"})
    }
    if (!movingTruckRental) {
        res.status(422).json({message: "Missing updated fields: movingTruckRental"})
    }
    if (!gas) {
        res.status(422).json({message: "Missing updated fields: gas"})
    }
    if (!airlineBusTickets) {
        res.status(422).json({message: "Missing updated fields: airlineBusTickets"})
    }
    console.log(updatednewTransport);
    newTransport.update(id, updatednewTransport)
    .then(newTransport => {
        if (newTransport) {
        res.status(201).json(newTransport)
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
    newTransport.remove(id)
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