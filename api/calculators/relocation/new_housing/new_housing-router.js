const router = require('express').Router();

const newHousing = require('./new_housing-model.js');

const authenticate = require('../../../../auth-middleware/authenticate.js');

router.get('/', authenticate, (req, res) => {
    newHousing.find()
    .then(newHousing => {
        res.status(200).json(newHousing)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', authenticate, (req, res) => {
    const {id} = req.params
    newHousing.findByUser(id)
    .then(newHousing => {
        if (newHousing) {
            res.status(200).json(newHousing)
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
    newHousing.findByItemId(userId, id)
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

router.post('/', authenticate, (req, res) => {
    const newnewHousing = req.body;
    const {userId} = req.body;
    const {housingDeposit} = req.body;
    const {utilitiesDeposit} = req.body;
    const {newHomeTotal} = req.body;
    const {rent} = req.body;
    const {miscellaneousFees} = req.body;
    const {hotelRate} = req.body;
    const {lodgingTotal} = req.body;
    const {expectedLengthOfStay} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing fields: userId"})
    }
    if (!housingDeposit) {
        res.status(422).json({message: "Missing fields: housingDeposit"})
    }
    if (!utilitiesDeposit) {
        res.status(422).json({message: "Missing fields: utilitiesDeposit"})
    }
    if (!newHomeTotal) {
        res.status(422).json({message: "Missing fields: newHomeTotal"})
    }
    if (!rent) {
        res.status(422).json({message: "Missing fields: rent"})
    }
    if (!miscellaneousFees) {
        res.status(422).json({message: "Missing fields: miscellaneousFees"})
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
    console.log(newnewHousing);
    newHousing.add(newnewHousing)
    .then(newHousing => {
        res.status(201).json(newHousing)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:id', authenticate, (req, res) => {
    const updatednewHousing = req.body;
    const {id} = req.params;
    const {userId} = req.body;
    const {housingDeposit} = req.body;
    const {utilitiesDeposit} = req.body;
    const {newHomeTotal} = req.body;
    const {rent} = req.body;
    const {miscellaneousFees} = req.body;
    const {hotelRate} = req.body;
    const {lodgingTotal} = req.body;
    const {expectedLengthOfStay} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing updated fields: userId"})
    }
    if (!housingDeposit) {
        res.status(422).json({message: "Missing updated fields: housingDeposit"})
    }
    if (!utilitiesDeposit) {
        res.status(422).json({message: "Missing updated fields: utilitiesDeposit"})
    }
    if (!newHomeTotal) {
        res.status(422).json({message: "Missing updated fields: newHomeTotal"})
    }
    if (!rent) {
        res.status(422).json({message: "Missing updated fields: rent"})
    }
    if (!miscellaneousFees) {
        res.status(422).json({message: "Missing updated fields: miscellaneousFees"})
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
    console.log(updatednewHousing);
    newHousing.update(id, updatednewHousing)
    .then(newHousing => {
        if (newHousing) {
        res.status(201).json(newHousing)
        } else {
        res.status(404).json({message: "This personal calculator for this user does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:userId/:id', authenticate, (req, res) => {
    const updatednewHousing = req.body;
    const {id} = req.params;
    const {userId} = req.body;
    const {housingDeposit} = req.body;
    const {utilitiesDeposit} = req.body;
    const {newHomeTotal} = req.body;
    const {rent} = req.body;
    const {miscellaneousFees} = req.body;
    const {hotelRate} = req.body;
    const {lodgingTotal} = req.body;
    const {expectedLengthOfStay} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing updated fields: userId"})
    }
    if (!housingDeposit) {
        res.status(422).json({message: "Missing updated fields: housingDeposit"})
    }
    if (!utilitiesDeposit) {
        res.status(422).json({message: "Missing updated fields: utilitiesDeposit"})
    }
    if (!newHomeTotal) {
        res.status(422).json({message: "Missing updated fields: newHomeTotal"})
    }
    if (!rent) {
        res.status(422).json({message: "Missing updated fields: rent"})
    }
    if (!miscellaneousFees) {
        res.status(422).json({message: "Missing updated fields: miscellaneousFees"})
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
    newHousing.updateByItemId(userId, id, updatednewHousing)
    .then(newHousing => {
        if (newHousing) {
        res.status(201).json(newHousing)
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
    newHousing.remove(userId, id)
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