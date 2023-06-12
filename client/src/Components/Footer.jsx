import React from 'react';
//import '../hojas-de-estilo/Testimonio.css';

function Footer(){
    return(
        <div className="bg-dark text-white align-items-end container-fluid ">
            <div className="container">
                <div className="row h-100 pt-5 pb-0">
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 text-center">
                        
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 text-start text-light">
                        <h6 className="text-primary">| Desarrollado por:</h6>
                        <p>CASTILLO GONZALEZ JARED</p>
                        <p>GARCIA VELAZQUEZ JESUS ADIEL</p>
                        <p>HERNANDEZ SOLIS GAEL</p>
                        <p>LARA SARMIENTO ERICK</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 text-start text-light">
                        <h6 className="text-primary">| Informacion:</h6>
                        <p>Proyecto para la UA: ANALISIS Y DISEÑO DE SISTEMAS</p>
                        <p>Sistema de automatizacion de empresas</p>
                        <p>5CM4</p>
                    </div>
                    <div className="row text-center text-white-50 border-top border-primary">
                        <p><i>2023</i></p>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Footer;