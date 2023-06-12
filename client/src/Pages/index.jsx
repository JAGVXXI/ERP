import React from 'react'
import '../css/Home.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export const Landing = () => 

<div className='PHome'>
    
    <header>
        <Navbar/>
    </header>
    <div className="App">
        <div className='carr'>
            
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="true"  data-bs-pause="false">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                    
                    <h1>BIENVENIDOS</h1>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                    <img src="src/Images/promo.png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                    <img src="..." className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    <div className="container  py-5" id="conPrin">
        <div className="row h-100">
    
        <div className='contenedor-principal'>
            
        </div>
        </div>
    </div>
    </div>

    <footer>
        <Footer/>
    </footer>


</div>


