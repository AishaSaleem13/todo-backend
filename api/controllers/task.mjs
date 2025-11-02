 import Task from "../models/task_model.mjs"
 
 
 
 export const gettask= async (req,res) => {
    try {
        const data= await Task.find()
        console.log(data)
        res.status(200).send({message:"getting data",Data:data})
    } catch (error) {
        console.log("error in get api ")
        res.status(500).send({message:error.message})
    }
 }

 export const posttask=async (req,res) => {
    try {
      console.log("Bodydata",req.body)
      const {tasks,title,date}=req.body
      if (!tasks||!title ||!date){
        return res.status(400).send("define your task and title ")
      }
      const task=new Task({
         tasks,
         title
      })
     await  task.save()
    return  res.status(201).send({message:"posting successful"})
        
    } catch (error) {
      console.log("error in posta api  ")
        res.status(500).send({message:error.message})
    }
 }
 export const updatetask =async (req,res) => {
    try {
        const {id}=req.params
        const update = await Task.findOneAndUpdate(
         {_id:id},
         req.body,
         {new:true}
        )

        res.status(200).send({message:"done update",update})
    } catch (error) {
      console.log("erorr in updating")
      res.status(500).send({message:error.message})} 
 }
 export const deletetask=async (req,res) => {
    try {
        const {id}=req.params
        const taskdelete= await Task.findOneAndDelete({_id:id}, )
        res.status(200).send({message:"done delete",taskdelete})
    } catch (error) {
         console.log("erorr in deleting ")
      res.status(500).send({message:error.message})
    }
 }