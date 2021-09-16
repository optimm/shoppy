import React from "react";
import Navigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container ,Row , Col ,Image} from "react-bootstrap";
import "./Sign.css";

const Sign = () => {


  /*
    const [values , setValues] = useState ({
        name: "",
        email: "",
        password: "",
    });



    const [errors , setErrors] = useState({});
    
    const handleChange = (event) => {
      setValues ({
          ...values,
          [event.target.name]: event.target.value,
      })

    }

*/


  
  const handleFormLogin = (event) =>  {
    event.preventDefault(); 
    // setErrors(validation(values))
};

const handleFormSignup = (event) =>  {
    event.preventDefault(); 
    // setErrors(validation(values))
};



  return (
  <div>

      <Navigation />
 
        


        <div className="login-main">
        <Row>
            
              <Col className = "login" lg={7} >
           
             
             <div className="login-left">

             <form >

             <h2>Sign In</h2>
              
            
                  <input className="login-input" type="text"     placeholder="Enter Username"       name="Username"    />
                  {/* {   errors.username && <p className = "error">{errors.username}</p> } */}


                  <input className="login-input" type="password" placeholder="Enter Password"       name="password"    />
                  {/* {   errors.password && <p className = "error">{errors.password}</p> } */}
               

                  <button className="login-btn" onClick={handleFormLogin}>LogIn</button>
                  <h3>Create New account? </h3>

                  <button className="login-btn login-btn2" onClick={handleFormSignup}>SignUp</button>
           

             </form>
             </div>
  
             </Col>     
         
             <Col className = "signup" lg={5}></Col>
   

        </Row>
        </div>
</div>







    
  )
}

export default Sign;
