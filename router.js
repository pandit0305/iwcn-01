const express = require("express");
const userRouter = express.Router();

const {userModel} = require("./model");


userRouter.get("/",(req, res) => {
    res.send("<h1>WelCome</h1>")
})
userRouter.post('/add', async (req, res)=>{
    try{
        const payload = req.body;
        const postdata = new userModel(payload);
        await postdata.save();
   
        res.send("data is added");
       }catch(err){
           res.status(500).send({message:err.message})
       }
})

userRouter.get('/get', async (req, res)=>{
    try{
        const profile = await userModel.find();
        res.send(profile);
    }catch(err){
        res.status(400).send({message:err.message});

    }
})

userRouter.put('/:id', async (req, res)=>{
    const id = req.params.id;
    const payload = req.body;
  
  try{
    await userModel.findByIdAndUpdate({_id:id},payload);
    res.send("todo is updated");
  }catch(err){
    res.status(500).send(err.message)
  }

})

module.exports = {userRouter};