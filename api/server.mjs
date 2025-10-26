
import db from "./config/db.mjs";
import app from "./index.mjs";

db.connection.once("open", () => console.log("✅ Connected to DB"))
  .on("error", (err) => console.log("❌ DB connection error -->", err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
export default app