const mongoose = require("mongoose");
const {db_uri} = require("../config/secrate")
const connectMongoo = ()=>{
    mongoose.connect(db_uri)
    .then(()=>{
        console.log("mongoose successfully connected")
    }).catch((err)=>{
        console.log(`mongoose problem ${err}`)
    })
}


module.exports = {
    connectMongoo
}