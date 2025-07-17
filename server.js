
import express from 'express'
import bodyParser from 'body-parser'

import { setStatics } from './utils/statics.js'
import adminRoutes from './routes/admin.js'
import indexRoutes from './routes/index.js'
import { get404 } from './controllers/error.js'
import sequelize from './utils/database.js'

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
app.use('/admin', adminRoutes)
app.use(indexRoutes)
// End of routes

// 404
app.use(get404)

// Syncing DB
sequelize.sync()
    .then(result => {
        console.log(result)
        app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000')
        })
    })
    .catch((err) => {
        console.log('There is an error while connecting to database: ', err)
    })

// Start of Server
