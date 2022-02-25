const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv/config');
const aboutRoute = require('./routes/posts');

app.use("/posts", aboutRoute);

app.get("/", (req, res) => {
  res.send("<h1><a href='/posts'>You are in the Home Page</a></h1>");
});


mongoose
  .connect(
    process.env.MY_DB_CON
  ).then(
    console.log("Connected to MongoDB")
  );

app.listen(3000, () => {
  console.log("The app listening to http://localhost:3000");
});
