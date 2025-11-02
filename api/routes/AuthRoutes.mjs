import {get,Login,register,logout} from "../controllers/Auth.mjs"
import e from "express"

const router = e.Router()

router.get("/api/",get)
router.post("/api/register",register)
router.post("/api/login",Login)
router.put("/api/logout",logout)


export default router