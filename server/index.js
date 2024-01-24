const express= require("express")
const app=express()
const cors=require("cors")
app.use(cors())
const bodyParser=require("body-parser")
app.use(bodyParser.json())
const mongoose=require("mongoose")
const {Schema}=require("mongoose")
require("dotenv").config()
const port = process.env.PORT;

const fasSchema=new Schema({
    name:String,
    img:String,
    price:String,
    desc:String
})

const Fas= mongoose.model("fas",fasSchema)

app.get("/api/fas",async(req,res)=>{
    const fashion= await Fas.find()
    if (fashion.length>0) {
        res.send(fashion)
        
    }
    else{
        res.send("data not found")
    }
})
app.get("/api/fas/:id",async(req,res)=>{
    const {id}=req.params
    const finded=await Fas.findById(id)
    if (finded) {
        res.send(finded)
        
    }
    else{
        res.send("data not found")
    }
})
app.delete("/api/fas/:id",async(req,res)=>{
    const {id}=req.params
    const deleted=await Fas.findByIdAndDelete(id)
    if (deleted) {
        res.send(deleted)
        
    }
    else{
        res.send("data not found")
    }
})
app.post("/api/fas",async(req,res)=>{
    const {name,img,price,desc}=req.body
    const newData={}
    if (name) {
        newData.name=name
        
    }
    if (img) {
        newData.img=img
        
    }
    if (price) {
        newData.price=price
        
    }
    if (desc) {
        newData.desc=desc
        
    }
    const newfas=await Fas(newData)
    const savefas=await newfas.save()
    res.send(savefas)
})

app.listen(port,()=>{
    console.log(`Example listening on port ${port}`)
})
mongoose.connect("mongodb+srv://aydan:aydan123@app.5ibbxcd.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("CONNECT!"))

