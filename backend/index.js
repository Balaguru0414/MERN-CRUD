const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./models/users");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// mongoose.connect("mongodb://127.0.0.1:27017/crud");
mongoose.connect(process.env.MONGODB_URL);

// Create ============================
app.post("/createuser", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// Read ==============================
app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// Read ==============================
app.get("/getuser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

// Update ==============================
app.put("/updateuser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    { name: req.body.name, email: req.body.email, age: req.body.age }
  )
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

// Delete ==============================
app.delete("/deleteuser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// server =============================
app.listen(2000, () => {
  console.log("server is runing on 2000");
});
