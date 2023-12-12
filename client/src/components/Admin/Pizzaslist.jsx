import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Table } from "react-bootstrap";
import { deletePizza, getAllPizzas } from "../../actions/pizzaAction";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { Link } from "react-router-dom";

const Pizzaslist = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;
  console.log(pizzas);
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error>Error while fetching pizzas {error}</Error>
      ) : (
        <div>
            <h2 className="mb-2" style={{ color:"#FF1493"}}>Pizza List</h2>
          <Table striped bordered hover>
            <thead>
              <tr className="text-center">
                <th>Image</th>
                <th>Pizza Name</th>
                <th>Prices</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pizzas &&
                pizzas.map((pizza) => (
                  <tr >
                    <td className="text-center">
                      <img
                        src={pizza.image}
                        alt="logo"
                        width="100px"
                        height="100px"
                        style={{
                          borderRadius:'50px'
                        }}
                      />
                    </td>
                    <td  className="text-center">{pizza.name}</td>
                    <td>
                      Small : {pizza.prices[0]["small"]}
                      <br />
                      Medium : {pizza.prices[0]["medium"]}
                      <br />
                      Large : {pizza.prices[0]["large"]}
                    </td>
                    <td className="text-center">{pizza.category}</td>
                    <td className="text-center">
                      <Link to={`/admin/editpizza/${pizza._id}`}>
                        <AiFillEdit style={{ cursor: "pointer" ,color:"grey" ,marginRight:"5px" }} />
                      </Link>
                      &nbsp;
                      <AiFillDelete
                        style={{ color: "#FF1493", cursor: "pointer" }}
                        onClick={() => {
                          dispatch(deletePizza(pizza._id));
                        }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default Pizzaslist;
