import React from "react";
import Navigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container ,Row , Col ,Image} from "react-bootstrap";
import "./Women.css";


const Women = (props) => {
  console.log(props.location.state);
  return (
    <>
      <Navigation />

   
      <Row >
      <Col lg={3} className="women-left" >

     

      <div className="women-filterBox">

      <h2>Women Fashion</h2>
 
       
       <Col className= "women-filter">
       <Row className="women-sort1" >

         <h4>Sort By:- </h4>

         </Row>
         <Row  className="women-sort2" >
         <h4>Sort By:- </h4>
         </Row>
         </Col>


     


        </div> 


     
      
    
      </Col>
       



      <Col  lg={9} className="women-right"  >
        right
      
      </Col>



      </Row>      

     

    </>
  );
};

export default Women;
