
import express, { Router } from 'express'

import { getRootPath } from '../utils/path.js'

const router = Router()

router.get('/', (req, res, next) => {
    res.sendFile('index.html', { root: 'views' }) // new version
    // res.sendFile(path.join(getRootPath(), 'views', 'index.html')) // old version // did not work
})

router.get('/hello', (req, res) => {
    res.sendFile('hello.html', { root: 'views' }) // new version
})

export default router

