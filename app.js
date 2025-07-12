import fs from 'fs'

import express from 'express'
import bodyParser from 'body-parser'
import adminRoutes from './routes/admin.js'
import homeRoutes from './routes/home.js'

const app = express()
const bodyParserMiddleware = bodyParser.urlencoded({ extended: false })

// Custom Middlewares
// Middleware to parse incoming request bodies
app.use(bodyParserMiddleware) // for using third-party middlewares we must use app.use()

app.use(express.static('public')) // Serve static files from the 'public' directory

// Routes Start
app.use('/admin', adminRoutes)
app.use(homeRoutes)
// Routes End

app.use((req, res) => {
    res.status(404).sendFile('404.html', { root: 'views' })
})

app.listen('3000')

