export{}

const express = require('express')
const router = express.Router()
const author = require('../models/author')

interface Author {
    id: number,
    first_name: string,
    last_name: string,
}

router.get('/', async (req: any, res: any) => {
    const authors:Author[] = await author.getAuthors();
    res.json(authors)
})

router.get('/:id', async (req: any, res: any) => {
    const authors:Author[] = await author.getAuthor(req.params.id);
    res.json(authors)
})

module.exports = router