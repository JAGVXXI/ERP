import express from "express";

import cors from 'cors';
import db from "./database/db.js";


import passport  from 'passport';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import Userrouter from './Routes/routes.js'

import BlogModel from "./models/BlogModel.js";



const app = express();

//const PassportLocal = require('passport-local').Strategy; 

import { Strategy as PassportLocalStrategy } from 'passport-local';

app.use(cors());
app.use(express.json());
app.use('/api/user', Userrouter); 
app.use(express.urlencoded({extended: true}));
app.use(cookieParser('secreto 1'));





app.use(session({
  secret:'secreto 1',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


passport.use('strategy', new PassportLocalStrategy(function(username, password, done){
 /* if(username=== "jesus" && password=="12345678"){
    return done(null,{id: 1, name:"jesus"});
  }
  done(null, false);

*/
  BlogModel.findOne({
    where: {
      username: username,
      password: password
    }
  })
    .then(resultado => {
      if (resultado) {
        // El registro fue encontrado

        console.log(resultado);
        return done(null,{id: BlogModel.findOne({
          where: {
            username: username,
            password: password
          },
          attributes: ['id'] // Especifica la columna que deseas seleccionar
        })
      });
      } else {
        // El registro no fue encontrado
        console.log('No se encontró el registro');
        done(null, false);
      }
    })
    .catch(error => {
      console.log('Error en la consulta:', error);
    });

  
}));


//serializacion
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

//deserializacion
passport.deserializeUser(function(id, done) {
  // Aquí puedes realizar una búsqueda en la base de datos usando el ID y devolver el usuario correspondiente.
  // Por ahora, simplemente devolveremos un objeto de usuario falso.
  done(null, { id: id, name: "jesus" });
});

try {
  await db.authenticate() 
  console.log('coneccion exitosa a la bd')
} catch (error) {
  console.log(`Error en la coneccion a la BD: ${error}`)
}


app.get("/api/v1", (req, res) => {
  //const todos = await getUserByID(req.params.id);
  //res.status(200).send("hola");
  res.send("hello 2222 !!!!");
  
});


console.log("test");

app.get("/login", (req, res, next) => { //si ya iniciamos secion o si no
  //location.replace("https://www.w3schools.com");
  if (req.isAuthenticated()) return next();
  res.redirect('http://localhost:5173/Login');
},(req,res)=>{
  res.redirect('http://localhost:5173/Admin');
 
});
/*
app.get("/login",(req,res)=>{
  //mandar a pagina del formularioç
  res.redirect('http://localhost:5173/Login');
});*/

app.post("/login",passport.authenticate('strategy',{
  successRedirect:"/login",
  failureRedirect:"http://localhost:5173/Login"
}));

app.listen(5000, () => console.log(`start listening on port : 5000`));
