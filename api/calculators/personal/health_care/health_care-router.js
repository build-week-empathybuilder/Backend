const router = require('express').Router();

const healthCare = require('./health_care-model');

router.get('/', (req, res) => {
    healthCare.find()
    .then(healthCare => {
        res.status(200).json(healthCare)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    healthCare.findById(id)
    .then(healthCare => {
        if (healthCare) {
            res.status(200).json(healthCare)
        } else {
            res.status(404).json({message: "That user's personal running total calculator does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.post('/', (req, res) => {
    const newhealthCare = req.body;
    const {userId} = req.body;
    const {healthCareTotal} = req.body;
    const {insuranceCost} = req.body;
    const {copays} = req.body;
    const {rxAndMedicalEquipment} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing fields: userId"})
    }
    if (!healthCareTotal) {
        res.status(422).json({message: "Missing fields: healthCareTotal"})
    }
    if (!insuranceCost) {
        res.status(422).json({message: "Missing fields: insuranceCost"})
    }
    if (!copays) {
        res.status(422).json({message: "Missing fields: copays"})
    }
    if (!rxAndMedicalEquipment) {
        res.status(422).json({message: "Missing fields: rxAndMedicalEquipment"})
    }
    console.log(newhealthCare);
    healthCare.add(newhealthCare)
    .then(healthCare => {
        res.status(201).json(healthCare)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:id', (req, res) => {
    const updatedhealthCare = req.body;
    const {id} = req.params;
    const {userId} = req.body;
    const {healthCareTotal} = req.body;
    const {insuranceCost} = req.body;
    const {copays} = req.body;
    const {rxAndMedicalEquipment} = req.body;
    if (!userId) {
        res.status(422).json({message: "Missing updated fields: userId"})
    }
    if (!healthCareTotal) {
        res.status(422).json({message: "Missing updated fields: healthCareTotal"})
    }
    if (!insuranceCost) {
        res.status(422).json({message: "Missing updated fields: insuranceCost"})
    }
    if (!copays) {
        res.status(422).json({message: "Missing updated fields: copays"})
    }
    if (!rxAndMedicalEquipment) {
        res.status(422).json({message: "Missing updated fields: rxAndMedicalEquipment"})
    }
    console.log(updatedhealthCare);
    healthCare.update(id, updatedhealthCare)
    .then(healthCare => {
        if (healthCare) {
        res.status(201).json(healthCare)
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
    healthCare.remove(id)
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