export{}

const express = require('express')
const router = express.Router()
const usersModel = require('./usersModel')

router.post('/add', async (req: any, res: any) => {
    const { name, email } = req.body
    try {
        await usersModel.createUser({ name, email })
        res.json('added')
    } catch(e) {
        res.json('failure')
    }
})

module.exports = router