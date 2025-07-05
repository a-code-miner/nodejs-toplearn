import express from 'express'

const app = express()

app.use((req, res, next) => {
    console.log('First middleware')
    next()
})

app.use((req, res, next) => {
    console.log('Second middleware')
    res.send('<h1>Hello from the second middleware!</h1>')
})

app.listen('3000')

