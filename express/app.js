
const express = require('express');
const app = express();
const port = 5000;
var cors = require('cors');
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://pikachungg:Fufupapachon23@cluster0.nfqh2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
//   });

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})





























app.get('/signup', (req, res) => {
    console.log("I'M CALLED")
    // const { Username: userDB, Password: passwordDB, Email: emailDb, Gender: genderdb} = req.body;
    client.connect( async (err) => {
        const collection = client.db("Ploop").collection("Users");
        let singleUser = await collection.findOne({Username: "markmaluenda"})
        console.log(singleUser)
        res.send(singleUser)
    })
    // res.send("HEHEHEHEHHE")
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

