const express = require('express');
const path = require('path');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'webnc-test-secret',
  resave: false,
  saveUninitialized: false
}));

app.use('/', authRoutes);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
