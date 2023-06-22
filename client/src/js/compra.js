import axios from "axios";
import { ca } from "date-fns/locale";
import { values } from "lodash";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { async } from "rxjs";
//import { string } from "yargs";
const urlWithProxy = "/api/user/User/";
const urlWithProxy_Secion = "/api/user/";


export const val_compra = (initialForm, validateForm) => {
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
        alert("Registrando usuario");
  
        //await axios.post(urlWithProxy,{nameU: form.name.trim(),ape_p: form.ape_p.trim(), ape_m: form.ape_m.trim(), username: form.usuario.trim() ,password: form.contraseña.trim(), email: form.correo.trim(),address: form.direccion.trim(), tel: form.tel.trim(), rol: form.rol.trim()})
  
        //alert("Registrando usuario");
  
        const {
            numT,
            company,
            customer,
            product,
            //state,
            //total,
            Payment_Method,
            delivery_method,
            amount,
            unit_cost,
            stock
        } = form;
        
        const trimmedCompany = String(company ? company.toString().trim() : "");
        const trimmedCustomer = String(customer ? customer.toString().trim() : "");
        const trimmedProduct = String(product ? product.toString().trim() : "");
        //const trimmedState = String(state ? state.toString().trim() : "");
        const trimmedPay_Met = String(Payment_Method ? Payment_Method.toString().trim() : "");
        const trimmedDel_Met = String(delivery_method ? delivery_method.toString().trim() : "");
        const trimmedAmount = parseInt(amount ? amount.toString().trim() : "");
        const trimmedU_Cost = parseInt(unit_cost ? unit_cost.toString().trim() : "");
        const trimmedU_stock = parseInt(stock ? stock.toString().trim() : "");
        
        if(trimmedU_stock >0){
          alert(trimmedU_stock + trimmedU_stock );
        
          //const { name,  ape_p, ape_m, usuario, contraseña, correo, direccion, tel, rol } = form;
    
          //if (trimmedName && trimmedApeP && trimmedApeM && trimmedUsuario && trimmedContraseña && trimmedCorreo && trimmedDireccion && trimmedTel && trimmedRol) {
          //alert(trimmedName);
    
          //setname(name.trim())

          try{
            const res = await axios.post("http://localhost:5000/api/user/Sale/", {
              company: trimmedCompany ,
              customer: trimmedCustomer,
              
              state: "completado",
              total: trimmedAmount*trimmedU_Cost,
              Payment_Method: trimmedPay_Met,
              delivery_method: trimmedDel_Met,
            });
          
            alert(JSON.stringify(res.data));
          
            window.location.href = "http://localhost:5173/Login";
          
          }catch(error){
              console.error("Error al registrar usuario: ", error);
          }
        }else{
          return;
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

/*
function comprarProducto() {
  
    const hayExistencias = consultarExistencias();
  
    if (hayExistencias) {
      window.location.href = "formulario.html";
    } else {
      alert("¡Producto agotado!");
    }
  }


  const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: 'nombreBD'
});

function consultarExistencias() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT existencias FROM productos WHERE id = ?', [productId], (error));
  })
};
const nodemailer = require('nodemailer');

async function enviarCorreoElectronico() {
  try {
    const transporter = nodemailer.createTransport({
      host: 'TU_HOST_SMTP',
      port: TU_PUERTO_SMTP,
      secure: false, 
      auth: {
        user: 'USUARIO',
        pass: 'CONTRASEÑA'
      }
    });

    const mensaje = {
      from: 'tu_correo@example.com',
      to: 'usuario@example.com',
      subject: 'Compra exitosa',
      text: '¡Gracias por tu compra!'
    };

    const info = await transporter.sendMail(mensaje);
    console.log('Correo enviado con éxito:', info.messageId);
  } catch (error) {
    console.log('Error al enviar el correo:', error);
  }
}*/
/*

export const  val_compra = ()=>{
    alert("infooo");
}
*/
