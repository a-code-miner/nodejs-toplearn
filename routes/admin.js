import express from 'express'
import { Router } from 'express'

import { addTodo } from '../controllers/admin.js'


const router = Router()

export default router.post('/add-todo', addTodo)


