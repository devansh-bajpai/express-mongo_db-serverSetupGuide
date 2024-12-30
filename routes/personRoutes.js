const express = require('express');
const router = express.Router()

const Person = require('./../models/Person');


router.get('/', async (req, res) => {
    try{
        const data = await Person.find();
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json({error: 'an Error occurred.'});
        console.log(err);
    }
})

router.get('/:work', async (req, res) => {
    try{
        const work = req.params.work;
        const data = await Person.find({work: work})
        res.status(200).json(data);
    }
    catch(err) {
        console.log(err);
        res.status(500).json({error: 'an error has occurred.'});
    }
})


router.put('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const updatedData = req.body;

        const response = await Person.findByIdAndUpdate(id, updatedData, {
            new: true,
            runValidators: true
        })

        if (!response) {
            res.status(404).json({error: 'user not found...'});
        }
        else {

            console.log('stuff updated...');
            res.status(200).json(response);
        }


    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'an error occurred...'});
    }
})



module.exports = router;