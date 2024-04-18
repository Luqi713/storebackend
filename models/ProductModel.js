const mongoose = require("mongoose");
const  {Schema} = mongoose;

const ProductSchema = new Schema({
    name: String,
    imgurl: String,
    saller : String,
    price : String,
    desc: String,
    catagory: String
});
module.exports.addProductModel = mongoose.model("Products", ProductSchema);
