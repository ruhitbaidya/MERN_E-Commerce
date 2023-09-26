const express = require("express");
const router = express.Router();
const {postRegister, loginControler, testUser, UserTokenVerify, forgetPasswordApi, getAllUser, deleteUserbyId} = require("../controler/allRouteControler");
const {LoginProtactRoute, isAdmin} = require("../middelware/authoRouter")

router.post("/", postRegister)
router.post("/login", loginControler)
router.post("/forgetPassword", forgetPasswordApi)

// protaced route
router.post("/admin", LoginProtactRoute, isAdmin, testUser)
router.post("/userVerify", LoginProtactRoute, UserTokenVerify)
router.post("/allUser",LoginProtactRoute, isAdmin, getAllUser)
router.post("/deleteUser", LoginProtactRoute, isAdmin, deleteUserbyId)
module.exports = router;



