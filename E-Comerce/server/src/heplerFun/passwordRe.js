const bcrypt = require('bcrypt');
const saltRounds = 10;


const passwordGenerate =  async (textPass)=>{
    try {
        const hashpass = await bcrypt.hash(textPass, saltRounds);
        return hashpass
    } catch (error) {
        return error
    }
}

const passwordCompaier = async (plainText, saltText)=>{
    try {
        const match = await bcrypt.compare(plainText, saltText);
        return match;
    } catch (error) {
        res.status(400).json({message : "something went wrong"})
    }
}
module.exports = {
    passwordGenerate,
    passwordCompaier
}