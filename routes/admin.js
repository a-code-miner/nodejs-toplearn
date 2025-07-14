import express from 'express'
import { Router } from 'express'

import { addTodo, deleteTodo, completeTodo } from '../controllers/admin.js'


const router = Router()

router.post('/add-todo', addTodo)

router.get('/delete-todo/:id', deleteTodo)
router.get('/complete-todo/:id', completeTodo)

export default router


