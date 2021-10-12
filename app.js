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
console.log("hello server");
app.post("/register", (req, res) => {
  console.log("hello register");
  const email = req.body.email;
  const pass = req.body.pass;
  const fname = req.body.fname;
  const lname = req.body.lname;
  const mobile = req.body.mobile;
  console.log(email, pass, fname, lname, mobile);
  db.query(
    "INSERT INTO authentication (email,pass,fname,lname,mobile) VALUES (?,?,?,?,?)",
    [email, pass, fname, lname, mobile],
    (err, result) => {
      console.log(err);
    }
  );
});
app.get("/", (req, res) => {
  console.log(req.cookies);
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
    "SELECT * FROM authentication WHERE email = ? AND pass = ?",
    [email, pass],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
      }
      if (result.length > 0) {
        console.log(result[0].fname);
        let uname = result[0].fname + " " + result[0].lname;
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
