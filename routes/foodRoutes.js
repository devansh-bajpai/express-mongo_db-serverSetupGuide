const express = require('express');
const router = express.Router();

const Food = require('./../models/Food');


router.get('/', async (req, res) => {
    try{
        const data = await Food.find();
        res.status(200).json(data);
        console.log('Food data fetched...');
    }
    catch(err) {
        console.log(err);
        res.status(500).json({error: 'An error has occurred'});
    }


})


router.get('/', async (req, res) => {
    try{
        const cost = req.params.cost;
        // const data = await Food.find({cost: {$lt: 500}});
        const data = await Food.find({cost: 600});
        res.status(200).json(data);
        console.log('Food data fetched...');
    }
    catch(err) {
        console.log('error:', err);
        res.status(500).json({error: "an error occurred..."});
    }
})
module.exports = router;