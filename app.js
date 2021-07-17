const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const db = require('./config/keys').mongoURI;
const app = express();


const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => res.send("Hello wwworld!"));
app.use("/api/users", users);
app.use("/api/tweets", tweets);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));




mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch(err => console.log(err));