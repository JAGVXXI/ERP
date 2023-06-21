import React, { useState, useEffect } from "react";
import "../css/Productos.css"; // Suponiendo que tienes un archivo CSS para los estilos de tus productos
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";
import { async } from "rxjs";
import axios from "axios";
//Revisar bien lo de la BD y hacer que funcione la barra y hacer página para los servicios e insertar servicios (Jared)

const urlWithProxy = "/api/user/Products/";
export const Productos = () => {
  // Puedes obtener tus categorías y productos de una base de datos, pero por ahora solo usaré datos de muestra (dummy data)
  const categorias = [
    {
      id: 1,
      nombre: "Servicios",
      imagenes: ["#", "#"],
      link: "/servicios",
    },
    {
      id: 2,
      nombre: "Ropa",
      imagenes: ["#", "#"],
      link: "/ropa",
    },
    {
      id: 3,
      nombre: "Alimentos",
      imagenes: ["#", "#"],
      link: "/alimentos",
    },
  ];


  const [Prod, setProd]= useState([])
    useEffect ( ()=>{
        getProd()
    },[])

    //mostrar productos
    const getProd = async () =>{
        const res = await axios.get(urlWithProxy)
        console.log(res);
        setProd(res.data)
    }

  const productos = [
    { id: 1, nombre: "Producto 1", precio: "100", imagen: "#", link: "#" },
    { id: 2, nombre: "Producto 2", precio: "200", imagen: "#", link: "#" },
    { id: 3, nombre: "Producto 3", precio: "300", imagen: "#", link: "#" },

    // Agrega más productos aquí
    { id: 4, nombre: "Producto 4", precio: "400", imagen: "#" },
    { id: 5, nombre: "Producto 5", precio: "500", imagen: "#" },
    { id: 6, nombre: "Producto 6", precio: "600", imagen: "#" },
  ];

  const [activePage, setActivePage] = useState(1);
  const productosPorPagina = 10;
  const totalProductos = 100; // Este número debería venir de tu base de datos

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    // Aquí también necesitarías hacer una solicitud a tu base de datos para obtener los productos de la página correspondiente
  };

  // Aquí es donde se maneja el cambio de imágenes cuando el ratón pasa encima
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  let intervalId = {};

  const handleMouseEnter = (id) => {
    intervalId[id] = setInterval(() => {
      setCurrentImageIndex((prevIndexes) => ({
        ...prevIndexes,
        [id]:
          (prevIndexes[id] + 1) %
          categorias.find((categoria) => categoria.id === id).imagenes.length,
      }));
    }, 2000);
  };

  const handleMouseLeave = (id) => {
    clearInterval(intervalId[id]);
  };

  useEffect(() => {
    // Inicializando currentImageIndex para cada categoría con 0
    const initialImageIndexes = categorias.reduce((acc, categoria) => {
      acc[categoria.id] = 0;
      return acc;
    }, {});
    setCurrentImageIndex(initialImageIndexes);
  }, []);



  return (
    <div className="container" id="prod">
      <div className="row justify-content-md-center">
        {categorias.map((categoria) => (
          <div
            key={categoria.id}
            className="col-sm-12 col-md-4 mb-3"
            onMouseEnter={() => handleMouseEnter(categoria.id)}
            onMouseLeave={() => handleMouseLeave(categoria.id)}
          >
            <div className="card celdaCategoria d-flex flex-column justify-content-center">
              <img
                src={categoria.imagenes[currentImageIndex[categoria.id]]}
                alt={`${categoria.nombre} ${currentImageIndex[categoria.id]}`}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{categoria.nombre}</h5>
                <a href={categoria.link} className="btn btn-primary">
                  Ver más
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row justify-content-md-center">
        {Prod.map((products) => (
          <div key={products.id} className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <div className="card celdaProducto d-flex flex-column justify-content-center">
              <div className="image-container d-flex justify-content-center align-items-center">
                
                <p >
                  {products.name}
                </p>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{products.name}</h5>
                <p className="card-text">Precio: ${products.price_public}</p>

                

                <Link to= {products.linkP} className="btn btn-primary">
                  Ver detalles
                </Link>
               

                
                
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <Pagination
          activePage={activePage}
          itemsCountPerPage={productosPorPagina}
          totalItemsCount={totalProductos}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          itemClass="page-item" // esta es una clase de Bootstrap
          linkClass="page-link" // esta es una clase de Bootstrap
        />
      </div>
    </div>
  );
};

export default Productos;
