const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
const app = express();
const router = require("./router/allRouter")

app.use(morgan("dev"));
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors())
app.use('/register/user', router)

module.exports = app;