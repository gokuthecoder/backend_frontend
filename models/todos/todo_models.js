import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({}, { timestamps: true })

export const Todo = mongoose.model('Todo',todoSchema) // mongo ask tell me what is keep name of data name , i say Todo, mongo say, okay which schema based make your database , i say todoSchema