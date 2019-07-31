const router = require('express').Router();

const workLife = require('./work_life-model');

router.get('/', (req, res) => {
    workLife.find()
    .then(workLife => {
        res.status(200).json(workLife)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    workLife.findById(id)
    .then(workLife => {
        if (workLife) {
            res.status(200).json(workLife)
        } else {
            res.status(404).json({message: "That user's personal running total calculator does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.post('/', (req, res) => {
    const newworkLife = req.body;
    const {userId} = req.body;
    const {workLifeTotal} = req.body;
    const {incomeLoss} = req.body;
    const {jobSkillsTraining} = req.body;
    const {miscellaneousFees} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing fields: userId"})
    }
    if (!workLifeTotal) {
        res.status(422).json({message: "Missing fields: workLifeTotal"})
    }
    if (!incomeLoss) {
        res.status(422).json({message: "Missing fields: incomeLoss"})
    }
    if (!jobSkillsTraining) {
        res.status(422).json({message: "Missing fields: jobSkillsTraining"})
    }
    if (!miscellaneousFees) {
        res.status(422).json({message: "Missing fields: miscellaneousFees"})
    }
    console.log(newworkLife);
    workLife.add(newworkLife)
    .then(workLife => {
        res.status(201).json(workLife)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:id', (req, res) => {
    const updatedworkLife = req.body;
    const {id} = req.params;
    const {userId} = req.body;
    const {workLifeTotal} = req.body;
    const {incomeLoss} = req.body;
    const {jobSkillsTraining} = req.body;
    const {miscellaneousFees} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing updated fields: userId"})
    }
    if (!workLifeTotal) {
        res.status(422).json({message: "Missing updated fields: workLifeTotal"})
    }
    if (!incomeLoss) {
        res.status(422).json({message: "Missing updated fields: incomeLoss"})
    }
    if (!jobSkillsTraining) {
        res.status(422).json({message: "Missing updated fields: jobSkillsTraining"})
    }
    if (!miscellaneousFees) {
        res.status(422).json({message: "Missing updated fields: miscellaneousFees"})
    }
    console.log(updatedworkLife);
    workLife.update(id, updatedworkLife)
    .then(workLife => {
        if (workLife) {
        res.status(201).json(workLife)
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
    workLife.remove(id)
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