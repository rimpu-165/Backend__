const express=require("express")
const mongoose=require("mongoose")
const router=require("./routes/route")
const PORT=4000

const app=express()
app.use(express.json())
app.use("/api",router)
mongoose.connect("mongodb://localhost:27017/node")
.then(()=>{
    console.log("mongodb connected")
})
.catch((error)=>{
    console.log("not connected",error.message)
})


app.listen(PORT,()=>{
    console.log(`your port is running on ${PORT}`)
})