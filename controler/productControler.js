const { Code } = require("mongodb");
const { addProductModel } = require("../models/ProductModel");

//Add product code is here

module.exports.AddProduct = async (req, res) => {
  const newAddProduct = new addProductModel(req.body);
  const isSaved = await newAddProduct.save();
  if (isSaved) {
    res.send("saved");
  } else {
    res.send("fail to save!");
  }
};


//Update product code is here

module.exports.Update = async (req, res) => {
  try {
    let newData = {};

    if (req.body.name) {
      newData["name"] = req.body.name;
    }
    if (req.body.imgurl) {
      newData["imgurl"] = req.body.imgurl;
    }
    if (req.body.price) {
      newData["price"] = req.body.price;
    }
    if (req.body.saller) {
      newData["saller"] = req.body.saller;
    }
    if (req.body.desc) {
      newData["desc"] = req.body.desc;
    }
    if (req.body.catagory) {
      newData["catagory"] = req.body.catagory;
    }
    const id = req.body.id
    let filter = { _id: id }
    
    let doc = await addProductModel.findOneAndUpdate(filter, newData, {new : true});
    if (doc) {
      res.send({ Code: 200, message: "updated!", data: doc });
    } else {
        res.send({ Code: 500,  error: "Server Error"});
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

//get all products code is here

module.exports.Products = async (req, res) => {
  try {
    const products = await addProductModel.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

//get product by catagory code is here

module.exports.catagory = async (req, res) => {
  const category = req.params.catagory;
  console.log(category);
  try {
    const products = await addProductModel.find({ catagory: category });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

//get product by id code is here

module.exports.findById = async (req, res) => {
    const id = req.params.id;
    try {
      const products = await addProductModel.findById(id);
      if(products){
        res.send({ Code: 200, message: "Product Found!", data: products });
      }else{
        res.status(500).json({ error: "Product Not Available"});
      }
    } catch (error) {
      res.status(500).json({ error: "Server Error" });
    }
  };
