const express = require('express');
const app = express();
const router = express.Router()
const bookRouter = require('./controllers/book')

const port:number = 3003 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use('/books', bookRouter)