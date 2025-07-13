import express from 'express'

const app = express()

app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', 'views')

app.get('/', (req, res) => {
    const arr = [
        { name: 'John', age: 30 },
        { name: 'Jane', age: 25 },
        { name: 'Doe', age: 40 }
    ]
    res.render('index', { title: 'My webpage', users: arr, path: '/' })
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
