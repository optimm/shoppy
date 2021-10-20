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
app.use("/addtocart", auth);
app.use("/data", auth);
app.use("/del", auth);
app.use("/addorders", auth);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "shoppy",
});

/////////////////// fetching data from the  table/////////////////////
app.post("/data", (req, res) => {
  const value = req.body.category;
  let t = "product";
  if (req.isAuthenticated) {
    if (value === "cart") {
      t = `cart_${res.mobile}`;
    }
    if (value === "myorder") {
      t = `myorder_${res.mobile}`;
    }
  } else {
    console.log("not authenticated");
  }
  console.log(`data from ${t}`);
  const q = `SELECT * FROM ${t}`;
  db.query(q, (err, result) => {
    if (err) {
      console.log(err);
      res.send({ err: err });
    }
    res.send(result);
  });
});
/////////////////// fetching data from the  table end/////////////////////
//==========================================================================================
//// add to my orders table
app.post("/addorders", (req, res) => {
  const id = new Date().toLocaleString();
  const d_addres = req.body.d_addres;
  const d_mobile = req.body.d_mobile;
  const d_email = req.body.d_email;
  const o_data = req.body.o_data;

  console.log(o_data);
  if (req.isAuthenticated) {
    const t = `myorder_${res.mobile}`;
    let flag = true;
    o_data.map((e, i) => {
      const [p_id, qty, p_name, p_price, p_image, p_size] = Object.values(e);
      console.log(p_id, qty, p_name, p_price, p_image, p_size);
      const q = `INSERT INTO ${t} (p_size, p_qty, p_name, p_image, p_price, p_id,id, delivery_address, delivery_mobile, delivery_email, status) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;
      console.log(q);
      db.query(
        q,
        [
          p_size,
          qty,
          p_name,
          p_image,
          p_price,
          p_id,
          id,
          d_addres,
          d_mobile,
          d_email,
          "pending",
        ],
        (err, result) => {
          if (err) {
            console.log(err);
            flag = false;
          }
        }
      );
    });
    if (flag) {
      const cart_emp = `DELETE FROM cart_${res.mobile}`;
      console.log(cart_emp);
      db.query(cart_emp, (err, result) => {
        if (err) {
          console.log(err);
        }
        if (!err) {
          console.log("cart made empty");
          res.send("Thank you! Order was placed successfully");
        }
      });
    }
  } else {
    console.log("not authenticated");
  }
});

////////////////////del from table start/////////////////
app.post("/del", (req, res) => {
  let t;
  const p_id = req.body.p_id;
  const p_size = req.body.p_size;
  if (req.isAuthenticated) {
    t = `cart_${res.mobile}`;
    const q = `DELETE FROM ${t} WHERE p_id = ? AND p_size = ?`;
    db.query(q, [p_id, p_size], (err, result) => {
      if (err) {
        console.log(err);
        res.send("");
      }
      if (!err) {
        res.send("item deleted");
      }
    });
  } else {
    console.log("not authenticated");
  }
});

///////////////////////register route////////////////////////////////
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
  let status = 0;
  // shopping cart
  const q =
    "CREATE TABLE  cart_" +
    mobile +
    " ( p_size char(5), p_name varchar(100), p_image varchar(300), p_price bigint(20), p_id bigint(20), PRIMARY KEY (p_id,p_size), FOREIGN KEY (p_id) REFERENCES product(p_id))";
  db.query(q, (err, result) => {
    console.log(err);
    if (!err) {
      status++;
    }
  });
  /////////////////////////
  //my orders
  const o =
    "CREATE TABLE  myorder_" +
    mobile +
    " (p_size char(5), p_qty bigint, p_name varchar(100), p_image varchar(300), p_price varchar(100), p_id bigint, id varchar(50), delivery_address varchar(300), delivery_mobile bigint, status varchar(20), PRIMARY KEY (id,p_id,p_size))";
  db.query(o, (err, result) => {
    console.log(err);
    if (!err) {
      status++;
    }
  });

  console.log(status);
  ////////////////////////
});
app.get("/", (req, res) => {
  console.log(req.cookies);
});

///////////////////////clear coookie start////////////////////////////////
app.post("/logout", (req, res) => {
  res.clearCookie("LogedIn");
  res.send("done");
});
///////////////////////clear coookie end////////////////////////////////

///////////////////////// add to cart start///////////////////////////////
app.post("/addtocart", (req, res) => {
  console.log("add to cart ke andra");
  const product_id = req.body.product_id;
  const size = req.body.product_size;
  let mobile;
  if (req.isAuthenticated) {
    console.log("hi", res.mobile, product_id, size);
    mobile = res.mobile;
  } else {
    console.log("not authenticated");
    res.send("");
  }
  const q = `INSERT INTO cart_${mobile} (p_id, p_size, p_name, p_image, p_price) SELECT ${product_id}, "${size}", p_name, p_image, p_price FROM product WHERE p_id= ${product_id} `;
  db.query(q, (err, result) => {
    if (err) {
      console.log(err.errno);
      if (err.errno === 1062) {
        res.send("Item already present in cart");
      }
    }
    if (!err) {
      res.send("Item added to cart");
    }
  });
});
///////////////////////// add to cart end ///////////////////////////////

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
///////////////////////login start/////////////////////////////////////////
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
        let mobile = result[0].mobile;
        console.log(mobile);
        res
          .status(200)
          .cookie(
            "LogedIn",
            { mobile: mobile, name: uname, LogedIn: true },
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
