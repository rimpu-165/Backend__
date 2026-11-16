const User=require("../model/model")
const Register=async(req,res)=>{
    try{
        const {name,email,phone,country,password}= req.body;
        const user=await User.findOne({email})
        if(user){
         return   res.status(400).json({message:"Email Already Registered"})
        }
        const usercreate=new User({name,email,phone,country,password})
        await usercreate.save()
        res.status(201).json({message:"User created sucessfully",usercreate})
    }
    catch(error){
        res.status(500).json({message:"internal server error",error:error.message})
    }

}
module.exports={Register}

