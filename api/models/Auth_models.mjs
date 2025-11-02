import { UserSchema } from "../schema/Auth_schema.mjs";
import mongoose from "mongoose";

const UserCollection =mongoose.models("UserFIeld",UserSchema)
export default UserCollection