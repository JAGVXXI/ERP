import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { async } from "rxjs";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "../css/Login.css";

const urlWithProxy = "/api/user/User/";

const CompCreateUser = () => {
  const [Cname, setname] = useState("");
  const [CusName, setusName] = useState("");
  const [Cpassword, setpassword] = useState("");
  const navegate = useNavigate();

  //Guardar

  const store = async (e) => {
    e.preventDefault();
    await axios.post(urlWithProxy, {
      nameU: Cname,
      username: CusName,
      password: Cpassword,
    });
    navegate("/Admin");
  };
  return (
    <div className="PLogin">
      <header>
        <Navbar />
      </header>

      <div className="container  py-5" id="conPrin">
        <h2>crear</h2>
        <form onSubmit={store}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              value={Cname}
              onChange={(e) => setname(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">usuario</label>
            <input
              value={CusName}
              onChange={(e) => setusName(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              value={Cpassword}
              onChange={(e) => setpassword(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-success">
            <i class="fa-solid fa-plus"></i>
          </button>
          <Link to="/Admin" className="btn btn-warning mt-2 mb-2">
            <i class="fa-solid fa-rotate-left"></i>
          </Link>
        </form>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default CompCreateUser;
