const express = require('express')
const app = express()
const cors = require('cors') 
app.use(cors())

const ConectDB = require("./db/db");
const { AddProduct, Products, catagory, Update, findById } = require('./controler/productControler');
const { createUser, signin } = require('./controler/userControler');
const port = 3001
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.get('/product', Products);
app.get('/product/:catagory', catagory);
app.get('/product-id/:id', findById);
app.post("/Add-Product", AddProduct)
app.post("/user-create", createUser)
app.post("/signin", signin)
app.post("/update", Update)


app.listen(port, async () => {
    await ConectDB();
  console.log(`Example app listening on port ${port}`)
})