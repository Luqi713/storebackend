const express = require('express')
const app = express()
const ConectDB = require("./db/db");
const { AddProduct, Products } = require('./controler/productControler');
const port = 3001
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.get('/product', Products);
app.post("/Add-Product", AddProduct)


app.listen(port, async () => {
    await ConectDB();
  console.log(`Example app listening on port ${port}`)
})