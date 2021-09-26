const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./Models/User");
const { rawListeners } = require("./Models/User");
const jsonParser = bodyParser.json();

//----------------------------------------------------------------------

//----------------------------------------------------------------------

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

mongoose.connect(
  "mongodb+srv://alex:password15326@dev.ffuml.mongodb.net/EduGame?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.post("/auth", jsonParser, (req, res) => {
  User.find({ login: "fmadkmksmk12422" }, "password", function (err, data) {
    console.log(data);
  });
});

app.post("/reg", jsonParser, (req, res) => {
  User.create({
    login: req.body.login,
    password: req.body.password,
  })
    .then((data) => {
      res.status(200);
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.send(err);
    });
});

app.get("/getStudentUsers", jsonParser, (req, res) => {
  studentUser
    .find({})
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

app.listen(8080);
console.log("Started");
