const express = require("express");
const formidable= require('express-formidable');
const productRouter = express();
const {LoginProtactRoute, isAdmin} = require("../middelware/authoRouter")
const {creatingProductControl, getAllProduct, deleteProduct} = require("../controler/productControler")

productRouter.post("/create-product", LoginProtactRoute, isAdmin, formidable(), creatingProductControl)
productRouter.get("/getAllProduct/", getAllProduct)
productRouter.delete("/deleteProduct/:id", deleteProduct)
module.exports = productRouter