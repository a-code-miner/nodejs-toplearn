
import express from 'express'
// import http from 'http'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// const server = http.createServer(app)

app.listen(3000)



