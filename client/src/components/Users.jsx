import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL } from "../api/apiurl";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    await axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`${URL}/deleteuser/${id}`);

    getUsers();
  };

  return (
    <div className="container mt-4">
      <h2>MERN - CRUD</h2>
      <br />
      <Link to="/create" className="btn btn-primary mb-3">
        + Add user
      </Link>

      <table className="table table-striped ">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                <Link to={`update/${user._id}`} className="btn btn-success">
                  Update
                </Link>
                &nbsp;
                <button
                  onClick={() => handleDelete(user._id)}
                  className="btn btn-danger m-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
