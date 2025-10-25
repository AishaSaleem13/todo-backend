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
}
},
{timestamps:true}
)
export default taskSchema