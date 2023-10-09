const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
const app = express();
const router = require("./router/allRouter")
const Catrouter = require("./router/catagoryRouter")
const productRouter = require("./router/productRouter")
app.use(morgan("dev"));
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors())
app.use(express.static('public'))
app.use('/register/user', router)
app.use("/register/catagory", Catrouter)
app.use("/product/makeing", productRouter)

module.exports = app;