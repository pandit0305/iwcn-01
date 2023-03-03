const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    month1:String,
    month2:String,
    month3:String,
    month4:String,
    month5:String,
    month6:String,
    month7:String,
})

const userModel = mongoose.model("dataset", userSchema);

//export userModel
module.exports ={userModel};