import React, { useState } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";
const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);
  const [btnText,setBtnText]=useState("Add to Cart")
  const [btnable,setBtnable]=useState(false)
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(pizza, quantity, varient));
    setBtnText("Added")
    setBtnable(true)
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card className="PizzaCardp mt-5  mb-3" style={{ width: "21rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card.Img
            className="mt-4 mb-4 pizz"

            variant="top"
            src={pizza.image}
            style={{ height: "200px", width: "200px", cursor: "pointer" , transition:"all 0.2s"}}
            onClick={handleShow}
          />
        </div>
        <Card.Body className="pp" >
          <Card.Title className="opt text-center" style={{ color: "#FF1493" }}>
            {pizza.name}
          </Card.Title>
          <hr />
          <Card.Text>
            <Row>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div >
                  {" "}
                  <h6 style={{color:"#d32b85"}}>Varients</h6>
                </div>
                <div>
                  {" "}
                  <select
                    className="opt   AddSelect"
                    value={varient}
                    onChange={(e) => setVarient(e.target.value)}
                  >
                    {pizza.varients.map((varient) => (
                      <option   style={{backgroundColor:"black" ,border:"2px solid black" }} key={varient}>{varient}</option>
                    ))}
                  </select>
                </div>
              </div>
            </Row>
            <Row>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div>
                  <h6 style={{color:"#d32b85"}}>Quantity</h6>
                </div>
                <div>
                  <select
                  className="opt   AddSelect"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  >
                    {[...Array(10).keys()].map((v, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </Row>
          </Card.Text>
          <Row>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div>
                <span>
                  {" "}
                  <b style={{color:"#d32b85"}}>Price</b>  <span style={{color:"white"}}> &nbsp;   RS&nbsp;{pizza.prices[0][varient] * quantity} </span> 
                </span>
              </div>
              <div></div>
              <span>
                <Button
                  className="Add  bg-secondary"
                  disabled={btnable}
                  onClick={addToCartHandler}
                >
                  {btnText}
                </Button>
              </span>
            </div>
          </Row>
        </Card.Body>
      </Card>
      {/* modal */}
      <Modal  show={show} onHide={handleClose}>
        <Modal.Body className="ModalP">
          <Modal.Title className="ModalTitle text-center">
            {pizza.name}
          </Modal.Title>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card.Img
              className="img-fluid mt-4"
              variant="top"
              src={pizza.image}
              style={{
               
                width: "280px",
                height: "250px",
                alignContent: "center",
              }}
            />
          </div>
          <div>
            <h6 className="ModalDescriptionTitle mt-3">Description </h6>
            <span className="ModalDescription ">{pizza.description}</span>
          </div>
          <br />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default Pizza;
