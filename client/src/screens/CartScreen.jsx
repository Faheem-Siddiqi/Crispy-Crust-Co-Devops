import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import { addToCart, deleteFromCart } from "../actions/cartAction";
import Checkout from "../components/Checkout";
const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  const subTotal = cartItems.reduce((x, item) => x + item.price, 0);
  return (
    <>
      <Container>
        <Row>
          <Col md={4}>
            <h2 className="mt-5 mb-5" style={{color: "#FF1493"}}>My Cart</h2>
            <Row>
              {cartItems.map((item) => (
                <>
                  <Col md={9}>
                    <h5 style={{color: "#FF1493"}}>
                      {item.name} [{item.varient}]
                    </h5 >
                    <h6 style={{color: "#333"}}>
                      {" "}
                      Price : {item.quantity} * {item.prices[0][item.varient]} ={" RS "}
                      {item.price}
                    </h6>

                    <h6  style={{color: "#333"}} >
                      Quantity :&nbsp;
                      <FaMinusCircle
                       
                        style={{ cursor: "pointer", color:"red"}}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity - 1, item.varient)
                          );
                        }}
                      />{" "}
                      &nbsp;
                      {item.quantity} &nbsp;
                      <FaPlusCircle
                        className="text-success"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity + 1, item.varient)
                          );
                        }}
                      />
                    </h6>
                  </Col>
                  <Col md={5}>
                    <img
                      alt={item.name}
                      src={item.image}
                      style={{ width: "80px", height: "80px" ,borderRadius:"50px" }}
                    />
                    <FaTrash
                      className="text-danger"
                      style={{ cursor: "pointer", marginLeft: "20px" }}
                      onClick={() => {
                        dispatch(deleteFromCart(item));
                      }}
                    />
                  </Col>
                  <hr />
                </>
              ))}
            </Row>
          </Col>
          <>
        <Col md={4} className="mx-5 px-5">
          <h2 className="mt-5 mb-5  " style={{color: "#FF1493"}}>Payment Info</h2>
          <h6 className="text-danger"><b>Stripe mock card</b> <br />  4242 4242 4242 4242 <br /> <b>MM/YY </b><br /> 12/35 <br /> <b>CVC </b> <br /> 123 </h6>
            <h6>Sub Total </h6>
            <h4>RS : {subTotal} /=</h4>
            <Checkout subTotal={subTotal} />
          </Col>
        </> 
        </Row>

       
      </Container>
    </>
  );
};

export default CartScreen;
