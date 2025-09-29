import express from 'express'
const router = express.Router()
import { registerUser, loginUser, getMe, getUserProjectsWithTasks } from '../controllers/userController.js'
import {protect} from '../middleware/authMiddleware.js'


router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.get('/my-projects', protect, getUserProjectsWithTasks)

export default router;