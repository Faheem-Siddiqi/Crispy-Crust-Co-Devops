import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { registerUser } from "../actions/userAction";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Success from "../components/Success";
import Error from "../components/Error";

const Registe = () => {
  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, success, loading } = registerState;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfirmPassword] = useState("");




  const dispatch = useDispatch();

  const registerhandler = () => {
    if (password !== confrimPassword) {
      alert("Password do not match");
    } else {
      const user = { name, email, password, confrimPassword };
      dispatch(registerUser(user));
    }
  };
  return (
    <>
    <div className="bg">
 <div  style={{display:"flex" ,justifyContent:"center",alignContent:"center"}}>
 <div className="Preg mb-4" style={{backgroundColor:"#333", borderRadius:"2px",padding :"20px"}}>
      <Container>
        {loading && <Loader />}
        {success && <Success success="User Registered Successfully.Login to  our System " />  }
        {error && <Error error="somthing went wrong" />}
        <Form>
        <h2 style={{color:"#FF1493"}}>SignUp </h2>
          <Form.Group className="mb-3 text-white" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
             className="input"
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
             className="input"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
             className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 text-white" controlId="formBasicConfirmPassword">
            <Form.Label>Confrim Password</Form.Label>
            <Form.Control
             className="input"
              type="password"
              placeholder="Confirm Password"
              value={confrimPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          
          <div className="d-flex justify-content-center">
          <Button className="loginBtn" variant="primary" onClick={registerhandler}>
            Register

          </Button>
          </div>
        </Form>
      </Container>
      
      </div>

      </div>
      </div>
    </>
  );
};

export default Registe;

