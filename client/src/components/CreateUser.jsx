import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { URL } from "../api/apiurl";

const CreateUser = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");

  function handelSubmit(e) {
    e.preventDefault();
    axios
      .post(`${URL}/createuser`, { name, email, age })
      .then((data) => {
        navigate("/");
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="d-flex bg-info justify-content-center align-items-center vh-100">
      <form onSubmit={handelSubmit} className="w-50 bg-white p-5 rounded">
        <h4>CREATE USER</h4>
        <div className="mb-3 mt-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter Name..."
            onChange={(e) => setname(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter email..."
            onChange={(e) => setemail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age:
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            placeholder="Enter age..."
            onChange={(e) => setage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
        &nbsp;
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default CreateUser;
