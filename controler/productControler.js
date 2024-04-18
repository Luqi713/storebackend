const {addProductModel} = require("../models/ProductModel")

module.exports.AddProduct = async (req, res) => {
    const newAddProduct = new addProductModel(req.body);
    const isSaved = await newAddProduct.save();
    if(isSaved){
        res.send("saved")
    }else{
        res.send("fail to save!")
    }
}

module.exports.Products = async (req, res)=>{
    const data = await addProductModel.find({});
    res.send(data);
}