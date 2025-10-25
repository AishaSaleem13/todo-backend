import express from "express";

import cors from "cors";
import router from "./routes/mainindex.mjs";

const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => res.send("Backend is running"));
app.use("/", router);
 export default app