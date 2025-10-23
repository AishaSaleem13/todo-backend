import db from "./config/db.mjs";
import app from "./index.mjs"
db.connection.once("open", () => console.log("✅ Connected to DB"))
  .on("error", (err) => console.log("❌ DB connection error -->", err));


if (process.env.NODE_ENV !== "production") {
  app.listen(5000, () => {
    console.log("Server is running on port ");
  });
}
export default app;