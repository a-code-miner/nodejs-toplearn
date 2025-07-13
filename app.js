import express from 'express'
import { engine } from 'express-handlebars'


const app = express()

app.use(express.static('public'))

app.engine('hbs', engine({ extname: 'hbs', defaultLayout: 'main', layoutsDir: 'views/layouts', partialsDir: 'views/partials' }))

app.set('view engine', 'hbs')
app.set('views', 'views')

app.get('/hello', (req, res) => {
    res.send(`<h1>Hello World</h1>`)
})

app.get('/', (req, res) => {
    const arr = [
        { name: 'John', age: 30 },
        { name: 'Jane', age: 25 },
        { name: 'Doe', age: 40 }
    ]
    res.render('index', { title: 'My webpage', users: arr, home: true, hasName: arr.length > 0 })
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
