const jwt = require("jsonwebtoken");
const { secrateKey } = require("../config/secrate");
const { userModel } = require("../model/register_schema");
const LoginProtactRoute = (req, res, next) => {
    try {
        const tokenfi = req.body.token;
        const deleteid = req.body.id;
        // console.log(typeof(tokenfi))
        // console.log(tokenfi)
        const tokenMkArr = tokenfi.split(" ")
        // console.log(req.body.token)
        // console.log(tokenMkArr[1])

        const token = jwt.verify(tokenMkArr[1], secrateKey)
        if (token) {
            req.user = token.id
            req.id = deleteid
            next()
        }
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "Token Has Not valid" })
    }
}

const isAdmin = async (req, res, next) => {
    try {
        const id = req.user;
        const finduser = await userModel.findById({ _id: id }, { password: 0 })
        if (finduser.role === 1) {
            req.users = finduser
            next()
        } else {
            return res.status(402).json({ message: "not admin only normal user" })
        }
    } catch (error) {
        res.status(404).json({ message: error })
    }
}
module.exports = {
    LoginProtactRoute,
    isAdmin
}