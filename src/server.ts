const express = require('express');
const app = express();
const { port } = require('../config')
const book = require('./models/book')

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/', async (req: any, res: any) => {
    interface Book {
        id: number,
        title: string,
        author: string,
        description: string,
    }
    
    const books:Book[] = await book.getBooks();
    res.json(books)
})