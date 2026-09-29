const express = require('express');
const path = require('path');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/students', studentRoutes);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
