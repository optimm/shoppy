import React from "react";
import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./myOrder.css";

export const MyOrder = () => {
    return (
        <>
        <div className="myorder">

         <Col  lg={12} md={12} sm={12} >   
         <Navigation />

         <h1>Order History</h1>
         
           <Row className="order-list">


              <Col lg={4} md={4} sm={6} xs={12} className="order">
                <Row>
    
                <Col lg={6} md={6} sm={6} xs={6} >
                  <Image
                    src="./cartimages/cart1.jpeg"
                    alt="Cloth image"
                    fluid
                  />
                  </Col>
    

                <Col lg={6} md={6} sm={6} xs={6} >
                  <p className="order-heading">
                    Girls Hoody <br />
                  </p>

                  <p className="order-price">
                    Total - Rs 399 <br />
                    Qty   - 1<br />
                    Ordered - 05/10/2021
                    </p>
                    <p className="order-status">
                    Processing <br />
                  </p>
                </Col>


          
                </Row>
              </Col>



{/* __________________________________________ */}


<Col lg={4} md={4} sm={6} xs={12} className="order">
                <Row>
    
                <Col lg={6} md={6} sm={6} xs={6} >
                  <Image
                    src="./cartimages/cart1.jpeg"
                    alt="Cloth image"
                    fluid
                  />
                  </Col>
    

                <Col lg={6} md={6} sm={6} xs={6} >
                  <p className="order-heading">
                    Girls Hoody <br />
                  </p>

                  <p className="order-price">
                    Total - Rs 399 <br />
                    Qty   - 1<br />
                    Ordered - 05/10/2021
                    </p>
                    <p className="order-status">
                    Processing <br />
                  </p>
                </Col>


          
                </Row>
              </Col>



{/* __________________________________________ */}



<Col lg={4} md={4} sm={6} xs={12} className="order">
                <Row>
    
                <Col lg={6} md={6} sm={6} xs={6} >
                  <Image
                    src="./cartimages/cart3.jpg"
                    alt="Men's Shirt"
                    fluid
                  />
                  </Col>
    

                <Col lg={6} md={6} sm={6} xs={6} >
                  <p className="order-heading">
                    Men's Shirt <br />
                  </p>

                  <p className="order-price">
                    Total - Rs 1998 <br />
                    Qty   - 2<br />
                    Ordered - 05/10/2021
                    </p>
                    <p className="order-status order-status-yes">
                    Delivered - 10/10/2021
                  </p>
                </Col>


          
                </Row>
              </Col>



{/* __________________________________________ */}





<Col lg={4} md={4} sm={6} xs={12} className="order">
                <Row>
    
                <Col lg={6} md={6} sm={6} xs={6} >
                  <Image
                    src="./cartimages/cart1.jpeg"
                    alt="Cloth image"
                    fluid
                  />
                  </Col>
    

                <Col lg={6} md={6} sm={6} xs={6} >
                  <p className="order-heading">
                    Girls Hoody <br />
                  </p>

                  <p className="order-price">
                    Total - Rs 399 <br />
                    Qty   - 1 <br />
                    Ordered - 05/10/2021
                    </p>
                    <p className="order-status">
                    Processing <br />
                  </p>
                </Col>


          
                </Row>
              </Col>



{/* __________________________________________ */}








<Col lg={4} md={4} sm={6} xs={12} className="order">
                <Row>
    
                <Col lg={6} md={6} sm={6} xs={6} >
                  <Image
                    src="./cartimages/cart1.jpeg"
                    alt="Cloth image"
                    fluid
                  />
                  </Col>
    

                <Col lg={6} md={6} sm={6} xs={6} >
                  <p className="order-heading">
                    Girls Hoody <br />
                  </p>

                  <p className="order-price">
                    Total - Rs 399 <br />
                    Qty   - 1  <br />
                    Ordered - 05/10/2021
                    </p>
                    <p className="order-status">
                    Processing <br />
                  </p>
                </Col>


          
                </Row>
              </Col>



{/* __________________________________________ */}




</Row>

         </Col>

     


        </div>
        </>
    );
};



export default MyOrder;