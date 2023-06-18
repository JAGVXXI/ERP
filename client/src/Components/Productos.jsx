import React, { useState, useEffect } from "react";
import "../css/Productos.css"; // Suponiendo que tienes un archivo CSS para los estilos de tus productos
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";

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
    <div className="container">
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
        {productos.map((producto) => (
          <div key={producto.id} className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <div className="card celdaProducto d-flex flex-column justify-content-center">
              <div className="image-container d-flex justify-content-center align-items-center">
                <img
                  src={producto.imagen}
                  className="card-img-top mx-auto"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = "none";
                  }}
                  alt={producto.nombre}
                />
                <p
                  className="image-text"
                  style={{ display: producto.imagen ? "none" : "block" }}
                >
                  {producto.nombre}
                </p>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">Precio: ${producto.precio}</p>
                <Link to={producto.link} className="btn btn-primary">
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
