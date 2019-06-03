export{}

const express = require('express')
const router = express.Router()
const book = require('../models/book')

interface Book {
    id: number,
    title: string,
    author: string,
    description: string,
}

router.get('/', async (req: any, res: any) => {
    const books:Book[] = await book.getBooks();
    res.json(books)
})

router.get('/:id', async (req: any, res: any) => {
    const books:Book[] = await book.getBook(req.params.id);
    res.json(books)
})

module.exports = router