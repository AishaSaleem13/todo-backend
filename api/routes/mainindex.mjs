import express from "express";
const router =express.Router()
import taskRoutes from "../routes/task.mjs"
import AuthRoutes from "../routes/AuthRoutes.mjs"
router.use("/",taskRoutes)
router.use("/",AuthRoutes)
export default router