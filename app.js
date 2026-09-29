const express = requre('express');
const path = require('path');
const subjectRoutes = require('./routes/subjectRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/subjects', subjectRoutes);

app.lsiten(3000, () => {
  console.log('Server running');
});
