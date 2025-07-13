
import express from 'express'
import bodyParser from 'body-parser'

import { setStatics } from './utils/statics.js'

const app = express()

// Start of Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
// End of Middlewares

// Start of View Engine => (EJS)
app.set('view engine', 'ejs')
app.set('views', 'views')
// End of View Engine => (EJS)

// Start of Static Files
setStatics(app)
// End of Static Files

// Start of routes
app.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'Home Page',
        message: 'Welcome to the Home Page!'
    })
})
// End of routes


// Start of Server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
