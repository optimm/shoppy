const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const auth = require("./Middlewares/auth");
const cookieParser = require("cookie-parser");
var nodemailer = require("nodemailer");
const fast2sms = require("fast-two-sms");
require("dotenv").config();

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

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

/////// sql connection/////////
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
  const o_data = req.body.o_data;
  const total = req.body.total;
  let user_name = "";
  let user_email = "";
  let mail_data = "";
  let user_mobile;
  console.log(o_data);
  if (req.isAuthenticated) {
    const t = `myorder_${res.mobile}`;
    let flag = true;
    user_name = res.name;
    user_email = res.email;
    user_mobile = res.mobile;
    o_data.map((e, i) => {
      const [p_id, qty, p_name, p_price, p_image, p_size] = Object.values(e);
      mail_data += `\n${
        i + 1
      } . ${p_name}, Size - ${p_size}, Quantity- ${qty}, Price for 1 - ${p_price}`;
      const q = `INSERT INTO ${t} (p_size, p_qty, p_name, p_image, p_price, p_id,id, delivery_address, delivery_mobile,status) VALUES (?,?,?,?,?,?,?,?,?,?)`;
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
          "pending",
        ],
        (err, result) => {
          if (err) {
            console.log(err);
            res.send("");
            flag = false;
          }
          if (!err) {
            console.log("insertion called");
            // Uorder();
            Iorder();

            let mail_start = `Hey! ${user_name} , your order placed on ${id} with  products \n`;
            let mail_content =
              mail_start +
              mail_data +
              `\n\nWill be delivered on address - ${d_addres} \nTotal price to be paid is Rs. ${total} \n\nThank you for placing the order \nShoppy.com`;
            console.log(mail_content);
            var options = {
              authorization: process.env.API_KEY,
              message: `Hey your order from Shoppy was placed and you will recive an email with complete details, Thank you keep shopping`,
              numbers: [`${user_mobile}`, `${d_mobile}`],
            };
            fast2sms.sendMessage(options).then((response) => {
              console.log(response);
            });
            let x = 1;
            if (x > 0) {
              var mailOptions = {
                from: process.env.EMAIL,
                to: user_email,
                subject: "Order confirmation From shoppy",
                text: mail_content,
              };

              transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                  console.log(error);
                } else {
                  console.log("Email sent: " + info.response);
                  x = 0;
                }
              });
            }
          }
        }
      );

      ///////////////inserting in order table
      function Iorder() {
        //insert
        console.log("values inserted in order table");
        console.log(
          res.name,
          res.mobile,
          p_id,
          p_name,
          p_image,
          p_price,
          p_size,
          qty,
          id,
          d_addres,
          d_mobile
        );
        db.query(
          "INSERT INTO `order` ( name , mobile ,p_id, p_name, p_image, p_price,p_size, p_qty,id, delivery_address, delivery_mobile,status ) VALUES (?,?,? ,?,?,? ,?,?,? ,?,?,?)",
          // console.log(i);

          [
            res.name,
            res.mobile,
            p_id,
            p_name,
            p_image,
            p_price,
            p_size,
            qty,
            id,
            d_addres,
            d_mobile,
            "pending",
          ],
          (err, result) => {
            if (err) {
              console.log(err);
            }
            if (!err) {
              console.log(res);
            }
          }
        );
      }
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

//////////////////fetching data from order table///////////
app.post("/orderData", (req, res) => {
  // const value = req.body.category;
  // let t = "order";
  console.log("data from order table ");
  const q = "SELECT * FROM `order`";
  db.query(q, (err, result) => {
    if (err) {
      console.log(err);
      res.send({ err: err });
    }
    res.send(result);
  });
});

///////////////

////////////////////del from cart table start/////////////////
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
      if (err) {
        console.log(err.errno);
        if (err.errno === 1062) {
          res.send("x");
        }
      }
      if (!err) {
        create();
      }
    }
  );

  // shopping cart
  function create() {
    const q =
      "CREATE TABLE  cart_" +
      mobile +
      " ( p_size char(5), p_name varchar(100), p_image varchar(300), p_price bigint(20), p_id bigint(20), PRIMARY KEY (p_id,p_size), FOREIGN KEY (p_id) REFERENCES product(p_id))";
    db.query(q, (err, result) => {
      if (err) {
        console.log(err);
      }
    });
    /////////////////////////
    //my orders
    const o =
      "CREATE TABLE  myorder_" +
      mobile +
      " (p_size char(5), p_qty bigint, p_name varchar(100), p_image varchar(300), p_price varchar(100), p_id bigint, id varchar(50), delivery_address varchar(300), delivery_mobile bigint, status varchar(20), PRIMARY KEY (id,p_id,p_size))";
    db.query(o, (err, result) => {
      if (err) {
        console.log(err);
      }
    });
    res.send("User registered successfully!");
  }

  ////////////////////////
});

