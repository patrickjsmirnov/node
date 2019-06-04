const express = require('express');
const app = express();
const router = express.Router()
const bodyParser = require('body-parser')
const bookRouter = require('./controllers/book')
const authorRouter = require('./controllers/author')

const port:number = 3003

// parse application/json
app.use(bodyParser.json())

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use('/books', bookRouter)
app.use('/authors', authorRouter)