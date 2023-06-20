import React from 'react';
import Prueba from '../Components/Prueba'
import CompShowUser from '../Components/usuarios'

import '../css/Login.css';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export const Login = () => {

if( 1==1){
    return(

<div className="PLogin">
    <header>
        
        <Navbar/>
    </header>

    <div className="container  py-5" id="conPrin">

       
      
        <div className="ContForm row h-100">

            <div className="col-sm-12 col-md-4 col-lg-6 col-xl-6 bg">
                
            </div>
            <div className="col-sm-12 col-md-8 col-lg-6 col-xl-6 bgf h-100">
                
                
                <div class=" py-5 px-5 text-center h-100 " >   
                    <h2>INICIO SESION USUARIO</h2>                 
                    <div className="h-75 row align-items-center">
                        <div className="d-grid grap-2 py-2 h-100 secInp" >

                            <form className="form1" action="http://localhost:5000/login" method="POST" id="SesAdmin" name="SesAdmin">
                                
                                <div  className="row px-2">
                                    <label for="opcion">ROL DE USUARIO:</label><br/>
                                    
                                    

                                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                        <label for="username">NOMBRE DE USUARIO</label><br/>
                                        <input type="text" class="form-control" name="username" id="username"/>
                                        <i className="error text-warning" id="nomUs_error"></i>
                                        <br/>
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                        <label for="password">CONTRASEÑA</label><br/>
                                        <input type="password" className="form-control" name="password" id="password" />
                                        <i className="error text-warning" id="pass_error"></i>
                                        <br/>
                                    </div>
                                    
                                </div>
                                <br />
                                <button type="submit" className="btn btn-success" >iniciar sesion</button>
                                
                                <button type="reset" className="btn btn-primary">Limpiar</button>
                                <a href="/" className="text-light"><button type="button" class="btn btn-danger">cancelar</button></a>


                            </form>
                                                 
                        </div>
                    </div>

                    <div>
                        <p>: )</p>
                    </div>
                
                </div>
                
            </div>
        </div> 
        
    </div>

    <footer>
        <Footer/>
    </footer>

</div>
    )
}else{

    return(
<div className="PLogin">
    <div className="PLogin">
    <header>
        
        <Navbar/>
    </header>

    <div className="container  py-5" id="conPrin">

       
      
        
        
    </div>

    <footer>
        <Footer/>
    </footer>

</div>
</div>
    )
}

}