///////////////////////clear coookie start////////////////////////////////
app.post("/logout", (req, res) => {
  const usr = req.body.usr;

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
  }
  const q = `INSERT INTO cart_${mobile} (p_id, p_size, p_name, p_image, p_price) SELECT ${product_id}, "${size}", p_name, p_image, p_price FROM product WHERE p_id= ${product_id} `;
  db.query(q, (err, result) => {
    if (err) {
      console.log(err.errno);
      if (err.errno === 1062) {
        res.send("x");
      }
    }
    if (!err) {
      res.send("Item added to cart");
    }
  });
});
///////////////////////// add to cart end ///////////////////////////////
//====================================================================================================
//login check route
app.post("/cart", (req, res) => {
  if (req.isAuthenticated) {
    console.log("hi", res.name, "this is login check");
    let user = res.name;
    let usr = res.usr;
    let mobile = res.mobile;
    let email = res.email;
    console.log("IN FIRST");
    res.send({
      data: true,
      name: user,
      usr: usr,
      mobile: mobile,
      email: email,
    });
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
  const usr = req.body.usr;
  if (usr === "admin") {
    console.log("user is admin");
    res
      .status(200)
      .cookie(
        "LogedIn",
        { usr: usr, mobile: email, email: email, name: usr, LogedIn: true },
        {
          httpOnly: true,
          sameSite: "strict",
          expires: new Date(
            new Date().getTime() + 3600 * 15 * 1000
          ) /*, secure: true*/,
        }
      )
      .send({ authenticated: true, usr: "admin" });
  } else {
    db.query(
      "SELECT * FROM customer WHERE mobile = ? AND pass = ?",
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
          let email = result[0].email;
          console.log(mobile);
          res
            .status(200)
            .cookie(
              "LogedIn",
              {
                usr: usr,
                mobile: mobile,
                email: email,
                name: uname,
                LogedIn: true,
              },
              {
                httpOnly: true,
                sameSite: "strict",
                expires: new Date(
                  new Date().getTime() + 3600 * 15 * 1000
                ) /*, secure: true*/,
              }
            )
            .send({ authenticated: true, usr: "customer" });
        } else {
          console.log("no user found");
          res.send({ authenticated: false, message: "wrong combination" });
        }
      }
    );
  }
});

// =============================== Admin =============================================================
////////////showing customers to admin///////////////
app.post("/customer", (req, res) => {
  db.query("SELECT * FROM customer", (err, result) => {
    if (err) {
      console.log(err);
      res.send({ err: err });
    }
    if (!err) {
      console.log(result);
      res.send(result);
    }
  });
});

///////////////////get pid///////////////////
app.post("/getpid", (req, res) => {
  console.log("to get pid");
  let p_ids = [];
  let max = 1;
  db.query("SELECT * FROM product", (err, result) => {
    if (!err) {
      // console.log(result);
      if (result.length > 0) {
        result.map((item) => {
          p_ids.push(item.p_id);
        });
      }
      p_ids.sort(function (a, b) {
        return a - b;
      });
      console.log(p_ids);
      for (let i = 1; i <= result.length; i++) {
        if (p_ids[i - 1] != i) {
          max = i;
          break;
        }
      }
      console.log(max);
      res.send({ max: max });
    }
    if (err) {
      console.log("  erroor ", err);
    }
  });
});

//////////////////// Admin Delete product /////////////////
app.post("/adminDel", (req, res) => {
  let pt;
  const p_id = req.body.p_id;
  console.log("called");

  pt = `product`;
  console.log("pt");
  const q = `DELETE FROM ${pt} WHERE p_id = ? `;
  db.query(q, [p_id], (err, result) => {
    if (err) {
      console.log(err);
      res.send("");
    }
    if (!err) {
      res.send("item deleted");
    }
  });
});

///////////////////// Admin Add Product/////////////////////////////
app.post("/adminAddProduct", (req, res) => {
  // console.log("hello register");
  const p_id = req.body.PiD;
  const p_name = req.body.PName;
  const p_price = req.body.PPrice;
  const p_type = req.body.PType;
  const p_category = req.body.PCat;
  const p_image = req.body.PImg;
  const p_description = req.body.PDescription;

  console.log(
    p_id,
    p_name,
    p_price,
    p_image,
    p_description,
    p_category,
    p_type
  );
  db.query(
    "INSERT INTO product (p_id,p_name,p_price,p_image,p_description,p_category,p_type) VALUES (?,?,?,?,?,?,?)",
    [p_id, p_name, p_price, p_image, p_description, p_category, p_type],
    (err, result) => {
      if (err) {
        console.log(err.errno);
        if (err.errno === 1062) {
          res.send("Invalid PID");
        }
      }
      if (!err) {
        res.send("Product added Successfully !!");
      }
    }
  );
});

////////////////// update product admin///////////////
app.post("/update", (req, res) => {
  const p_name = req.body.p_name;
  const p_price = req.body.p_price;
  const p_image = req.body.p_image;
  const p_description = req.body.p_description;
  const p_category = req.body.p_category;
  const p_type = req.body.p_type;
  const p_id = req.body.p_id;

  db.query(
    "UPDATE product SET p_name = ?, p_price = ?, p_image = ? , p_description = ? , p_category = ? , p_type = ? WHERE p_id = ?",
    [p_name, p_price, p_image, p_description, p_category, p_type, p_id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send("");
      }
      if (!err) {
        res.send("item was updated");
      }
    }
  );
});
const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
