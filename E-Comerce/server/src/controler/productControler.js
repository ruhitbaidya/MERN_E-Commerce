const fs = require("fs");
const slugify = require("slugify");
const productModel = require("../model/productModel");
const path = require("path")
const creatingProductControl = async (req, res) => {
    try {
        console.log(req.body.name)
        const { name, price, queantity, catagory, shipping} = req.body
        const photo = req.file
        console.log(photo)
        if (!name  || !price  || !queantity || !catagory || !shipping) {
            return res.status(402).json({ message: "fillup all the gap" })
        } else {
            console.log(name, price, queantity, catagory, shipping)
            const createData = await productModel({
                name : name,
                slug : slugify(name),
                price : price,
                queantity : queantity,
                catagory : catagory,
                image : photo.filename,
                shipping : shipping
            }).save()

            res.status(200).json({ success : true , message: "successfully create product", createProduct : createData })
        }

    } catch (error) {
        res.status(405).json({ success: false, message: "this is product create route problem", error })
    }
}

const getAllProduct = async (req, res) => {
    try {
        const userFinds = await productModel.find({}, { photo: 0 })
        res.status(200).json({ success: true, message: "user find successfully", data: userFinds })
    } catch (error) {
        res.status(403).json({ success: false, message: "this routre is user fetch route problem" })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(req.body)
        const deleteUsers = await productModel.findByIdAndDelete({ _id: id })
        const namelink = path.join(`public/${req.body.img}`)
        console.log(namelink)
        fs.unlinkSync(namelink)
        res.status(200).json({ success: true, message: "this product delete Successfully" })
    } catch (error) {
        res.status(408).json({ success: false, message: "this is problem of router delte" })
    }
}

const ProductUpdate = (req, res)=>{
    try{
        const {id} = req.params;
        
        res.status(203).json({success : true, message : "update success"})
    }catch(error){
        res.status(403).json({success : false, message : "this is update route problem"})
    }
}

const searchProductinDB = async (req, res)=>{
    try{
        const keyword = req.params.keyword;
            console.log(keyword)
            const findProduct = await productModel.find({name : {$regex : ".*" + keyword + ".*", $options : "i"}})
        res.status(200).json({success : true, message : "this is to much the find", data : findProduct})
    }catch(error){
        res.status(405).json({success : false, message : "this problem has search router"})
    }
}
module.exports = { creatingProductControl, getAllProduct, deleteProduct, ProductUpdate, searchProductinDB }