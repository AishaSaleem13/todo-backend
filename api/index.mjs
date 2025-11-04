import express from "express";
import cors from "cors";
import router from "./routes/mainindex.mjs";

const app = express();
app.use(express.json());

// CORS setup
const allowedOrigins = [
  "http://localhost:3000",              
  "https://task-app-puce-phi.vercel.app" 
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = `CORS policy: The origin ${origin} is not allowed`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (req, res) => res.send("✅ Backend is running fine!"));

app.use("/", router);

export default app;
