const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const adminRouters = require('./routes/admin').router;
const shopRouters = require('./routes/shop'); 

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/admin', adminRouters);
app.use(shopRouters);

app.use('/', (req, res, next) => {

    res.status(404).render('pageNotFound', {docTitle: 'Page Not Found'});

});

app.listen(5000, () => {

    console.log('Server: 5000, Client: 5500');

});