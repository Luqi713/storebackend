const { addProductModel } = require("../models/ProductModel")

module.exports.AddProduct = async (req, res) => {
    const newAddProduct = new addProductModel(req.body);
    const isSaved = await newAddProduct.save();
    if (isSaved) {
        res.send("saved")
    } else {
        res.send("fail to save!")
    }
}

module.exports.Products = async (req, res) => {
    try {
        const products = await addProductModel.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
}
module.exports.catagory = async (req, res) => {
    const category = req.params.catagory
    console.log(category);
    try {
        const products = await addProductModel.find({ "catagory": category });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }

}