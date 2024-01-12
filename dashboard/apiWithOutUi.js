const express = require('express');
const app = express();
var dotenv =  require ('dotenv');
var router = express.Router();
 const port = process.env.PORT || 9700;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const bodyParser = require('body-parser');
 const cors = require('cors');

 app.use(cors())
const mongourl = "mongodb://localhost:27017";

let db;
 let col_name = "dashboard";

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/health',(req,res)=>{
    res.status(200).send('Health Check')
})


//Read
app.get('/users',(req,res)=>{
    db.collection(col_name).find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })

})



app.use("/",router)
//Db Connection
 MongoClient.connect(mongourl,(err,client)=>{
  if(err) console.log('Error while connecting');
    db= client.db('sample');
    app.listen(port, (err)=>{
        console.log(`Server is running on port ${port}`)
    });
  });