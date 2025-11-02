import dotenv from "dotenv"
dotenv.config()
export const Mongourl=process.env.Mongo_url
export const jwtSecret=process.env.jwt_secret