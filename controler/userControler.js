const { createUserModel } = require("../models/UserModel");

module.exports.createUser = async (req, res) => {

    const newUser = new createUserModel(req.body);
    const isCreated = await newUser.save();
    if (isCreated) {
        res.send("Created!")
    } else {
        res.send("fail to Create!")
    }
}