const router = require('express').Router();

const transportation = require('./transportation-model.js');

const authenticate = require('../../../../auth-middleware/authenticate.js');

router.get('/', authenticate, (req, res) => {
    transportation.find()
    .then(transportation => {
        res.status(200).json(transportation)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', authenticate, (req, res) => {
    const {id} = req.params
    transportation.findByUser(id)
    .then(transportation => {
        if (transportation) {
            res.status(200).json(transportation)
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
    transportation.findByItemId(userId, id)
    .then(transportation => {
        if (transportation) {
            res.status(200).json(transportation)
        } else {
            res.status(404).json({message: "Could not retrieve specific calculator by user ID"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.post('/', authenticate, (req, res) => {
    const newtransportation = req.body;
    const {userId} = req.body;
    const {transportationTotal} = req.body;
    const {carInsurance} = req.body;
    const {carPayment} = req.body;
    const {gas} = req.body;
    const {parking} = req.body;
    const {localTransport} = req.body;
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
    if (!localTransport) {
        res.status(422).json({message: "Missing fields: localTransport"})
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

router.put('/:id', authenticate, (req, res) => {
    const updatedtransportation = req.body;
    const {id} = req.params;
    const {userId} = req.body;
    const {transportationTotal} = req.body;
    const {carInsurance} = req.body;
    const {carPayment} = req.body;
    const {gas} = req.body;
    const {parking} = req.body;
    const {localTransport} = req.body;
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
    if (!localTransport) {
        res.status(422).json({message: "Missing fields: localTransport"})
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

router.put('/:userId/:id', authenticate, (req, res) => {
    const updatedtransportation = req.body;
    const {id} = req.params;
    const {userId} = req.body;
    const {transportationTotal} = req.body;
    const {carInsurance} = req.body;
    const {carPayment} = req.body;
    const {gas} = req.body;
    const {parking} = req.body;
    const {localTransport} = req.body;
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
    if (!localTransport) {
        res.status(422).json({message: "Missing fields: localTransport"})
    }
    transportation.updateByItemId(userId, id, updatedtransportation)
    .then(transportation => {
        if (transportation) {
        res.status(201).json(transportation)
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
    transportation.remove(userId, id)
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