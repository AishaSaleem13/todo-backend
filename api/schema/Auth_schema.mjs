import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { jwtSecret } from "../config/environment.mjs";
import { Schema } from "mongoose";
export const UserSchema=new Schema({
Email:{
    type:String,
    required:true,

},
Password:{
    type:String,
    required:true,

},
Username:{
    type:String,
    required:true,

},
tokens:{
    type:[],
    default:[]
}


})

UserSchema.pre("save",function(next){
    const user=this
    if (user.isModified("Password")) {
        const salt=bcrypt.genSaltSync(10);
         const hash=bcrypt.hashSync(user.Password,salt);
         user.Password =hash;
    }
     next()
})
UserSchema.methods.comparepassword=function(Password){
const user=this
console.log(user.Password,"db hashed password")
console.log(Password,"simple password")
  return bcrypt.compareSync(Password,user.Password)
};

userSchema.methods.generateToken = function() {
    const { _id } = this
    const token = jwt.sign({ _id }, jwtSecret)
     return token
   
}


