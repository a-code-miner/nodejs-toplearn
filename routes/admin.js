import fs from 'fs'

import express from 'express'
import { Router } from 'express'

const router = Router()

router.get('/', (req, res, next) => {
    res.send('<h1>Admin</h1>')
})

router.post('/message', (req, res) => {
    console.log(req.body)
    const message = req.body.message
    fs.writeFile('./data/message.txt', message, (err) => {
        if (err) throw err
        res.redirect('/')
    })
})


export default router
