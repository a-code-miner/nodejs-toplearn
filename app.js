import express from 'express'
import bodyParser from 'body-parser'


const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.urlencoded({ extended: false })) // Alternative to bodyParser for parsing URL-encoded data but not recommended

app.use((req, res, next) => {
    console.log('First middleware')
    req.mortaza = { name: 'Mortaza' }
    next()
})

app.get('/', (req, res) => {
    res.send(`<h1>Hello ${req.mortaza.name}</h1>`)
})

app.get('/hello', (req, res) => {
    res.send(`<h1>Hello World</h1>`)
})


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
