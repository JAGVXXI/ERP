import React, { useState } from "react";
import styles from "../css/InsertProducts.module.css";

export const InsertProducts = () => {
  const [form, setForm] = useState({
    id_articulo: "",
    nombre: "",
    descripcion: "",
    categoria: "",
    precio_publico: "",
    precio_distribuidor: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const categorias = [
    "Electrónica",
    "Ropa",
    "Hogar y cocina",
    "Juguetes y juegos",
    "Libros",
    "Alimentos y bebidas",
    "Salud y cuidado personal",
    "Belleza",
    "Deportes y aire libre",
    "Automotriz",
  ];

  return (
    <div className={styles.InsertProducts}>
      <div className={styles.container  }>
        <h1 className="text-center">Insertar producto</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <textarea
              className="form-control"
              name="descripcion"
              value={form.descripcion}
              onChange={handleChange}
              required
            />
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center">
              <div className="mb-3" style={{marginTop: "0px"}}>
                <label className="form-label">Categoría</label>
                <select
                  className="form-control"
                  style={{ maxWidth: "200px", marginTop: "0px" }}
                  name="categoria"
                  value={form.categoria}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Elige una categoría --</option>
                  {categorias.map((categoria, index) => (
                    <option key={index} value={categoria}>
                      {categoria}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center">
              <div className="mb-3" style={{marginTop: "0px"}}>
                <label className="form-label">Precio público</label>
                <div className="input-group" style={{ marginTop: "0px" }}>
                  <span className="input-group-text">$</span>
                  <input
                    type="number"
                    className="form-control"
                    style={{ maxWidth: "200px" }}
                    name="precio_publico"
                    value={form.precio_publico}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center">
              <div className="mb-3">
                <label className="form-label">Precio del distribuidor</label>
                <div className="input-group" style={{ marginTop: "0px" }}>
                  <span className="input-group-text">$</span>
                  <input
                    type="number"
                    className="form-control"
                    style={{ maxWidth: "200px" }}
                    name="precio_distribuidor"
                    value={form.precio_distribuidor}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InsertProducts;
