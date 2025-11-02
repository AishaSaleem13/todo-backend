
import UserCollection from "../models/Auth_models.mjs"
  export const get =async (req,res) => {
   
        const user = await UserCollection.findByIdAndUpdateind()
       res.send({message:'Data Fetched Successfully',Data:users}) 
    }
 

export const register=async (req,res) => {
    try {
        const user =new  UserCollection(req.body)
         await user.save() 
         res.send({ message: "User registered successfully!" })
    } catch (error) {
         res.send({message:error.message}) 
    }
}



export const Login = async(req,res)=>{
    try {
        console.log(req.body)
        const {Email,Password}=req.body
      
        const user = await UserCollection.findOne({Email})

         if (!user) {
      res.status(404).send({ message: 'User Not Found' });
      return;
    }

     const compare =user.comparepassword(Password)

      if (!compare) {
      res.status(401).send({ message: 'Invalid Password' });
      return;
    }

 const token = user.generateToken();
    user.tokens.push(token);
    await user.save();

    res.send({ message: 'User logged in successfully!', token });
  } catch (e) {
    res.status(500).send({ message: 'Token error', error: e.message });
  }
};

 export const logout =async (req,res) => {
     await UserCollection.findByIdAndUpdate(req.userId,{$pull:{tokens:req.tokenToRemove}})
        res.send({message:'Logged Out Successfully'}) 
}