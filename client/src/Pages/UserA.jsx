import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import axios from "axios";
import { tr } from "date-fns/locale";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { async } from "rxjs";

const urlWithProxy = "/api/user/company/";

export const UserA = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const [RRHH, setRRHH] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/us/company", {
        withCredentials: true,
      });
      //console.log("hola");

      const res2 = await axios.get(
        `http://localhost:5000/api/user/RRHH/${res.data.idd}`
      );
      setRRHH(res2.data);

      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  ////////////////7

  const [companys, setCompany] = useState([]);
  useEffect(() => {
    getCompanys();
  }, []);

  //mostrar user
  const getCompanys = async () => {
    const res = await axios.get(urlWithProxy);

    setCompany(res.data);
  };

  //console.log(users.idd);

  if (RRHH.length !== 0) {
    return (
      <div className="PLogin">
        <header>
          <Navbar />
        </header>

        <div className="container  py-5" id="conPrin">
          <p>{RRHH.company}</p>

          <p>Hola: {users.nam}</p>

          <div>
            <p>Agregar Productos</p>
            <p>Agregar Agregar stook</p>
          </div>

          <div>
            <Link
              to="http://localhost:5000/logout"
              className="btn btn-warning mt-2 mb-2"
            >
              Serrar S
            </Link>
          </div>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  } else {
    return (
      <div className="PLogin">
        <header>
          <Navbar />
        </header>

        <div className="container  py-5" id="conPrin">
          <p>{RRHH.company}</p>

          <p>Hola: {users.nam}</p>

          <div>
            <p>Aún no Estas Dentro de una empresa</p>

            <p>Asociar empresa existente:</p>
            <form action="">
              <select id="company" name="company" class="form-select">
                {Array.isArray(companys) &&
                  companys.map((company) => (
                    <option value={company.name_C}>{company.name_C}</option>
                  ))}
              </select>
            </form>

            <p>crear empresa</p>
            <Link
              to="http://localhost:5173/Admin/create/Company"
              className="btn btn-warning mt-2 mb-2"
            >
              Crear empresa
            </Link>
          </div>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
};
