import React, { useEffect } from "react";
import { getUserOrders } from "../actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";
import Error from "../components/Error";

const OrderScreen = () => {
  const orderState = useSelector((state) => state.getUserOrdersReducer);
  const { loading, error, orders } = orderState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);
  return (
    <>
      <h2 className="text-center  px-5 mt-3"> Your Orders </h2>
      {loading && <Loader />}
      {error && <Error error="something went wrong" />}
      
      {orders &&
        orders.map((order) => (
          <div className="mt-3">
          <div className="container OrdersBox  p-4 ">
            <Row>
              <Col md={4}>
                <h4 className="text-center"  style={{ color: "#FF1493"}}>Items</h4>
              
                {order.orderItems.map((item) => (
                  <h6 key={item.name}>
                    {item.name} [{item.varient}] * {item.quantity}  = 
                    <b>  RS{" "}
                    {item.price}</b>
                  
                  </h6>
                ))}
              </Col>
              <Col md={3} >
               
              <h4 className="text-center"  style={{ color: "#FF1493"}}>Address</h4>
                <h6 >Street : {order.shippingAddress.street}</h6>
                <h6>City : {order.shippingAddress.city}</h6>
                <h6>PinCode : {order.shippingAddress.picode}</h6>
                <h6>Countery : {order.shippingAddress.country}</h6>
              </Col>
              <Col md={5}>
              <h4 className="text-center"  style={{ color: "#FF1493"}}>Order Info</h4>
                <h6 >  <u>Order Amount </u>
                  
                  
                  
                  
                =
                    <b>  RS{" "}
                    
                  <em>
                  {order.orderAmount}</em></b>
                  
             </h6>
                <h6>Transection id : {order.transectionId}</h6>
                <h6>Order id : {order._id}</h6>
              </Col>
            </Row>
          </div>
          </div>
        ))}
    </>
  );
};

export default OrderScreen;
