const express = require('express')
const app = express()
const connection = require("./Config/db")
var cors = require('cors')
const todosModel=require("./Model/todos.model")
require("dotenv").config();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT ||4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/todos",async (req,res)=>{
    try{
        const data =  await todosModel.find();
   // const data1 = JSON.stringify(data);
       res.send({data})
    }catch(err){
        res.send(err);
    }
})

app.post("/todos/create",async(req,res)=>{
    const {task}=req.body;
    const data = new todosModel({
        task
    })
    await data.save();
    res.send({"task":task});

})

app.delete("/todos/delete/:id",(req,res)=>{
    const {id} = req.params;
   // let data = 
})




app.listen(PORT, async() => {
    try{
        await connection;
        console.log(`connected to db ${PORT}`);
    }catch(err){
console.log(err);
    }
  
})