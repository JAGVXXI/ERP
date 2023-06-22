import axios from "axios";
import { useState , useEffect } from "react";
import { Link , useNavigate} from "react-router-dom";
import { async } from "rxjs";

import React from 'react';
import { val_compra } from "../js/compra";


import '../css/Login.css';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
//import { val_regUser } from "../js/val_regUser";

//const urlWithProxy = "/api/user/";





const initialForm = {
    numT:"",
    company: "",
    customer: "",
    product:"",
   // state: "",
    //total: "",
    Payment_Method: "",
    delivery_method: "",
    amount:"",
    unit_cost:"",
    stock:""
 
  };

  const validationsForm = (form) => {
  let errors = {};
    
  
    return errors;
  };
  

export const DataCompra = () => {

    /**
 * @param String name
 * @return String
 */
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var prodId = getParameterByName('prodId');

    const {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
      } = val_compra(initialForm, validationsForm);


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

      form.customer=res.data.idd;
      

      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };


  const [product, setProduct]= useState([])
    useEffect ( ()=>{
        getproduct()
    },[])
    
    const getproduct = async () => {
        try {
          
          
            const res2 = await axios.get(`http://localhost:5000/api/user/Products/${prodId}`)

            form.product= res2.data.id;
            form.company=res2.data.company;
            form.unit_cost=res2.data.price_public;
            form.stock=res2.data.stock;
          setProduct(res2.data);
        } catch (error) {
          console.log(error);
        }
    };

  
    

    return(

        <div className="PLogin">
            <header>
                <Navbar/>
            </header>

            <div className="container  py-5" id="conPrin">

            <div className='InfoCompra'>
            <div className='container'>
                <h1>{product.name}</h1>
            


            <form id="formulario-pago" onSubmit={handleSubmit}>
                

                <div className="mb-3">
                  <label className="form-label">Cantidad</label>
                  <input
                    type="text"
                    className="form-control"
                    name="amount"
                    placeholder="Escribe tu nombre"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.amount}
                    required
                  />

                </div>
                <div className="mb-3">
                  <label className="form-label">Forma de pago</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Payment_Method"
                    placeholder="Escribe tu nombre"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.Payment_Method}
                    required
                  />

                </div>
                <div className="mb-3">
                  <label className="form-label">Numero De tarjeta</label>
                  <input
                    type="text"
                    className="form-control"
                    name="numT"
                    placeholder="Escribe tu nombre"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.numT}
                    required
                  />

                </div>


                <label for="nombre">Nombre en la tarjeta:</label>
                <input type="text" id="nombre" name="nombre" required/>

                <label for="fecha-caducidad">Fecha de caducidad:</label>
                <input type="text" id="fecha-caducidad" name="fecha-caducidad" placeholder="MM/AA" required/>

                <label for="codigo-seguridad">Código de seguridad:</label>
                <input type="text" id="codigo-seguridad" name="codigo-seguridad" required/>

                <label for="direccion-envio">Dirección de envío:</label>
                <input type="text" id="direccion-envio" name="direccion-envio" required/>

                <div className="mb-3">
                  <label className="form-label">Metodo de envio</label>
                  <input
                    type="text"
                    className="form-control"
                    name="delivery_method"
                    placeholder="Escribe tu nombre"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.delivery_method}
                    required
                  />

                </div>

                <div className="mb-3 mt-5 justify-content-center">
                  <input
                    type="submit"
                    value="Enviar"
                    className="btn btn-success"
                  />
                </div>
            </form>
            




        </div>
    

        </div>

            
        </div>

            <footer>
                <Footer/>
            </footer>

        </div>
    )
}

