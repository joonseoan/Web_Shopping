const express = require('express');
const router = express.Router();

const products = [];

router.get('/addProducts', (req, res, next) => {

    console.log('admin/addProducts, GET');
    // res.render('addProducts', {
    //     docTitle: 'Add Products',
    //     path: '/admin/addProducts',
    //     activeAddProducts: true,
    //     productCSS: true
    // });

});

router.post('/addProducts', (req, res, next) => {
    
    // console.log(req.body.title);
    console.log('/admin/addProducts, POST')
    products.push(req.body);
    console.log(products);

    res.redirect('/');

});

module.exports = { router, products };
