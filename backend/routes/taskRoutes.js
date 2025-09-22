import express from 'express'
import {createTask, getTaskForProject, getTaskById, assignVolunteersToTask} from '../controllers/taskController.js'
import {protect, admin} from '../middleware/authMiddleware.js'

const router = express.Router({mergeParams: true})

router.post('/', protect, admin, createTask)
router.get('/', protect, getTaskForProject)
router.get('/:taskId', protect, getTaskById)
router.post('/:taskId/assign', protect, admin, assignVolunteersToTask)

export default router
