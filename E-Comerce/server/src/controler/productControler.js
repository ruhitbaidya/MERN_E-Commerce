const fs = require("fs");
const slugify = require("slugify");
const productModel = require("../model/productModel");

const creatingProductControl = async (req, res) => {
    try {
        console.log(req.body.name)
        const { name, price, queantity, catagory, shipping, photoName} = req.body
        if (!name  || !price  || !queantity || !catagory || !shipping || !photoName) {
            return res.status(402).json({ message: "fillup all the gap" })
        } else {
            console.log(name, price, queantity, catagory, shipping, photoName)
            const createData = await productModel({
                name : name,
                slug : slugify(name),
                price : price,
                queantity : queantity,
                catagory : catagory,
                photo : photoName,
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
        const deleteUsers = await productModel.findByIdAndDelete({ _id: id })
        res.status(200).json({ success: true, message: "this product delete Successfully" })
    } catch (error) {
        res.status(408).json({ success: false, message: "this is problem of router delte" })
    }
}

module.exports = { creatingProductControl, getAllProduct, deleteProduct }