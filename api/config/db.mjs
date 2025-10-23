import mongoose from "mongoose";
import { Mongourl } from "./environment.mjs";
mongoose.connect(Mongourl)
export default mongoose