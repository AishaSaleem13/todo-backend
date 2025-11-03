import {gettask,posttask,updatetask,deletetask} from "../controllers/task.mjs"
import express from "express"
const router=express.Router()


router.get("/",gettask)
router.post("/",posttask)
router.put("/:id",updatetask)
router.delete("/:id",deletetask)
export default router