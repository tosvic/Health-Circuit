import express from 'express'
import { createNewCategory } from '../controllers/categorycontroller.js'
import { protectedAction, categoryMiddleware, validateArticleMiddleware } from '../middlewares/articlemiddleware.js'

const router = express.Router()

router.post('/category', protectedAction, categoryMiddleware, validateArticleMiddleware, createNewCategory )

export default router