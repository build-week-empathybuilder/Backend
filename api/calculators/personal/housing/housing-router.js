const router = require('express').Router();

const housing = require('./housing-model.js');

router.get('/', (req, res) => {
    housing.find()
    .then(housing => {
        res.status(200).json(housing)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    housing.findByUser(id)
    .then(housing => {
        if (housing) {
            res.status(200).json(housing)
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
    housing.findByItemId(userId, id)
    .then(housing => {
        if (housing) {
            res.status(200).json(housing)
        } else {
            res.status(404).json({message: "Could not retrieve specific calculator by user ID"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.post('/', (req, res) => {
    const newhousing = req.body;
    const {userId} = req.body;
    const {housingTotal} = req.body;
    const {rent} = req.body;
    const {deposit} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing fields: userId"})
    }
    if (!housingTotal) {
        res.status(422).json({message: "Missing fields: housingTotal"})
    }
    if (!rent) {
        res.status(422).json({message: "Missing fields: rent"})
    }
    if (!deposit) {
        res.status(422).json({message: "Missing fields: deposit"})
    }
    console.log(newhousing);
    housing.add(newhousing)
    .then(housing => {
        res.status(201).json(housing)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:id', (req, res) => {
    const updatedhousing = req.body;
    const {id} = req.params;
    const {userId} = req.body;
    const {housingTotal} = req.body;
    const {rent} = req.body;
    const {deposit} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing updated fields: userId"})
    }
    if (!housingTotal) {
        res.status(422).json({message: "Missing updated fields: housingTotal"})
    }
    if (!rent) {
        res.status(422).json({message: "Missing updated fields: rent"})
    }
    if (!deposit) {
        res.status(422).json({message: "Missing updated fields: deposit"})
    }
    console.log(updatedhousing);
    housing.update(id, updatedhousing)
    .then(housing => {
        if (housing) {
        res.status(201).json(housing)
        } else {
        res.status(404).json({message: "This personal calculator for this user does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:userId/:id', (req, res) => {
    const updatedhousing = req.body;
    const {id} = req.params;
    const {userId} = req.body;
    const {housingTotal} = req.body;
    const {rent} = req.body;
    const {deposit} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing updated fields: userId"})
    }
    if (!housingTotal) {
        res.status(422).json({message: "Missing updated fields: housingTotal"})
    }
    if (!rent) {
        res.status(422).json({message: "Missing updated fields: rent"})
    }
    if (!deposit) {
        res.status(422).json({message: "Missing updated fields: deposit"})
    }
    housing.updateByItemId(userId, id, updatedhousing)
    .then(housing => {
        if (housing) {
        res.status(201).json(housing)
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
    housing.remove(userId, id)
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