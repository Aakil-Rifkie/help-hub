import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'Please add a full name']
    },

    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email',
        ],
    },

    password: {
        type: String,
        required: [true, 'Please add a password'],
    },

    role: {
        type: String,
        enum: ['admin', 'volunteer'],
        default: 'volunteer',
    },

    registeredProjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'project',
    },
    ],

    assignedTasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'task',
        },
    ],
},
    {
        timestamps: true,
    })

export default mongoose.model('User', userSchema)