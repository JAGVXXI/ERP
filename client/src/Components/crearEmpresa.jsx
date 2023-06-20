import axios from "axios";
import { useState , useEffect } from "react";
import { Link , useNavigate} from "react-router-dom";
import { async } from "rxjs";

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

import '../css/Login.css';

const urlWithProxy = "/api/user/Company/";

const CompCreateCompny = () => {
    const [Cname, setname] = useState('')
    const [Cdescripcion, setDesc] = useState('')
    const [Ccategory, setcat] = useState('')
    const [Ctel, setTel] = useState('')
    const [Caddress, setAdd] = useState('')
    const [Cemail, setEmail] = useState('')
    
    const navegate = useNavigate();

    //Guardar

    const store = async (e) =>{
        e.preventDefault();
        await axios.post(urlWithProxy,{name_C: Cname,description: Cdescripcion,category: Ccategory,tel: Ctel, address: Caddress ,email: Cemail})
        navegate('/')
    }
    return(
        <div className="PLogin">
            <header>
        
                <Navbar/>
            </header>

            <div className="container  py-5" id="conPrin">
              <h2>crear</h2>
              <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Nombre De la empresa</label>
                    <input 
                        value={Cname}
                        onChange={(e)=>setname(e.target.value)}
                        type="text"
                        className="form-control"
                     />
                </div>
                <div className="mb-3">
                    <label className="form-label">Descripcion</label>
                    <input 
                        value={Cdescripcion}
                        onChange={(e)=>setDesc(e.target.value)}
                        type="text"
                        className="form-control"
                     />
                </div>
                <div className="mb-3">
                    <label className="form-label">Catecoria</label>
                    <input 
                        value={Ccategory}
                        onChange={(e)=>setcat(e.target.value)}
                        type="text"
                        className="form-control"
                     />


                </div>

                <div className="mb-3">
                    <label className="form-label">Telefono</label>
                    <input 
                        value={Ctel}
                        onChange={(e)=>setTel(e.target.value)}
                        type="text"
                        className="form-control"
                     />
                </div>
                <div className="mb-3">
                    <label className="form-label">Direccion</label>
                    <input 
                        value={Caddress}
                        onChange={(e)=>setAdd(e.target.value)}
                        type="text"
                        className="form-control"
                     />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                        value={Cemail}
                        onChange={(e)=>setEmail(e.target.value)}
                        type="text"
                        className="form-control"
                     />
                </div>
                <button type="submit" className="btn btn-success"><i class="fa-solid fa-plus"></i></button>
                <Link to="/Admin" className="btn btn-warning mt-2 mb-2"><i class="fa-solid fa-rotate-left"></i></Link>

              </form>
                
            </div>

            <footer>
                <Footer/>
            </footer>
            
        </div>
    )
}
export default CompCreateCompny