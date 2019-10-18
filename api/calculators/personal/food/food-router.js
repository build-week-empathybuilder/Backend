const router = require('express').Router();

const food = require('./food-model.js');

const authenticate = require('../../../../auth-middleware/authenticate.js');

router.get('/', authenticate, (req, res) => {
    food.find()
    .then(food => {
        res.status(200).json(food)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', authenticate, (req, res) => {
    const {id} = req.params
    food.findByUser(id)
    .then(food => {
        if (food) {
            res.status(200).json(food)
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
    food.findByItemId(userId, id)
    .then(food => {
        if (food) {
            res.status(200).json(food)
        } else {
            res.status(404).json({message: "Could not retrieve specific calculator by user ID"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.post('/', authenticate, (req, res) => {
    const newFood = req.body;
    const {userId} = req.body;
    const {foodTotal} = req.body;
    const {groceries} = req.body;
    const {restaurantsTakeout} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing fields: userId"})
    }
    if (!foodTotal) {
        res.status(422).json({message: "Missing fields: foodTotal"})
    }
    if (!groceries) {
        res.status(422).json({message: "Missing fields: groceries"})
    }
    if (!restaurantsTakeout) {
        res.status(422).json({message: "Missing fields: restaurantsTakeout"})
    }
    console.log(newFood);
    food.add(newFood)
    .then(food => {
        res.status(201).json(food)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:id', authenticate, (req, res) => {
    const updatedFood = req.body;
    const {id} = req.params;
    const {userId} = req.body;
    const {foodTotal} = req.body;
    const {groceries} = req.body;
    const {restaurantsTakeout} = req.body;

    console.log(updatedFood);
    food.update(id, updatedFood)
    .then(food => {
        if (food) {
        res.status(201).json(food)
        } else {
        res.status(404).json({message: "This personal calculator for this user does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:userId/:id', authenticate, (req, res) => {
    const updatedFood = req.body;
    const {id} = req.params;
    const {userId} = req.params;
    const {groceries} = req.body;
    const {restaurantsTakeout} = req.body;
    const {foodTotal} = (req.body.groceries + req.body.restaurantsTakeout)
    if (!groceries) {
        res.status(422).json({message: "Missing updated fields: groceries"})
    }
    if (!restaurantsTakeout) {
        res.status(422).json({message: "Missing updated fields: restaurantsTakeout"})
    }
    food.updateByItemId(userId, id, updatedFood)
    .then(food => {
        if (food) {
        res.status(201).json(food)
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
    food.remove(userId, id)
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