const express = require('express')
const app = express()
const cors = require('cors') 
app.use(cors())

const ConectDB = require("./db/db");
const { AddProduct, Products, catagory } = require('./controler/productControler');
const { createUser } = require('./controler/userControler');
const port = 3001
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.get('/product', Products);
app.get('/product/:catagory', catagory);
app.post("/Add-Product", AddProduct)
app.post("/user-create", createUser)


app.listen(port, async () => {
    await ConectDB();
  console.log(`Example app listening on port ${port}`)
})