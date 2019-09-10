const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/', (req,res) => {
    db.select('*').from('cars').then(cars => res.status(200).json(cars)).catch(err => res.status(500).json(err.message))
})

router.post('/', (req,res) => {
    const newCar = req.body;
    console.log('newcar', newCar);
    db('cars').insert(newCar)
    .then(resp => res.send(resp))
    .catch(err => res.status(500).json(err.message))
})

router.put('/:id', (req,res) => {
    const modCar = req.body;
    db('cars').where({id : req.params.id}).update(modCar)
    .then(resp => res.status(202).json(resp))
    .catch(err => res.status(500).json(err.message));
})

router.delete('/:id', (req,res) => {
    db('cars').where({id : req.params.id}).del()
    .then((delVal) => {
        if (delVal) {
            res.status(204).end()
        } else {
            res.status(404).json(`no id ${req.params.id} found in the database. error deleting`)
        }
    })
    .catch(err => res.status(500).json(err.message))
})

module.exports = router;

