import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
    },

    deadline: {
        type: Date
    },

    isCompleted: {
        type: Boolean,
        default: false
    },

    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },

    assignedVolunteers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],

    chatroom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chatroom'
    },

}, {
    timestamps: true,
})

export default mongoose.model('Task', taskSchema)

