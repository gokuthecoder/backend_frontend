import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content: { 
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default:false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodods: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ]
}, { timestamps: true })

export const Todo = mongoose.model('Todo', todoSchema) 

// mongo ask tell me what is keep name of data name ,
 //i say Todo, mongo say, okay which schema based 
 //make your database , i say todoSchema