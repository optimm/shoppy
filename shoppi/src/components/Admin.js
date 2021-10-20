import React from 'react'
import "./admin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Delete , Update , AccountCircle , Add } from '@material-ui/icons';
import createNotification from "./notification/notification";
import "./product.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import Axios from "axios";
Axios.defaults.withCredentials = true;

const Admin = () => {

    const history = useHistory();
    const [data, setData] = useState([]);
    useEffect(() => {
      Axios.post("http://localhost:8000/data", {
        category: "men",
      }).then((response) => {
        setData(response.data);
      });
    }, []);
  

    const refreshPage = ()=>{
      window.location.reload();
   }
  





  ///////// delete ////////////////

  function adminDel(index) {
    if (window.confirm("Are you sure you want to delete this!")) {
      Axios.post("http://localhost:8000/adminDel", {
        p_id: data[index].p_id,
      }).then((response) => {
        if (response.data.length > 0) {
          createNotification("success", response.data, "Deleted");
        } else {
          createNotification("error", "Sorry some error was caught", "Error");
        }
      });
      // showdata();
    }
  }
   

  



    return (
        <>
        
        <div className="admin-nav">
        <h1>Admin </h1>
        <button className="admin"> <AccountCircle /> </button>
        </div>

        <Row>
        <Col lg={9} md={12} sm={12} >


          <div className="product-left-box" id="scroll">
            <div className="product-cloth">
        
            {data.map((item, index) => {
                if (item.p_category === "men") {
                  return (
                    <div className="category-section" key={index}>
                      <div
                        className="category"
                        style={{ backgroundImage: `url("${item.p_image}")` }}
                        // onClick={() => prodPage(index)}
                      ></div>
                      <div className="product-detail">
                        <p className="product-heading">
                          <span className="product-name">{item.p_name}</span>
                          <br />
                          <span className="product-price">
                            Rs. {item.p_price}
                          </span>
                        </p>

                      </div>


                         <div className="admin-buttons">
                          <button className="admin-btn">
                              <Update/>
                          </button>
                          <button className="admin-btn"  onClick={() =>{ adminDel(index) ; refreshPage() } }  >
                              <Delete/>
                          </button>
                          </div>
                    </div>
                  );
                }
              })}

                  
    
  
              
            </div>
          </div>
        </Col>

        {/* right */}

        <Col lg={3} md={12} sm={12} className="admin-right">
       
       

          <div className="admin-filterBox">


            <Col className="admin-filter-category">
      
            <h2>Category</h2>
              <div className="sort-category">
             

               <input
                 type="radio"
                 id=""
                 name="category"
                 value=""
                 
               />
               <label for="">Mens</label>
               <br />
               <input
                 type="radio"
                 id=""
                 name="category"
                 value=""
                 
               />
               <label for="">Womens</label>
               <br />
               <input
                  type="radio"
                  id=""
                  name="category"
                  value=""
                 
               />
               <label for="">Kids</label>
               <br />
               <button className="admin-view" >
                 View
               </button>
             </div>





               

               <div  className="admin-add-product">
                  
                  <button> <Add/> Add Product</button>

                   </div> 




{/* 
                   <h2>Order Placed</h2>

<div className="admin-order" id="scroll">

  <div className="order-box">
    <p>image <br/> price  <br/> details</p>
  </div>

  <div className="order-box">
    <p>image <br/> price  <br/> details</p>
  </div>

  <div className="order-box">
    <p>image <br/> price  <br/> details</p>
  </div>

  <div className="order-box">
    <p>image <br/> price  <br/> details</p>
  </div>

  <div className="order-box">
    <p>image <br/> price  <br/> details</p>
  </div>

  
</div> */}






             
            </Col>
          </div>
        </Col>
      </Row>

      </>
    );
};

export default Admin;
