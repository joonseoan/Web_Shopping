const express = require('express');

const router = express.Router();
 
// const rootDir = require('../utils/path');
const { products } = require('./admin');

router.get('/shop', (req, res, next) => {

   res.send(products);
   
});

module.exports = router;