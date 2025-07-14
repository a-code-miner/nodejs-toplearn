import express, { Router } from 'express';

import { getIndex } from '../controllers/todos.js';

const router = Router()

router.get('/', getIndex)

export default router
