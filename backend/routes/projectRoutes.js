import express from 'express'
const router = express.Router()

import { createProject, getProjects, getProjectById, joinProject } from '../controllers/projectController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.post('/', protect, admin, createProject)
router.get('/', protect, getProjects)
router.get('/:id', protect, getProjectById)
router.post('/:id/join', protect, joinProject)

export default router