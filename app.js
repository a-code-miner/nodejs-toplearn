import express from 'express'
import session from 'express-session'

const app = express()

// Custom middleware
app.use(session({
    secret: 'password1234',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 }
}))

// Routes
app.get('/', (req, res) => {
    if (req.session.page_views) {
        req.session.page_views++
        res.send(`You visited this page ${req.session.page_views} times`)
    } else {
        req.session.page_views = 1
        res.send('Welcome to this page for the first time!')
    }
    console.log(`Session: ${req.session.page_views}`)
})

// Server start
app.listen(3000, () => { console.log(`Server is running on localhost:3000`) })


