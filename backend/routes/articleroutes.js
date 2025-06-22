import express from 'express'
import { createArticle } from '../controllers/articlecontroller.js'
import { protectedAction, createArticleValidation, validateArticleMiddleware } from '../middlewares/articlemiddleware.js'
import { upload } from '../configs/fileconfig.js'

const router = express.Router()

router.post('/:userId/article', protectedAction, upload.single('image'), createArticleValidation, validateArticleMiddleware, createArticle)

export default router