import axios from "axios";
import { ca } from "date-fns/locale";
import { values } from "lodash";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { async } from "rxjs";
import nodemailer from "nodemailer";
//import { string } from "yargs";
const urlWithProxy = "/api/user/User/";
const urlWithProxy_Secion = "/api/user/";

export const val_regUser = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const navegate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    if (Object.keys(errors).length === 0) {
      //alert("Registrando usuario");

      //await axios.post(urlWithProxy,{nameU: form.name.trim(),ape_p: form.ape_p.trim(), ape_m: form.ape_m.trim(), username: form.usuario.trim() ,password: form.contraseña.trim(), email: form.correo.trim(),address: form.direccion.trim(), tel: form.tel.trim(), rol: form.rol.trim()})

      //alert("Registrando usuario");

      const {
        name,
        ap_p,
        ap_m,
        tel,
        direccion,
        correo,
        usuario,
        contraseña,
        rol,
      } = form;
      const trimmedName = String(name ? name.toString().trim() : "");
      const trimmedApP = String(ap_p ? ap_p.toString().trim() : "");
      const trimmedApM = String(ap_m ? ap_m.toString().trim() : "");
      const trimmedTel = String(tel ? tel.toString().trim() : "");
      const trimmedDireccion = String(
        direccion ? direccion.toString().trim() : ""
      );
      const trimmedCorreo = String(correo ? correo.toString().trim() : "");
      const trimmedUsuario = String(usuario ? usuario.toString().trim() : "");
      const trimmedContraseña = String(
        contraseña ? contraseña.toString().trim() : ""
      );
      const trimmedRol = String(rol ? rol.toString().trim() : "");

      //const { name,  ape_p, ape_m, usuario, contraseña, correo, direccion, tel, rol } = form;

      //if (trimmedName && trimmedApeP && trimmedApeM && trimmedUsuario && trimmedContraseña && trimmedCorreo && trimmedDireccion && trimmedTel && trimmedRol) {
      //alert(trimmedName);

      //setname(name.trim())
try{
      const res = await axios.post(urlWithProxy, {
        nameU: trimmedName,
        ape_p: trimmedApP,
        ape_m: trimmedApM,
        username: trimmedUsuario,
        password: trimmedContraseña,
        email: trimmedCorreo,
        address: trimmedDireccion,
        tel: trimmedTel,
        rol: trimmedRol,
      });

      alert(JSON.stringify(res.data));
      enviarCorreoElectronico();

      window.location.href = "http://localhost:5173/Login";

    }catch(error){
        console.error("Error al registrar usuario: ", error);
    }

      //store(e);
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

async function enviarCorreoElectronico() {
    alert("enviando correo");

    
    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, 
        auth: {
          user: 'garcia.velazquez.jesus.01@gmail.com',
          pass: 'psgkgrstselvtqou'
        }
      });
  
      const mensaje = {
        from: 'garcia.velazquez.jesus.01@gmail.com',
        to: 'chuy.garcia.velazquez@gmail.com',
        subject: 'Compra exitosa',
        text: '¡Gracias por tu compra!'
      };
  
      const info = await transporter.sendMail(mensaje);
      console.log('Correo enviado con éxito:', info.messageId);
    } catch (error) {
      console.log('Error al enviar el correo:', error);
    }
  }
