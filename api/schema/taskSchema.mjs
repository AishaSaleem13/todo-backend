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
completed:{
  type:Boolean,
 required:false
}
},
{timestamps:true}
)
export default taskSchema