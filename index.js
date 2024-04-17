const express = require('express')
const app = express()
const ConectDB = require("./db/db");
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, async () => {
    await ConectDB();
  console.log(`Example app listening on port ${port}`)
})