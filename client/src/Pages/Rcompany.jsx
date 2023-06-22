import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { async } from "rxjs";

import React from "react";

import "../css/Login.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { val_company } from "../js/val_company";

const urlWithProxy = "/api/user/";

const initialForm = {
  name: "",
  ap_p: "",
  ap_m: "",
  tel: "",
  direccion: "",
  correo: "",
  usuario: "",
  contraseña: "",
  rol: "",
};
const validationsForm = (form) => {
  let errors = {};
  let expOnlyLetters = /^(([a-zA-ZñáéíóúÑÁÉÍÓÚ]+(\s)*)+)$/;
  let expTel = /^([0-9]{10})$/;
  let expCorreo =
    /^([a-zA-Z0-9ñáéíóúÑÁÉÍÓÚ.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)+)$/;
  let espPass = /^.{8}$/;
  let espTex = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "el campo Nombre es reqerido";
  } else if (!expOnlyLetters.test(form.name.trim())) {
    errors.name = "el campo Nombre solo acepta letras";
  } else if (!form.ap_p.trim()) {
    errors.ap_p = "el campo Apellido paterno es reqerido";
  } else if (!expOnlyLetters.test(form.ap_p.trim())) {
    errors.ap_p = "el campo Apellido P solo acepta letras";
  } else if (!form.ap_m.trim()) {
    errors.ap_m = "el campo Apellido materno es reqerido";
  } else if (!expOnlyLetters.test(form.ap_m.trim())) {
    errors.ap_m = "el campo Apellido M solo acepta letras";
  } else if (!form.tel.trim()) {
    errors.tel = "el campo Telefono es reqerido";
  } else if (!expTel.test(form.tel.trim())) {
    errors.tel = "solo se permiten 10 digitos";
  } else if (!form.direccion.trim()) {
    errors.direccion = "el campo Direccion es reqerido";
  } else if (!espTex.test(form.direccion.trim())) {
    errors.direccion = "este campo solo nacepta hasta 255 caracteres";
  } else if (!form.correo.trim()) {
    errors.correo = "el campo Email es reqerido";
  } else if (!expCorreo.test(form.correo.trim())) {
    errors.correo = "correo incorrecto";
  } else if (!form.usuario.trim()) {
    errors.usuario = "el campo Usuario es reqerido";
  } else if (!form.contraseña.trim()) {
    errors.contraseña = "el campo Password es reqerido";
  } else if (!espPass.test(form.contraseña.trim())) {
    errors.contraseña = "deben ser 8 caracteres";
  } else if (!form.rol.trim()) {
    errors.rol = "el campo Rol es reqerido";
  }

  return errors;
};

const SignUp = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = val_company(initialForm, validationsForm);

  return (
    <div className="PLogin">
      <header>
        <Navbar />
      </header>

      <div className="container  py-5" id="conPrin">
        <div className="ContForm row h-100">
          <h2>REGISTRO DE USUARIO</h2>

          <form onSubmit={handleSubmit} name="formRegUser" id="formRegUser">
            <div className="d-flex">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 bgf px-5 py-5">
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Escribe tu nombre"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.name}
                    required
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Apellido Paterno</label>
                  <input
                    type="text"
                    className="form-control"
                    name="ap_p"
                    placeholder="Escribe tu apellido paterno"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.ap_p}
                    required
                  />
                  {errors.ap_p && <p className="error">{errors.ap_p}</p>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Apellido Materno</label>
                  <input
                    type="text"
                    className="form-control"
                    name="ap_m"
                    placeholder="Escribe tu apellido materno"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.ap_m}
                    required
                  />
                  {errors.ap_m && <p className="error">{errors.ap_m}</p>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Telefono</label>
                  <input
                    type="text"
                    className="form-control"
                    name="tel"
                    placeholder="Telefono"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.tel}
                    required
                  />
                  {errors.tel && <p className="error">{errors.tel}</p>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Direccion</label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="direccion"
                    placeholder="Escribe tu Direccion"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.direccion}
                    required
                  />
                  {errors.direccion && (
                    <p className="error">{errors.direccion}</p>
                  )}
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 bgf px-5 py-5">
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="correo"
                    placeholder="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.correo}
                    required
                  />
                  {errors.correo && <p className="error">{errors.correo}</p>}
                </div>

                <div className="mb-3">
                  <label className="form-label">usuario</label>
                  <input
                    type="text"
                    className="form-control"
                    name="usuario"
                    placeholder="ENombre de usuario"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.usuario}
                    required
                  />
                  {errors.usuario && <p className="error">{errors.usuario}</p>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    name="contraseña"
                    placeholder="Escribe tu password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.contraseña}
                    required
                  />
                  {errors.contraseña && (
                    <p className="error">{errors.contraseña}</p>
                  )}
                </div>
                <div className="mb-3">
                  <label for="genero">ROL:</label> <br />
                  <input
                    type="radio"
                    class="form-check-input"
                    name="rol"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value="cliente"
                    required
                  />
                  Cliente
                  <input
                    type="radio"
                    class="form-check-input"
                    name="rol"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value="empleado"
                    required
                  />
                  Empleado
                  <input
                    type="radio"
                    class="form-check-input"
                    name="rol"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value="ceo"
                    required
                  />
                  CEO/Corporativo
                  {errors.rol && <p className="error">{errors.rol}</p>}
                </div>

                <div className="mb-3 mt-5 justify-content-center">
                  <input
                    type="submit"
                    value="Enviar"
                    className="btn btn-success"
                  />
                  <input
                    type="reset"
                    className="btn btn-primary"
                    value="Limpiar"
                  />
                  <a href="/" className="text-light">
                    <button type="button" class="btn btn-danger">
                      cancelar
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default SignUp;
