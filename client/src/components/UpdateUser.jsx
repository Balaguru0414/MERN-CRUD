import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { URL } from "../api/apiurl";

const UpdateUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");

  useEffect(() => {
    axios.get(`${URL}/getuser/${id}`).then((result) => {
      const user = result.data;
      setname(user.name);
      setemail(user.email);
      setage(user.age);
    });
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`${URL}/updateuser/${id}`, { name, email, age })
      .then((data) => {
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="d-flex bg-success justify-content-center align-items-center vh-100">
      <form onSubmit={handleUpdate} className="w-50 bg-white p-5 rounded">
        <h4>Update USER</h4>
        <div className="mb-3 mt-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name..."
            value={name}
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
            placeholder="Enter email..."
            value={email}
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
            placeholder="Enter age..."
            value={age}
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

export default UpdateUser;
