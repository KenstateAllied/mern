/*

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection

const dbo = require("./db/conn");

//const MongoClient = require("mongodb").MongoClient;


app.listen(port, () => {
  // perform a database connection when server starts
 
  dbo.connectToServer(function (err) {
   if (err) console.error(err);
 
  }); 
  console.log(`Server is running on port: ${port}`);
}); 


*/





const { MongoClient } = require("mongodb");


const uri = "mongodb://127.0.0.1.5000";
const databaseName = "employees";

MongoClient.connect(uri, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Connection failed for some reason");
  }
  console.log("Connection established - All well");
  const db = client.db(databaseName);
});
//const databaseName = "employees";

MongoClient.connect(uri, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Connection failed for some reason");
  }
  console.log("Connection established - All well");
  const db = client.db(employees);
});