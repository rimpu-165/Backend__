const User=require("../model/model")
const bcrypt=require("bcrypt")
const Register=async(req,res)=>{
    try{
        const {name,email,phone,country,password}= req.body;
        const user=await User.findOne({email})
        if(user){
         return   res.status(400).json({message:"Email Already Registered"})
        }
        const haspassword=await bcrypt.hash(password,10)
        const usercreate=new User({name,email,phone,country,password:haspassword})
        await usercreate.save()
        res.status(201).json({message:"User created sucessfully",usercreate})
    }
    catch(error){
        res.status(500).json({message:"internal server error",error:error.message})
    }

}

const Login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email})
        if(!user){
         return   res.status(404).json({message:"email not found"})
        }
        const comparepass=await bcrypt.compare(password,user.password)
        if(!comparepass){
            return res.status(400).json({message:"incorrect password"})
        }
        res.status(200).json({message:"Login Successfully...",user})


    }
    catch(error){
        res.status(500).json({message:"internal server error",error:error.message})
    }

}

module.exports={Register,Login}

