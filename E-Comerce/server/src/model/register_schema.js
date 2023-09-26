const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true,
        trim : true,
    },
    email : {
        type : String,
        require : true,
        unique : true,
        trim : true
    },
    password : {
        type : String,
        require : true
    },
    adders : {
        type : String,
        require : true
    },
    phone : {
        type : String,
        require : true
    },
    answar : {
        type : String,
        require : true
    },
    role : {
        type : Number,
        default : 0
    }
}, {timestamp : true})


const userModel = mongoose.model("userReg", registerSchema);

module.exports = {
    userModel
}