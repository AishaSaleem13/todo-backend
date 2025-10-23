import express from "express";
const router =express.Router()
import taskRoutes from "../routes/task.mjs"
router.use("/",taskRoutes)
export default router