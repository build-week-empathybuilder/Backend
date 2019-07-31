const router = require('express').Router();

const clothing = require('./clothing-model.js');

router.get('/', (req, res) => {
    clothing.find()
    .then(Clothing => {
        res.status(200).json(Clothing)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    clothing.findById(id)
    .then(Clothing => {
        if (Clothing) {
            res.status(200).json(Clothing)
        } else {
            res.status(404).json({message: "That user's personal running total calculator does not exist!"})
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
    .then(Clothing => {
        res.status(201).json(Clothing)
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
    .then(Clothing => {
        if (Clothing) {
        res.status(201).json(Clothing)
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
    clothing.remove(id)
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