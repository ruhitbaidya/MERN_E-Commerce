const express = require("express");
const formidable= require('express-formidable');
const productRouter = express();
const {LoginProtactRoute, isAdmin} = require("../middelware/authoRouter")
const {creatingProductControl} = require("../controler/productControler")

productRouter.post("/create-product", LoginProtactRoute, isAdmin, formidable(), creatingProductControl)

module.exports = productRouter