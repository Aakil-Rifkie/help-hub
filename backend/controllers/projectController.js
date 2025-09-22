import Project from '../models/projectModel.js'
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'


//Create new project
//POST /api/projects
//Only for admin aceess
const createProject = asyncHandler(async (req, res) => {
    const { title, description, endDate } = req.body;

    if (!title || !description || !endDate) {
        res.status(400)
        throw new Error('Please fill all fields')
    }

    const project = await Project.create({
        title,
        description,
        endDate,
    });

    if (project) {
        res.status(201).json(project);
    } else {
        res.status(400);
        throw new Error('Invalid project data');
    }
});

//Get all projects
//GET /api/projects
//Public access

const getProjects = asyncHandler(async (req, res) => {
    const projects = await Project.find()
        .populate("volunteers", "fullname email")
        .populate("tasks");

    res.status(200).json(projects);
});

//Get a single project
//GET /api/projects/:id
//Public access

const getProjectById = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id)
        .populate("volunteers", "fullname email")
        .populate("tasks");

    if (!project) {
        res.status(404);
        throw new Error("Project not found");
    }

    res.status(200).json(project);
});


//Route when volunteer joins a project
//GET /api/projects/:id/join
//For volunteers

const joinProject = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);
    if (!project) {
        res.status(404);
        throw new Error("Project not found")
    }

    if (project.volunteers.includes(req.user._id)) {
        res.status(400);
        throw new Error("Already joined this project");
    }

    project.volunteers.push(req.user._id);
    await project.save();

    req.user.registeredProjects.push(project._id);
    await req.user.save();

    res.status(200).json({ message: "Joined project", project });
})

export {
    createProject,
    getProjects,
    getProjectById,
    joinProject,
}