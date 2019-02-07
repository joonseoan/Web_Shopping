const express = require('express');
const router = express.Router();

const products = [];

router.post('/addProducts', (req, res, next) => {
    
    console.log('req.body: ', req.body)

    products.push(req.body.product);

    // res.send(products);
    
    res.redirect('/');

});

module.exports = { router, products };
