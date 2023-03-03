const express = require('express');
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(express.json());

const {userRouter}  = require("./router");
const {connection} = require("./db");

app.use(cors());

app.use("/", userRouter);

app.listen(process.env.PORT, async()=>{
    try{
        await connection;
        console.log("connection successful!");
    }catch(err){
        console.log("connection failed!");
    }
    console.log(`server listen on port ${process.env.PORT}`);
})