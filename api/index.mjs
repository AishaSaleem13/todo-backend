import express from "express";

import cors from "cors";
import taskRoutes from "./routes/task.mjs";

const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => res.send("Backend is running"));
app.use("/api/tasks", taskRoutes);
 export default app