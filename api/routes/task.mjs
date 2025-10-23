import {gettask,posttask,updatetask,deletetask} from "../controllers/task.mjs"
import express from "express"
const router=express.Router()


router.get("/api/tasks",gettask)
router.post("/api/tasks",posttask)
router.put("/api/tasks/:id",updatetask)
router.delete("/api/tasks/:id",deletetask)
export default router