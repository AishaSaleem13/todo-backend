import mongoose from "mongoose";
import { Schema } from "mongoose";
 export const taskSchema=new Schema({
title:{
    type:String,
    required:true
},
tasks:{
    type:[String],
    required:true
}
},
{timestamps:true}
)