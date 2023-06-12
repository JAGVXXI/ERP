//import "./App.css";
import axios from "axios";
import { useState } from "react";


export default function Prueba() {
  const [data, setData] = useState();
  const urlWithProxy = "/api";

  function getDataFromServer() {
    axios
      .get(urlWithProxy)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error(err);
      });
  }

  return  (
    <div className="prueba">
      <button onClick={getDataFromServer}>Access server using proxy</button>
      <p>data : {data}</p>
    </div>
  );
}



