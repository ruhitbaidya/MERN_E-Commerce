const express = require("express");
const Catrouter = express.Router();
const {catagoryControler, deleteCatagoryControler, findAllCatagoryControler, updateCatagoryControler} = require("../controler/categoryControl")
const { LoginProtactRoute, isAdmin} = require("../middelware/authoRouter")
Catrouter.post("/createCat",LoginProtactRoute,isAdmin, catagoryControler)
Catrouter.get("/allCat", findAllCatagoryControler)
Catrouter.put("/catUpdate/user/:id",LoginProtactRoute,isAdmin, updateCatagoryControler)
Catrouter.delete("/deleteCat/user/:id",LoginProtactRoute,isAdmin, deleteCatagoryControler)


module.exports = Catrouter