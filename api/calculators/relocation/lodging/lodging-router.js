const router = require('express').Router();

const lodging = require('./lodging-model.js');

router.get('/', (req, res) => {
    lodging.find()
    .then(lodge => {
        res.status(200).json(lodge)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    lodging.findByUser(id)
    .then(lodging => {
        if (lodging) {
            res.status(200).json(lodging)
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
    lodging.findByItemId(userId, id)
    .then(lodging => {
        if (lodging) {
            res.status(200).json(lodging)
        } else {
            res.status(404).json({message: "Could not retrieve specific calculator by user ID"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.post('/', (req, res) => {
    const newlodge = req.body;
    const {userId} = req.body;
    const {hotelRate} = req.body;
    const {lodgingTotal} = req.body;
    const {expectedLengthOfStay} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing fields: userId"})
    }
    if (!hotelRate) {
        res.status(422).json({message: "Missing fields: hotelRate"})
    }
    if (!lodgingTotal) {
        res.status(422).json({message: "Missing fields: lodgingTotal"})
    }
    if (!expectedLengthOfStay) {
        res.status(422).json({message: "Missing fields: expectedLengthOfStay"})
    }
    console.log(newlodge);
    lodging.add(newlodge)
    .then(lodge => {
        res.status(201).json(lodge)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:id', (req, res) => {
    const updatedlodge = req.body;
    const {id} = req.params;
    const {userId} = req.body;
    const {hotelRate} = req.body;
    const {lodgingTotal} = req.body;
    const {expectedLengthOfStay} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing updated fields: userId"})
    }
    if (!hotelRate) {
        res.status(422).json({message: "Missing updated fields: hotelRate"})
    }
    if (!lodgingTotal) {
        res.status(422).json({message: "Missing updated fields: lodgingTotal"})
    }
    if (!expectedLengthOfStay) {
        res.status(422).json({message: "Missing updated fields: expectedLengthOfStay"})
    }
    console.log(updatedlodge);
    lodging.update(id, updatedlodge)
    .then(lodge => {
        if (lodge) {
        res.status(201).json(lodge)
        } else {
        res.status(404).json({message: "This personal calculator for this user does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:userId/:id', (req, res) => {
    const updatedlodge = req.body;
    const {id} = req.params;
    const {userId} = req.body;
    const {hotelRate} = req.body;
    const {lodgingTotal} = req.body;
    const {expectedLengthOfStay} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing updated fields: userId"})
    }
    if (!hotelRate) {
        res.status(422).json({message: "Missing updated fields: hotelRate"})
    }
    if (!lodgingTotal) {
        res.status(422).json({message: "Missing updated fields: lodgingTotal"})
    }
    if (!expectedLengthOfStay) {
        res.status(422).json({message: "Missing updated fields: expectedLengthOfStay"})
    }
    lodging.updateByItemId(userId, id, updatedlodge)
    .then(lodge => {
        if (lodge) {
        res.status(201).json(lodge)
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
    lodging.remove(userId, id)
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