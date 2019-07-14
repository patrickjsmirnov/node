const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');

mongoose.connect('mongodb://127.0.0.1:27017');
    
const mongoDb = mongoose.connection;
mongoDb.on('error', console.error.bind(console, 'connection error:'));
mongoDb.once('open', () => console.log('connected to mongoDb'));

console.log(require('./components/users/usersModel'));

require('./config/passport');

const bodyParser = require('body-parser');
const bookRouter = require('./components/books/booksController');
const authorRouter = require('./components/authors/authorsController');
const usersRouter = require('./components/users/usersController');


const port:number = 3003;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));


app.listen(port, () => console.log(`App listening on port ${port}!`))

app.use('/books', bookRouter)
app.use('/authors', authorRouter)
app.use('/users', usersRouter)

app.get('*', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '../../public/')});
});