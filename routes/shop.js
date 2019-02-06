const express = require('express');

const router = express.Router();
 
const rootDir = require('../utils/path');
const { products } = require('./admin');

router.get('/', (req, res, next) => {

   console.log('products at shop: ', products)
   
   // res.render('shop', { 
   //    products, 
   //    docTitle: 'Shop', 
   //    path: '/', 
   //    hasProducts: products.length > 0,
   //    activeShop: true,
   //    mainCSS: true

   //    // "layout" is a special key not to use default layout, "main-layout.hbs"
   //    // layout: false
   // });
   
});

module.exports = router;