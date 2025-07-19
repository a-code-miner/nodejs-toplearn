import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cookieParser())

app.get('/', (req, res) => {
    console.log(req.cookies)
    res.cookie('name', 'express', {
        // expires: new Date(Date.now() + 60000)
        maxAge: 60000
    }).send('Cookie has been saved!')
})

app.get('/delete-cookie', (req, res) => {
    res.clearCookie('name').send('Cookie deleted successfully!')
})

app.listen(3000, () => console.log(`Server is running on localhost:3000`))
