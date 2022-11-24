const express = require('express');
const mongoose = require("mongoose");
const app = express();
const port = 3000;
var studentRoute = require('./routes/studentRoute');


// let cors = require("cors");
// app.use(express.json());
// app.use(cors());

app.use('/student', studentRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

mongoose.connect('mongodb://localhost:27017/studentDB2',
  {
    useNewUrlParser: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});