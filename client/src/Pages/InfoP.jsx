import '../css/Login.css';
import '../css/InfProd.css';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

import axios from "axios";
import { tr } from "date-fns/locale";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { async } from "rxjs";
import imagenLogo from '../Images/logo2.png';

const urlWithProxy = "/api/user/company/";



export const Infop = () => {


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


    const [product, setProduct]= useState([])
    useEffect ( ()=>{
        getproduct()
    },[])
    
    const getproduct = async () => {
        try {
          
          
            const res2 = await axios.get(`http://localhost:5000/api/user/Products/${prodId}`)

          setProduct(res2.data);
        } catch (error) {
          console.log(error);
        }
      };


return(


<div className='PHome'>

    
    
    <header>
        <Navbar/>
    </header>
    <div className="container py-5">
        <p>{prodId}</p>
        <p>{product.name}</p>
        <div>
            <img className='imLogo' src={imagenLogo} alt='logo equipo' width="200px" />
        </div>

        
        <p>Descripción: {product.description}</p>
        <p>Categoria:  {product.category}</p>
        <p>Precio: ${product.price_public}</p>


        
    </div>
    <div className='InfoCompra'>
        <div className='container'>
            <form action="">
            <label for="fp">Forma de pago</label><br/>
                <input type="text" name="" id="" className="form-control fp" placeholder="Escribe la forma de pago"  />
                <input type="submit" className="btn btn-success"  name="" id="" value="Comprar" />
            </form>

        </div>
    

    </div>
       

    <footer>
        <Footer/>
    </footer>


</div>

)


}