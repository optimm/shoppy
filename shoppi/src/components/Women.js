import React from "react";
import Navigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container ,Row , Col ,Image} from "react-bootstrap";
import "./Women.css";


const Women = (props) => {
  console.log(props.location.state);
  return (
    <>
      {/* <Navigation /> */}

   
      <Row >






            <Col lg={9} md={12} sm={12} className="women-left" >
            <Navigation />
             
             <div className="women-left-box" id="scroll">
                
                
                
                <Row className="women-cloth">

                <Col lg={4} md={4} sm={4} xs={4}>
                  <Image src="./cartimages/cart1.jpeg" alt="Cloth image" fluid />
                  <p>Girls Hoody  <br/>
                  Rs 499/-  </p>

                </Col>

                <Col lg={4} md={4} sm={4} xs={4}>
                  <Image src="./cartimages/cart1.jpeg" alt="Cloth image" fluid />
                  <p>Girls Hoody  <br/>
                  Rs 499/-  </p>
                </Col>


                <Col lg={4} md={4} sm={4} xs={4}>
                  <Image src="./cartimages/cart1.jpeg" alt="Cloth image" fluid />
                  <p>Girls Hoody  <br/>
                  Rs 499/-  </p>
                </Col>


              
                </Row>


                     
                
                
                <Row className="women-cloth">

                <Col lg={4} md={4} sm={4} xs={4}>
                  <Image src="./cartimages/cart1.jpeg" alt="Cloth image" fluid />
                  <p>Girls Hoody  <br/>
                  Rs 499/-  </p>
                </Col>

                <Col lg={4} md={4} sm={4} xs={4}>
                  <Image src="./cartimages/cart1.jpeg" alt="Cloth image" fluid />
                  <p>Girls Hoody  <br/>
                  Rs 499/-  </p>
                </Col>


                <Col lg={4} md={4} sm={4} xs={4}>
                  <Image src="./cartimages/cart1.jpeg" alt="Cloth image" fluid />
                  <p>Girls Hoody  <br/>
                  Rs 499/-  </p>
                </Col>


              
                </Row>



                 




                <Row className="women-cloth">

<Col lg={4} md={4} sm={4} xs={4}>
  <Image src="./cartimages/cart1.jpeg" alt="Cloth image" fluid />
  <p>Girls Hoody  <br/>
                  Rs 499/-  </p>
</Col>

<Col lg={4} md={4} sm={4} xs={4}>
  <Image src="./cartimages/cart1.jpeg" alt="Cloth image" fluid />
  <p>Girls Hoody  <br/>
                  Rs 499/-  </p>
</Col>


<Col lg={4} md={4} sm={4} xs={4}>
  <Image src="./cartimages/cart1.jpeg" alt="Cloth image" fluid />
  <p>Girls Hoody  <br/>
                  Rs 499/-  </p>
</Col>



</Row>










<Row className="women-cloth">

<Col lg={4} md={4} sm={4} xs={4}>
  <Image src="./cartimages/cart1.jpeg" alt="Cloth image" fluid />
  <p>Girls Hoody  <br/>
                  Rs 499/-  </p>
</Col>

<Col lg={4} md={4} sm={4} xs={4}>
  <Image src="./cartimages/cart1.jpeg" alt="Cloth image" fluid />
  <p>Girls Hoody  <br/>
                  Rs 499/-  </p>
</Col>


<Col lg={4} md={4} sm={4} xs={4}>
  <Image src="./cartimages/cart1.jpeg" alt="Cloth image" fluid />
  <p>Girls Hoody  <br/>
                  Rs 499/-  </p>
</Col>



</Row>











<Row className="women-cloth">

<Col lg={4} md={4} sm={4} xs={4}>
  <Image src="./cartimages/cart1.jpeg" alt="Cloth image" fluid />
  <p>Girls Hoody  <br/>
                  Rs 499/-  </p>
</Col>

<Col lg={4} md={4} sm={4} xs={4}>
  <Image src="./cartimages/cart1.jpeg" alt="Cloth image" fluid />
  <p>Girls Hoody  <br/>
                  Rs 499/-  </p>
</Col>


<Col lg={4} md={4} sm={4} xs={4}>
  <Image src="./cartimages/cart1.jpeg" alt="Cloth image" fluid />
  <p>Girls Hoody  <br/>
                  Rs 499/-  </p>
</Col>



</Row>












             </div>




          
            </Col>
     
     


     


    


    {/* right */}







      <Col  lg={3} md={12} sm={12}  className="women-right"  >
  

        {/* media query div */}

        <div >
        <Row>

        <Col>

        <div className="women-box-new">Top</div>  
        
        </Col>

        <Col >
        <div className="women-box-new">Bottom</div>    
        </Col>

 
        </Row>  

        </div>





        {/* main right div */}
      

      <div className="women-filterBox">   
      
      <h2>Women Fashion</h2>

      <Col className="women-filter">

       
       <Row >
         <div className="women-sort1">
           top
         </div>
       </Row>


       <Row >
         <div className="women-sort1">
           bottom</div>
      </Row>


       

      </Col>

       </div> 

      
      </Col>






      </Row>      

     

    </>
  );
};

export default Women;
