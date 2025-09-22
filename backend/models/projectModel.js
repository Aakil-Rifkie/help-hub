import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },

    description: {
        type: String,
        required: true,
    },

    endDate: {
        Date,
    },
    
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Task",
        },
    ],

    volunteers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],

},
    {
        timestamps: true
    });

export default mongoose.model("Project", projectSchema)