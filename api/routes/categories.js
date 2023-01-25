const router = require('express').Router();
const Category = require('../models/category');



// Post categories

router.post('/', async (req, res) => {

    const newCat = new Category(req.body);

    try{
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);


    }catch (err) {
        res.status(500).json(err);
    }


});

// Get categories

router.get('/', async (req, res) => {

   

    try{
        const cat = await Category.find();
        res.status(200).json(cat);


    }catch (err) {
        res.status(500).json(err);
    }


});


module.exports = router;