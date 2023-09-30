const slugify = require('slugify')
const {catmodelFun} = require("../model/catagoryModel")
const catagoryControler = async (req, res)=>{
    try {
        const {name} = req.body;
        const slug = slugify(name)
        const findCat = await catmodelFun.findOne({name : name})
        if(!name){
            return res.status(402).json({success : false, message : "this is empty values"})
        }
        if(findCat){
            return res.status(200).json({success : false, message : "this catagory name already exist"})
        }
        if(!findCat){
            const creatcat = await catmodelFun({name : name, slug : slug}).save()
            res.status(200).json({success : true, message : "this catagory has created", data : creatcat})
        }
    } catch (error) {
        res.status(403).json({message : "somthing was wrong"})
    }
}

const deleteCatagoryControler = async (req, res)=>{
    try {
        const {id} = req.params;
        const catGet = await catmodelFun.findById({_id : id})
        if(catGet){
             await catmodelFun.findOneAndDelete({_id : id})
            return res.status(200).json({success : true, message : "this catgory has been deleted" })
        }else{
            return res.status(405).json({success : false, message : "wrong catagory select yoou"})
        }
    } catch (error) {
        res.status(405).json({success : false, message : "this message has from catagory server", data : error})
    }
}

const findAllCatagoryControler = async (req, res)=>{
    try {
        const findAllcat = await catmodelFun.find()
        res.status(200).json({success : true, message : "find all cat", data : findAllcat
        })
    } catch (error) {
        res.status(408).json({seccess : false, message : "cannot find catory"})
    }
}
const updateCatagoryControler = async (req, res)=>{
    try {
        const {id} = req.params;
        const {name} = req.body;
        if(!name){
            return res.status(407).json({success : false, message : "this input is empty "})
        }
        const catGet = await catmodelFun.findById({_id : id})
        if(catGet){
             await catmodelFun.findOneAndUpdate({_id : id},{name : name, slug : slugify(name)})
            return res.status(200).json({success : true, message : "this catagory update successfully" })
        }else{
            return res.status(405).json({success : false, message : "wrong catagory select yoou"})
        }
    } catch (error) {
        res.status(405).json({success : false, message : "this message has from catagory server", data : error})
    }
}
module.exports = {
    catagoryControler,
    deleteCatagoryControler,
    findAllCatagoryControler,
    updateCatagoryControler
}