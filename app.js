import fs from 'fs'

import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const bodyParserMiddleware = bodyParser.urlencoded({ extended: false })

app.use(bodyParserMiddleware) // for using third-party middlewares we must use app.use()

app.use((req, res, next) => {
    console.log('This middleware runs every time')
    next()
})

app.get('/', (req, res, next) => {
    res.send('<form action="/message" method="POST"><input type="text" name="message" /><input type="submit" /></form>')
})

app.get('/hello', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.post('/message', (req, res) => {
    console.log(req.body)
    const message = req.body.message
    fs.writeFile('./data/message.txt', message, (err) => {
        if (err) throw err
        res.redirect('/')
    })
})


app.listen('3000')

