const mongoose = reauire("mongoose");

const productSchema = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    slug : {
        type : String,
        require : true
    },
    price : {
        type : Number,
        require : true
    },
    queantity : {
        type : Number,
        require : true
    },
    catagory : {
        type : mongoose.ObjectId,
        ref : "category",
        require : true
    },
    photo : {
        data : Buffer,
        contentType : String
    },
    shipping : {
        type : Boolean
    }
}, {timestamps : true})


const productModel = new mongoose.model("product", productSchema);


module.exports = productModel;