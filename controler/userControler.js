const { createUserModel } = require("../models/UserModel");
const jwt = require('jsonwebtoken');


module.exports.createUser = async (req, res) => {
  const email = req.body.email;
  const user = await createUserModel.find({ email: email });
  if (user.length > 0) {
    res.status(400).json({ error: "User already exist" });
  } else {
    const newUser = new createUserModel(req.body);
    const isCreated = await newUser.save();
    if (isCreated) {
      res.send("Created!");
    } else {
      res.send("fail to Create!");
    }
  }
};

module.exports.signin = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await createUserModel.find({ email: email });
    if (user.length > 0) {
      if (user[0].Password === req.body.Password) {
        const token = jwt.sign({ id: user[0]._id, email: user[0].email }, '201306');
        res.status(200).json({user : user[0] , Token : token});
      } else {
        res.status(401).json({ error: "invalid Password" });
      }
    } else {
      res.status(401).json({ error: "invalid Email" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
