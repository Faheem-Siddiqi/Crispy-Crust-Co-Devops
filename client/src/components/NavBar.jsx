import React from "react";
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { logoutUser } from "../actions/userAction";
const NavBar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  return (
    <>
  
      <Navbar className="NavBar" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <h5 style={{color:"#FF1493"}}>Crispy Crust Co.</h5>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {currentUser ? (
<>
<LinkContainer to="/" activeClassName="">
<Nav.Link className="linksA">Home</Nav.Link>
</LinkContainer>

<LinkContainer to="/about" activeClassName="">
<Nav.Link className="linksA">About Us</Nav.Link>
</LinkContainer>
   
<LinkContainer to="/contact" activeClassName="">
<Nav.Link className="linksA">Contact Us</Nav.Link>
</LinkContainer>

<LinkContainer to="/policy" activeClassName="">
<Nav.Link className="linksA">Terms and policy</Nav.Link>
</LinkContainer>

                <LinkContainer to="/">
                  <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                    <LinkContainer to="/orders">
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </LinkContainer>
       </>       ) : (
                <>
                  {" "}
                  
                  <LinkContainer to="/" activeClassName="">
              <Nav.Link className="linksA">Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about" activeClassName="">
              <Nav.Link className="linksA">About Us</Nav.Link>
            </LinkContainer>
                 
            <LinkContainer to="/contact" activeClassName="">
              <Nav.Link className="linksA">Contact Us</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/policy" activeClassName="">
              <Nav.Link className="linksA">Terms and policy</Nav.Link>
            </LinkContainer>


                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>Register</Nav.Link>
                  </LinkContainer>{" "}
                </>
              )}

              <LinkContainer to="/cart">
                <Nav.Link > <AiOutlineShoppingCart className="cart" style={{color:"#FF1493" , fontSize:"25px" ,transition:"all 0.3s"}}/>  <span className="cart" style={{color:"#FF1493",padding:"2px 6px 2px 6px",borderRadius:"50px",fontSize:"small"}}>  {cartState.cartItems.length} </span></Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      

    </>
  );
};

export default NavBar;
