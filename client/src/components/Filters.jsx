import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterPizza } from "../actions/pizzaAction";
const Filters = () => {
  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("all");
  const dispatch = useDispatch();
  return (
    <div className=" mt-4">
   
      <Form>
       

      
        <Row>
    
          <Col>
            <Form.Control
            className="searchPizza"
              value={searchkey}
              onChange={(e) => setsearchkey(e.target.value.toLowerCase())}
              placeholder="Serach Pizza"
            />
          </Col> 
          <Col>
            <select
              className="form-select  searchPizza"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
            >
                <option className="opt">Filter</option>
                <option className="opt">all</option>
              <option className="opt">veg</option>
              <option  className="opt">nonveg</option>
            </select>
          </Col>
          <Col>
            <Button className="SearchBtn"
              onClick={() => {
                dispatch(filterPizza(searchkey, category));
              }}
            >
              Search
            </Button>
          </Col>
          
        </Row>
       
      </Form>
     </div>
   
  );
};

export default Filters;
