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


// Routes Start
app.use('/admin', adminRoutes)
app.use(homeRoutes)
// Routes End


app.listen('3000')

