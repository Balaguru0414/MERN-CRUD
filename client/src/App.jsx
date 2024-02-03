import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Pages ----------------------------------------
import Users from "./components/Users";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/create" element={<CreateUser />} />
      <Route path="/update/:id" element={<UpdateUser />} />
    </Routes>
  );
}

export default App;
