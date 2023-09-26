const jwt = require("jsonwebtoken")
const { passwordGenerate, passwordCompaier } = require("../heplerFun/passwordRe")
const { userModel } = require("../model/register_schema")
const { secrateKey } = require("../config/secrate")

const postRegister = async (req, res) => {
    try {
        const { name, email, password, adders, phone, answar } = req.body;
        // const password = req.body.password;
        // console.log(req.body)
   
        const hashPass = await passwordGenerate(password)

        if (!name || !email || !password || !adders || !phone || !answar) {
            return res.status(401).json({ message: "Please Fill Up All The Filed" })
        } else {
            
            const userGet = await userModel.findOne({ email });
           
            if (!userGet) {
                const user = await userModel({
                    name,
                    email,
                    password: hashPass,
                    adders,
                    phone,
                    answar
                }).save()
                return res.status(202).json({ success: true, message: "this user Create Successfully", data: user })
            } else {
                return res.status(403).json({ success: false, message: "this user create problem can not create user" })
            }
        }
    } catch (error) {
        console.log(error)
        res.status(401).json({ message: error })
    }
}

const loginControler = async (req, res) => {
    try {
        const { email, password } = req.body;
        const findUser = await userModel.findOne({ email })
        if (findUser) {
            const matchpass = await passwordCompaier(password, findUser.password);
            if (matchpass) {
                const token = jwt.sign({ id: findUser._id }, secrateKey, { expiresIn: "7d" })
                return res.status(200).json({ success: true, message: "Login Successfully", token})
            } else {
                return res.status(403).json({ success: false, message: "Logined Failed" })
            }
        } else {
            return res.status(400).json({ success: false, message: "this email are not registered" })
        }
    } catch (error) {
        console.log(error)
        res.status(405).json({ message: error })
    }
}

const testUser = (req, res) => {
    res.status(200).json({ message: "Procated Router" , data : req.users})
}

const UserTokenVerify = async (req, res)=>{
    try {
        const id = req.user
        const findUser = await userModel.findById({_id : id}, {password : 0, __v : 0})
    res.status(200).json({message : "success", ok : true, data : findUser})

    } catch (error) {
        res.status(407).json({message : "this user Not Found in this token she is invalid user"})
    }
}

const forgetPasswordApi = async (req, res)=>{
    try {
        const {email, answar, password} = req.body;
        // console.log(email, answar, password)
        const userGet = await userModel.findOne({email});
        if(userGet){
            if(answar === userGet.answar){
                const hashPass = await passwordGenerate(password)
                console.log(hashPass)
                 await userModel.findByIdAndUpdate({_id: userGet._id}, {password : hashPass},{new : true})
                return res.status(202).json({message : "Password Reset Successfull"})
            }else{
                return res.status(407).json({message : "authantion failed"})
            }
        }else{
            return res.status(403).json({message : "User Not Found"})
        }
    } catch (error) {
        console.log(error)
        res.status(403).json({message : "Internal Server Error"})
    }
}
const getAllUser = async (req, res)=>{
    try {
        const alluser = await userModel.find();
        console.log(alluser)
        if(alluser){
            res.status(200).json({message : "success", data : alluser})   
        }else{
            res.status(405).json({message : "false",})
        }
    } catch (error) {
         res.status(407).json({message : "Authantion failed"})
    }
}
const deleteUserbyId = async ()=>{
    try {
        const id = req.id;
        console.log(id)
    } catch (error) {
        
    }
}
module.exports = { postRegister, loginControler, testUser, UserTokenVerify, forgetPasswordApi, getAllUser, deleteUserbyId }