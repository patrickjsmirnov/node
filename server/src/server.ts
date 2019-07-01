const express = require('express');
const app = express();
const router = express.Router()
const path = require('path');
const bodyParser = require('body-parser')
const bookRouter = require('./controllers/book')
const authorRouter = require('./controllers/author')

const port:number = 3003

app.use(express.static('public'));
app.use(bodyParser.json())

app.listen(port, () => console.log(`App listening on port ${port}!`))

app.use('/books', bookRouter)
app.use('/authors', authorRouter)

app.get('*', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '../../public/')});
});