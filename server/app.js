import express from "express";
//import { useState , useEffect } from "react";
import cors from "cors";
import db from "./database/db.js";

import passport from "passport";
import cookieParser from "cookie-parser";
import session from "express-session";

import Userrouter from "./Routes/routes.js";

import BlogModel from "./models/BlogModel.js";

//import cors from "cors"

const app = express();

//const PassportLocal = require('passport-local').Strategy;

import { Strategy as PassportLocalStrategy } from "passport-local";

app.use(cors());
app.use(express.json());
app.use("/api/user", Userrouter);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("secreto 1"));

//const cors = require('cors');

// Configuración de CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(
  session({
    secret: "secreto 1",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  "strategy",
  new PassportLocalStrategy(function (username, password, done) {
    /* if(username=== "jesus" && password=="12345678"){
    return done(null,{id: 1, name:"jesus"});
  }
  done(null, false);

*/
    BlogModel.findOne({
      where: {
        username: username,
        password: password,
      },
    })
      .then((resultado) => {
        if (resultado) {
          // El registro fue encontrado
          console.log("----");
          //console.log(resultado);
          console.log(resultado.id);
          console.log("----");

          //console.log(resultado);
          return done(null, { id: resultado.id });
        } else {
          // El registro no fue encontrado
          console.log("No se encontró el registro");
          done(null, false);
        }
      })
      .catch((error) => {
        console.log("Error en la consulta:", error);
      });
  })
);

//serializacion
passport.serializeUser(function (user, done) {
  console.log(user.id);
  done(null, user.id);
});

//deserializacion
passport.deserializeUser(async function (id, done) {
  console.log(id);
  try {
    const ship = await BlogModel.findOne({
      where: { id: id },
      attributes: ["nameU"],
    });

    done(null, { id: id, name: ship.nameU });
  } catch (error) {
    done(error, null);
  }
});

try {
  await db.authenticate();
  console.log("coneccion exitosa a la bd");
} catch (error) {
  console.log(`Error en la coneccion a la BD: ${error}`);
}

app.get("/api/v1", (req, res) => {
  //const todos = await getUserByID(req.params.id);
  //res.status(200).send("hola");
  res.send("hello 2222 !!!!");
});

console.log("test");

app.get(
  "/login",
  (req, res, next) => {
    //si ya iniciamos secion o si no
    //location.replace("https://www.w3schools.com");
    if (req.isAuthenticated()) return next();
    console.log("si");
    res.redirect("http://localhost:5173/Login");
  },
  async (req, res) => {
    console.log("no");

    const user = req.user;
    var shipF;
    //const [shipF, setname] = useState('');
    //const rer = user.id;
    try {
      const ship = await BlogModel.findOne({
        where: { id: user.id },
        attributes: ["rol"],
      });
      //console.log(ship);
      shipF = ship;
    } catch (error) {
      console.log(error);
    }
    console.log(shipF.rol);
    if (shipF.rol == "ceo") {
      res.redirect("http://localhost:5173/UserA");
    } else if (shipF.rol == "empleado") {
      res.redirect("http://localhost:5173/UserB");
    } else if (shipF.rol == "cliente") {
      res.redirect("http://localhost:5173/UserC");
    } else if (shipF.rol == "admin") {
      res.redirect("http://localhost:5173/Admin");
    } else {
      res.redirect("http://localhost:5173/");
    }
  }
);
/*
app.get("/login",(req,res)=>{
  //mandar a pagina del formularioç
  res.redirect('http://localhost:5173/Login');
});*/

app.post(
  "/login",
  passport.authenticate("strategy", {
    successRedirect: "/login",
    failureRedirect: "http://localhost:5173/Login",
  })
);

app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      // Manejar el error de logout
      console.log(err);
      return res.redirect("/login"); // Otra opción de manejo de errores
    }

    // Logout exitoso
    return res.redirect("login"); // Redirige a la página de inicio u otra página después de cerrar sesión
  });
});

// Ejemplo de ruta utilizando Express.js
app.get("/perfil", (req, res) => {
  // Verificar si el usuario está autenticado
  if (req.isAuthenticated()) {
    // Acceder a los datos del usuario autenticado
    const user = req.user;

    // Utilizar los datos del usuario como sea necesario
    console.log(user.id); // Acceder al ID del usuario
    console.log(user.name); // Acceder al nombre del usuario
    res.json({
      message: "Registro eliminado correctamente",
    });
    // Renderizar una vista con los datos del usuario
    //res.render('perfil', { user });
  } else {
    // El usuario no está autenticado, redirigir a la página de inicio de sesión
    console.log("ffff");
  }
});

app.get("/us/company", async (req, res) => {
  // Verificar si el usuario está autenticado
  if (req.isAuthenticated()) {
    // Acceder a los datos del usuario autenticado
    const user = req.user;
    //const rer = user.id;
    /*    try {
      const ship = await BlogModel.findOne({
        where: { id: id },
        attributes: ['nameU']
      });
      
      done(null, { id: id, name: ship.nameU });
    } catch (error) {
      done(error, null);
    }*/
    // Utilizar los datos del usuario como sea necesario
    console.log(user.id); // Acceder al ID del usuario
    console.log(user.name); // Acceder al nombre del usuario
    res.json({ nam: user.name, idd: user.id });
    // Renderizar una vista con los datos del usuario
    //res.render('perfil', { user });
  } else {
    // El usuario no está autenticado, redirigir a la página de inicio de sesión
    console.log("fffff");
  }
});

app.listen(5000, () => console.log(`start listening on port : 5000`));
