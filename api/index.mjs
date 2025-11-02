import express from "express";

import cors from "cors";
import router from "./routes/mainindex.mjs";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
)
app.get("/", (req, res) => res.send("Backend is running"));
app.use("/", router);
 export default app