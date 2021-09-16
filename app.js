const express = require("express");
const app = express();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
});

// connection.query("CREATE DATABASE shoppy", (err, result) => {
//   console.log(err, " ", result);
// });

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
