const router = require('express').Router();

const clothing = require('./clothing-model.js');

router.get('/', (req, res) => {
    clothing.find()
    .then(clothing => {
        res.status(200).json(clothing)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    clothing.findByUser(id)
    .then(clothing => {
        if (clothing) {
            res.status(200).json(clothing)
        } else {
            res.status(404).json({message: "That user's personal running total calculator does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.get('/:userId/:id', (req, res) => {
    const {userId} = req.params
    const {id} = req.params
    clothing.findByItemId(userId, id)
    .then(clothing => {
        if (clothing) {
            res.status(200).json(clothing)
        } else {
            res.status(404).json({message: "Could not retrieve specific calculator by user ID"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.post('/', (req, res) => {
    const newClothing = req.body;
    const {userId} = req.body;
    const {clothingTotal} = req.body;
    const {adults} = req.body;
    const {children} = req.body;
    const {cleaningLaundry} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing fields: userId"})
    }
    if (!clothingTotal) {
        res.status(422).json({message: "Missing fields: clothingTotal"})
    }
    if (!adults) {
        res.status(422).json({message: "Missing fields: adults"})
    }
    if (!children) {
        res.status(422).json({message: "Missing fields: children"})
    }
    if (!cleaningLaundry) {
        res.status(422).json({message: "Missing fields: cleaningLaundry"})
    }
    console.log(newClothing);
    clothing.add(newClothing)
    .then(clothing => {
        res.status(201).json(clothing)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:id', (req, res) => {
    const updatedClothing = req.body;
    const {id} = req.params;
    const {userId} = req.body;
    const {clothingTotal} = req.body;
    const {adults} = req.body;
    const {children} = req.body;
    const {cleaningLaundry} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing updated fields: userId"})
    }
    if (!clothingTotal) {
        res.status(422).json({message: "Missing updated fields: clothingTotal"})
    }
    if (!adults) {
        res.status(422).json({message: "Missing updated fields: adults"})
    }
    if (!children) {
        res.status(422).json({message: "Missing updated fields: children"})
    }
    if (!cleaningLaundry) {
        res.status(422).json({message: "Missing updated fields: cleaningLaundry"})
    }
    console.log(updatedClothing);
    clothing.update(id, updatedClothing)
    .then(clothing => {
        if (clothing) {
        res.status(201).json(clothing)
        } else {
        res.status(404).json({message: "This personal calculator for this user does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:userId/:id', (req, res) => {
    const updatedClothing = req.body;
    const {id} = req.params;
    const {userId} = req.body;
    const {clothingTotal} = req.body;
    const {adults} = req.body;
    const {children} = req.body;
    const {cleaningLaundry} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing updated fields: userId"})
    }
    if (!clothingTotal) {
        res.status(422).json({message: "Missing updated fields: clothingTotal"})
    }
    if (!adults) {
        res.status(422).json({message: "Missing updated fields: adults"})
    }
    if (!children) {
        res.status(422).json({message: "Missing updated fields: children"})
    }
    if (!cleaningLaundry) {
        res.status(422).json({message: "Missing updated fields: cleaningLaundry"})
    }
    clothing.updateByItemId(userId, id, updatedClothing)
    .then(clothing => {
        if (clothing) {
        res.status(201).json(clothing)
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
    clothing.remove(userId, id)
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