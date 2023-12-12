import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { Table } from "react-bootstrap";
import { deleteUser, getAllUsers } from "../../actions/userAction";
import Loader from "./../Loader";
import Error from "./../Error";

const Userlist = () => {
  const userState = useSelector((state) => state.getAllUsersReducer);
  const { loading, error, users } = userState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <div>
      <h2 className="mb-2" style={{ color:"#FF1493"}}>User List</h2>
      {loading && <Loader />}
      {error && <Error error="Error While Fetching Users" />}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center">User ID</th>
            <th className="text-center">Name</th>
            <th className="text-center">Email</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr className="text-center" key={user._id}>
                <td> {user._id}</td>
                <td >{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <AiFillDelete
                    style={{ color: "#FF1493", cursor: "pointer" }}
                    onClick={() => {
                      dispatch(deleteUser(user._id));
                    }}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Userlist;
