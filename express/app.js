
const express = require('express')
const app = express()
var bodyParser = require('body-parser');
const port = 5000
var cors = require('cors')
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://pikachungg:Fufupapachon23@cluster0.nfqh2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  });

const MALE = 0
const FEMALE = 1
const OTHER = 2

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})