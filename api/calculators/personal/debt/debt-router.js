const router = require('express').Router();

const debt = require('./debt-model.js');

router.get('/', (req, res) => {
    debt.find()
    .then(debt => {
        res.status(200).json(debt)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    debt.findByUser(id)
    .then(debt => {
        if (debt) {
            res.status(200).json(debt)
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
    debt.findByItemId(userId, id)
    .then(debt => {
        if (debt) {
            res.status(200).json(debt)
        } else {
            res.status(404).json({message: "Could not retrieve specific calculator by user ID"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.post('/', (req, res) => {
    const newdebt = req.body;
    const {userId} = req.body;
    const {debtTotal} = req.body;
    const {personalLoans} = req.body;
    const {studentLoans} = req.body;
    const {creditCardPayments} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing fields: userId"})
    }
    if (!debtTotal) {
        res.status(422).json({message: "Missing fields: debtTotal"})
    }
    if (!personalLoans) {
        res.status(422).json({message: "Missing fields: personalLoans"})
    }
    if (!studentLoans) {
        res.status(422).json({message: "Missing fields: studentLoans"})
    }
    if (!creditCardPayments) {
        res.status(422).json({message: "Missing fields: creditCardPayments"})
    }
    console.log(newdebt);
    debt.add(newdebt)
    .then(debt => {
        res.status(201).json(debt)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:id', (req, res) => {
    const updatedDebt = req.body;
    const {id} = req.params;
    const {userId} = req.body;
    const {debtTotal} = req.body;
    const {personalLoans} = req.body;
    const {studentLoans} = req.body;
    const {creditCardPayments} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing updated fields: userId"})
    }
    if (!debtTotal) {
        res.status(422).json({message: "Missing updated fields: debtTotal"})
    }
    if (!personalLoans) {
        res.status(422).json({message: "Missing updated fields: personalLoans"})
    }
    if (!studentLoans) {
        res.status(422).json({message: "Missing updated fields: studentLoans"})
    }
    if (!creditCardPayments) {
        res.status(422).json({message: "Missing updated fields: creditCardPayments"})
    }
    console.log(updatedDebt);
    debt.update(id, updatedDebt)
    .then(debt => {
        if (debt) {
        res.status(201).json(debt)
        } else {
        res.status(404).json({message: "This personal calculator for this user does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:userId/:id', (req, res) => {
    const updatedDebt = req.body;
    const {id} = req.params;
    const {userId} = req.body;
    const {debtTotal} = req.body;
    const {personalLoans} = req.body;
    const {studentLoans} = req.body;
    const {creditCardPayments} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing updated fields: userId"})
    }
    if (!debtTotal) {
        res.status(422).json({message: "Missing updated fields: debtTotal"})
    }
    if (!personalLoans) {
        res.status(422).json({message: "Missing updated fields: personalLoans"})
    }
    if (!studentLoans) {
        res.status(422).json({message: "Missing updated fields: studentLoans"})
    }
    if (!creditCardPayments) {
        res.status(422).json({message: "Missing updated fields: creditCardPayments"})
    }
    debt.updateByItemId(userId, id, updatedDebt)
    .then(debt => {
        if (debt) {
        res.status(201).json(debt)
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
    debt.remove(userId, id)
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