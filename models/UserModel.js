const mongoose = require("mongoose");
const  {Schema} = mongoose;

const UserSchema = new Schema({
    email : String,
    Password : String
});
module.exports.createUserModel = mongoose.model("Users", UserSchema);
