import express from 'express'
import bodyParser from 'body-parser'


const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

app.set('view engine', 'pug')
app.set('views', 'views')

app.get('/hello', (req, res) => {
    res.send(`<h1>Hello World</h1>`)
})

app.get('/', (req, res) => {
    const arr = [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 25 },
        { name: 'Charlie', age: 35 }
    ]
    res.render('index', { title: 'Welcome to my app', data: arr })
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
