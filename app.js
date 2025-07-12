import express from 'express'

const app = express()

app.use((req, res, next) => {
    console.log('This middleware runs every time')
    next()
})

app.use('/hello', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.use('/message', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})

app.use('/', (req, res, next) => {
    res.send('<form action="/message" method="POST"><input type="text" name="message" /><input type="submit" /></form>')
})

app.listen('3000')

