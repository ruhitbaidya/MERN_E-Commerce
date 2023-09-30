const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
const app = express();
const router = require("./router/allRouter")
const Catrouter = require("./router/catagoryRouter")
app.use(morgan("dev"));
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors())
app.use('/register/user', router)
app.use("/register/catagory", Catrouter)

module.exports = app;