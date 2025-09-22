import Task from '../models/taskModel.js'
import Project from '../models/projectModel.js'
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

//Create a task under a project
//POST api/projects/:projectId/tasks
//access Admin

const createTask = asyncHandler(async (req, res) => {
    const { projectId } = req.params
    const { title, description, deadline } = req.body

    if (!title || !description || !deadline) {
        res.status(400)
        throw new Error('Please fill all fields')
    }

    const project = await Project.findById(projectId)
    if (!project) {
        res.status(404)
        throw new Error('Project not found')
    }

    const task = await Task.create({
        title,
        description,
        deadline,
        project: project._id,
    })

    if (!project.tasks) project.tasks = []
    if (!project.tasks.includes(task._id)) {
        project.tasks.push(task._id)
        await project.save()
    }

    res.status(201).json(task)
})

//Get the tasks for a project
//GET /api/projects/:projectId/tasks
//access admin

const getTaskForProject = asyncHandler(async (req, res) => {
    const { projectId } = req.params
    const tasks = await Task.find({ project: projectId }).populate(
        'assignedVolunteers',
        'fullname email'
    )
    res.status(200).json(tasks)
})

//Get a single task
//GET /api/projects/:projectId/tasks/:taskId
//access admin

const getTaskById = asyncHandler(async (req, res) => {
    const { taskId } = req.params
    const task = await Task.findById(taskId).populate(
        'assignedVolunteers',
        'fullname email'
    )

    if (!task) {
        res.status(404)
        throw new Error('Task not found')
    }

    res.status(200).json(task)
})

//Assign volunteer to a task
//POST /api/projects/:projectId/tasks/:taskId
//access admin

const assignVolunteersToTask = asyncHandler(async (req, res) => {
    const { projectId, taskId } = req.params
    const { volunteerIds } = req.body

    const task = await Task.findById(taskId)
    if (!task) {
        res.status(404)
        throw new Error('Task not found')
    }

    const project = await Project.findById(projectId)
    if (!project) {
        res.status(404)
        throw new Error('Project not found')
    }

    if (!project.volunteers) project.volunteers = []

    const toAddtoProject = []
    for (const vid of volunteerIds){
        if (!project.volunteers.map(String).includes(String(vid))) {
            toAddtoProject.push(vid)
        }
    }

    if (toAddtoProject.length){
        project.volunteers.push(...toAddtoProject)
        await project.save()

        await User.updateMany(
            {_id: {$in: toAddtoProject}},
            {$addToSet: {registeredProjects: project._id}}
        )
        
    }

    const uniqueToAdd = volunteerIds.filter(
        (id) => !task.assignedVolunteers.map(String).includes(String(id))
    )

    if (uniqueToAdd.length){
        task.assignedVolunteers.push(...uniqueToAdd)
        await task.save()
    }

    await User.updateMany(
        {_id: {$in: volunteerIds}},
        {$addToSet: {assignedTasks: task._id}}
    )

    const updated = await Task.findById(taskId).populate(
        'assignedVolunteers',
        'fullname email'
    )

    res.status(200).json({message: 'Volunteers assigned', task: updated})
})

export {
    createTask,
    getTaskForProject,
    getTaskById,
    assignVolunteersToTask
}

