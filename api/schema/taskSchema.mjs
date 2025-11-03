import mongoose from "mongoose";
import { Schema } from "mongoose";
  const taskSchema=new Schema({
title:{
    type:String,
    required:true
},
tasks:{
    type:String,
    required:true
},
date:{
  type:String,
  required:true
},
category:{
  type:String,
  enum:["work","office","gym","personal"],
  default:"personal"
},
completed:{
  type:Boolean,
 required:false,
 default:false
}
},
{timestamps:true}
)
export default taskSchema