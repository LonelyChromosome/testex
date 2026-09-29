const express = require('express');
const path = require('path');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.use('/students', studentRoutes);

app.listen(3000);
