export{}

const express = require('express')
const router = express.Router()
const book = require('../models/book')

interface Book {
    id: number,
    title: string,
    author_id: number,
    description: string,
}

router.get('/', async (req: any, res: any) => {
    const { author_id: authorId, limit, sort_by: sortBy } = req.query
    const books:Book[] = await book.getBooks({authorId, limit, sortBy});
    
    res.json(books)
})

router.get('/:id', async (req: any, res: any) => {
    const books:Book[] = await book.getBook(req.params.id);
    res.json(books)
})

router.post('/add', async (req: any, res: any) => {
    const { id, title, author_id, description } = req.body
    const addedBook: Book = {
        id,
        title,
        author_id,
        description,
    }
    try {
        const books:Book[] = await book.addBook(addedBook);
        const success: string = 'success1';
        res.json(success)
    } catch(e) {
        const failure: string = 'failure';
        res.json(failure)
    }
})

module.exports = router