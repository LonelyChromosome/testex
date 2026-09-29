const express = require('express');
const path = require('path');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.use('/products', productRoutes);

app.listen(3000);
