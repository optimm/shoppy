const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const auth = require("./Middlewares/auth");
const cookieParser = require("cookie-parser");

app.use(express.json({ limit: "1mb" }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/cart", auth);
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "shoppy",
});

// fetching data from the table
app.post("/data", (req, res) => {
  db.query("SELECT * FROM product", (err, result) => {
    if (err) {
      console.log(err);
      res.send({ err: err });
    }
    console.log(result);
    res.send(result);
  });
});

app.post("/register", (req, res) => {
  console.log("hello register");
  const email = req.body.email;
  const pass = req.body.pass;
  const name = req.body.name;
  const mobile = req.body.mobile;
  console.log(email, pass, name, mobile);
  db.query(
    "INSERT INTO customer (email,pass,name,mobile) VALUES (?,?,?,?)",
    [email, pass, name, mobile],
    (err, result) => {
      console.log(err);
    }
  );

  // shopping cart
  const q = "CREATE TABLE  cart_" + mobile + " ( p_size char(5))";
  db.query(q, (err, result) => {
    console.log(err);
  });
  /////////////////////////
  //my orders
  const o =
    "CREATE TABLE  myorder_" +
    mobile +
    " ( id varchar(50), delivery_address varchar(300), delivery_mobile bigint, status varchar(20), PRIMARY KEY (id))";
  db.query(o, (err, result) => {
    console.log(err);
    if (!err) {
      res.send("User registered");
    }
  });
  ////////////////////////
});
app.get("/", (req, res) => {
  console.log(req.cookies);
});
//clear coookie
app.post("/logout", (req, res) => {
  res.clearCookie("LogedIn");
  res.send("done");
});

app.post("/cart", (req, res) => {
  if (req.isAuthenticated) {
    console.log("hi", res.name);
    let user = res.name;
    console.log("IN FIRST");
    res.send({ data: true, name: user });
  } else {
    console.log("IN Second");
    res.send({ data: false });
  }
});

app.post("/login", (req, res) => {
  console.log("hello login");
  const email = req.body.email;
  const pass = req.body.pass;

  db.query(
    "SELECT * FROM customer WHERE email = ? AND pass = ?",
    [email, pass],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
      }
      if (result.length > 0) {
        console.log(result[0].name);
        let uname = result[0].name;
        res
          .status(200)
          .cookie(
            "LogedIn",
            { name: uname, LogedIn: true },
            {
              httpOnly: true,
              sameSite: "strict",
              expires: new Date(
                new Date().getTime() + 3600 * 15 * 1000
              ) /*, secure: true*/,
            }
          )
          .send({ authenticated: true, user: email });
      } else {
        console.log("no user found");
        res.send({ message: "wrong combination" });
      }
    }
  );
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
