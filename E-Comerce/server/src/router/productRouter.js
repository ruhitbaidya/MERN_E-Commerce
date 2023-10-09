const express = require("express");
const formidable= require('express-formidable');
const multer  = require('multer')
const productRouter = express();
const {LoginProtactRoute, isAdmin} = require("../middelware/authoRouter")
const {creatingProductControl, getAllProduct, deleteProduct} = require("../controler/productControler")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

productRouter.post("/create-product",LoginProtactRoute, isAdmin, upload.single("photo"), creatingProductControl)
productRouter.get("/getAllProduct/", getAllProduct)
productRouter.post("/deleteProduct/:id",LoginProtactRoute, isAdmin, deleteProduct)
module.exports = productRouter