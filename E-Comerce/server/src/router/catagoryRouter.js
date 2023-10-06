const express = require("express");
const Catrouter = express.Router();
const {catagoryControler, deleteCatagoryControler, findAllCatagoryControler, updateCatagoryControler, findSingalGetcatagory} = require("../controler/categoryControl")
const { LoginProtactRoute, isAdmin} = require("../middelware/authoRouter")
Catrouter.post("/createCat",LoginProtactRoute,isAdmin, catagoryControler)
Catrouter.get("/allCat", findAllCatagoryControler)
Catrouter.put("/catUpdate/user/:id",LoginProtactRoute,isAdmin, updateCatagoryControler)
Catrouter.post("/deleteCat/user/:id",LoginProtactRoute,isAdmin, deleteCatagoryControler)
Catrouter.get("/singal-get/:id", findSingalGetcatagory)


module.exports = Catrouter