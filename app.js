const express = require('express');
const path = require('path');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/books', bookRoutes);
app.listen(3000);
