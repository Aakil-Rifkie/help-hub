import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import projectRoutes from './routes/projectRoutes.js'
import taskRoutes from './routes/taskRoutes.js'

dotenv.config()
const port = process.env.PORT || 5000
connectDB()

const app = express()
app.use(express.json())

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));


app.use('/api/users', userRoutes)
app.use('/api/projects', projectRoutes)
app.use('/api/projects/:projectId/tasks', taskRoutes)

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
