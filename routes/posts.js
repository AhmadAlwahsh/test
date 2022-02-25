const express = require("express");
const router = express.Router();
const Post = require('../models/Post');

router.get("/", (req, res) => {
  res.send("<h1><a href='/'>You are in the Posts Page</a></h1>");
});

router.get("/my-cv", (req, res) => {
  res.send("<h1>This is my CV page<a href='/'>Back</a></h1>");
});

router.post('/' , (req , res) => {
  console.log(req.body);
})

module.exports = router;