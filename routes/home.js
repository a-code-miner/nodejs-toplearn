


import express from 'express'
import { Router } from 'express'

const router = Router()

router.get('/', (req, res, next) => {
    // res.send('<form action="/admin/message" method="POST"><input type="text" name="message" /><input type="submit" /></form>')
    res.sendFile('index.html', { root: 'views' }) // new version
})

router.get('/hello', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

export default router


// This syntax is used for ES6 modules and it's not compatible with CommonJS.
// import path from 'path'
// import { fileURLToPath } from 'url'
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
// res.sendFile(path.join(__dirname, '..', 'views', 'index.html')) // old version

