const mongoose = require("mongoose");

const catModel = new mongoose.Schema({
    name : {
        type : String,
        require : true,
        unique : true
    },
     slug : {
        type : String,
        lowercase : true
     }
})

const catmodelFun = mongoose.model("category", catModel)

module.exports = {catmodelFun}