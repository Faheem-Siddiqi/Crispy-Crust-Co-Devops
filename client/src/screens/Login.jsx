import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/userAction";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);
  const loginHandler = () => {
    const user = { email, password };
    dispatch(loginUser(user));
  };
  return (
    <>
    <div className="bg">
   
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
         
        }}
      >
        <div
          className="Plogin"
          style={{
            marginTop: "10%",
            backgroundColor: "#333",
            borderRadius: "2px",
            padding: "30px",
          }}
        >
          <Container>
            <Form>
              <h2 style={{ color: "#FF1493" }}>SignIn</h2>
              <Form.Group
                className="mb-3 text-white"
                controlId="formBasicEmail"
              >

          
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group
                className="mb-3 text-white"
                controlId="formBasicPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </Form.Group>
              
              <div className="d-flex justify-content-center">
                <Button
                  className="loginBtn"
                  variant="primary"
                  onClick={loginHandler}
                >
                  Login
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
export default Login;
