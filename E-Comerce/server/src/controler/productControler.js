const fs = require("fs");
const  slugify  = require("slugify");
const productModel = require("../model/productModel");

const creatingProductControl = async (req, res)=>{
    try {
        const {name, price, queantity, catagory} = req.fields;
        const {photo} = req.files;
        switch(true){
            case !name :
            return res.status(407).json({success : true, message : "This Name Is Require"})
            case !price :
            return res.status(407).json({success : true, message : "This Price Is Require"})
            case !queantity :
            return res.status(407).json({success : true, message : "This Quentity Is Require"})
            case !catagory :
            return res.status(407).json({success : true, message : "This catagory Is Require"})
            case !photo :
            return res.status(407).json({success : true, message : "This Photo Is Require"})
            case photo && photo.size > 20000 : 
            return res.status(407).json({success : true, message : "You Can Not Upload More then 2mb"})
        }

        const createProduct = await productModel({...req.fields, slug : slugify(name)})
        if(photo){
             createProduct.photo.data = fs.readFileSync(photo.path)
             createProduct.photo.contentType = photo.type;
        }
        res.status(202).json({success : true, message : "successfully create product", data : createProduct})
    } catch (error) {
        res.status(405).json({success : false, message : "this is product create route problem"})
    }
}


module.exports = {creatingProductControl}