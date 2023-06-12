import { async } from "rxjs";
import BlogModel from "../models/BlogModel.js";


//mostrar todod los usuarios
export const getAllUsers = async (req,res) => {
    try {
        const users = await BlogModel.findAll()
        res.json(users)
        //res.send("usuario!!!!");
    } catch (error) {
        res.json({message: error.message })
    }

}

//mostrar un usuario
export const getUser = async (req,res) => {
    try {
        const user = await BlogModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(user[0])
    } catch (error) {
        res.json({message: error.message })
    }

}

//Crear un usuario

export const createUser = async (req, res) => {
    try {
        await BlogModel.create(req.body)
        res.json({
            "message": "Registro creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}

//Actualizar registro

export const updateUser = async (req, res) => {
    try {
        await BlogModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message": "Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}

//Eliminar

export const deleteUser = async (req, res) => {
    try {
        await BlogModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message": "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}