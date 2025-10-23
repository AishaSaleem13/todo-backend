import taskSchema from "../schema/taskSchema.mjs"
import mongoose from "mongoose";

const Task = mongoose.model("Task",taskSchema)
export default Task