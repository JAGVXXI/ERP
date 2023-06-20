import { async } from "rxjs";
import BlogModel from "../models/BlogModel.js";
import Branch_ServiceModel from "../models/Branch_ServiceModel.js";
import BranchModel from "../models/BranchModel.js";
import C_RRHH_CModel from "../models/C_RRHH_CModel.js";
import CompanyModel from "../models/CompanyModel.js";
import ConceptModel from "../models/ConceptModel.js";
import EntryModel from "../models/EntryModel.js";
import Fin_HistoryModel from "../models/Fin_HistoryModel.js";
import FinanceModel from "../models/FinanceModel.js";
import ProductsModel from "../models/ProductsModel.js";
import SaleModel from "../models/SaleModel.js";
import ServicesModel from "../models/ServicesModel.js";
import ShipmentModel from "../models/ShipmentModel.js";
import StockModel from "../models/StockModel.js";

/********** USUARIOS *********/
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
            message: "Registro creado correctamente"
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
            message: "Registro actualizado correctamente"
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

/********** SERVICIOS SUCURSAL *********/
//mostrar todod 
export const getAllSerSucS = async (req,res) => {
    try {
        const SerSucS = await Branch_ServiceModel.findAll()
        res.json(SerSucS)
        //res.send("usuario!!!!");
    } catch (error) {
        res.json({message: error.message })
    }
}
//mostrar 
export const getSerSuc = async (req,res) => {
    try {
        const SerSuc = await Branch_ServiceModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(SerSuc[0])
    } catch (error) {
        res.json({message: error.message })
    }
}
//Crear 
export const createSerSuc = async (req, res) => {
    try {
        await Branch_ServiceModel.create(req.body)
        res.json({
            message: "Registro creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}
//Actualizar registro
export const updateSerSuc = async (req, res) => {
    try {
        await Branch_ServiceModel.update(req.body, {
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
export const deleteSerSuc = async (req, res) => {
    try {
        await Branch_ServiceModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message": "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}


/********** SUCURSAL *********/
//mostrar todod 
export const getAllBranchS = async (req,res) => {
    try {
        const BranchS = await BranchModel.findAll()
        res.json(BranchS)
        //res.send("usuario!!!!");
    } catch (error) {
        res.json({message: error.message })
    }
}
//mostrar 
export const getBranch = async (req,res) => {
    try {
        const Branch = await BranchModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(Branch[0])
    } catch (error) {
        res.json({message: error.message })
    }
}
//Crear 
export const createBranch = async (req, res) => {
    try {
        await BranchModel.create(req.body)
        res.json({
            message: "Registro creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}
//Actualizar registro
export const updateBranch = async (req, res) => {
    try {
        await BranchModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            message: "Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}
//Eliminar
export const deleteBranch = async (req, res) => {
    try {
        await BranchModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            message: "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}


/********** Control RRHH Empresa *********/
//mostrar todod 
export const getAllRRHHS = async (req,res) => {
    try {
        const RRHHS = await C_RRHH_CModel.findAll()
        res.json(RRHHS)
        //res.send("usuario!!!!");
    } catch (error) {
        res.json({message: error.message })
    }
}
//mostrar 
export const getRRHH = async (req,res) => {
    try {
        const RRHH = await C_RRHH_CModel.findAll({
            where:{ usuario:req.params.id }
        })
        res.json(RRHH[0])
    } catch (error) {
        res.json({message: error.message })
    }
}
//Crear 
export const createRRHH = async (req, res) => {
    try {
        await C_RRHH_CModel.create(req.body)
        res.json({
            message: "Registro creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}
//Actualizar registro
export const updateRRHH = async (req, res) => {
    try {
        await C_RRHH_CModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            message: "Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}
//Eliminar
export const deleteRRHH = async (req, res) => {
    try {
        await C_RRHH_CModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            message: "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}


/********** Empresa *********/
//mostrar todod 
export const getAllCompanyS = async (req,res) => {
    try {
        const companyS = await CompanyModel.findAll()
        res.json(companyS)
        //res.send("usuario!!!!");
    } catch (error) {
        res.json({message: error.message })
    }
}
//mostrar 
export const getCompany = async (req,res) => {
    try {
        const company = await CompanyModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(company[0])
    } catch (error) {
        res.json({message: error.message })
    }
}
//Crear 
export const createCompany = async (req, res) => {
    try {
        await CompanyModel.create(req.body)
        res.json({
            message: "Registro creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}
//Actualizar registro
export const updateCompany = async (req, res) => {
    try {
        await CompanyModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            message: "Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}
//Eliminar
export const deleteCompany = async (req, res) => {
    try {
        await CompanyModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            message: "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}



/********** Concepto *********/
//mostrar todod 
export const getAllConceptS = async (req,res) => {
    try {
        const conceptS = await ConceptModel.findAll()
        res.json(conceptS)
        //res.send("usuario!!!!");
    } catch (error) {
        res.json({message: error.message })
    }
}
//mostrar 
export const getConcept = async (req,res) => {
    try {
        const concept = await ConceptModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(concept[0])
    } catch (error) {
        res.json({message: error.message })
    }
}
//Crear 
export const createConcept = async (req, res) => {
    try {
        await ConceptModel.create(req.body)
        res.json({
            message: "Registro creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}
//Actualizar registro
export const updateConcept = async (req, res) => {
    try {
        await ConceptModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            message: "Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}
//Eliminar
export const deleteConcept = async (req, res) => {
    try {
        await ConceptModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            message: "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}



/********** Ingreso *********/
//mostrar todod 
export const getAllEntryS = async (req,res) => {
    try {
        const entryS = await EntryModel.findAll()
        res.json(entryS)
        //res.send("usuario!!!!");
    } catch (error) {
        res.json({message: error.message })
    }
}
//mostrar 
export const getEntry = async (req,res) => {
    try {
        const entry = await EntryModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(entry[0])
    } catch (error) {
        res.json({message: error.message })
    }
}
//Crear 
export const createEntry = async (req, res) => {
    try {
        await EntryModel.create(req.body)
        res.json({
            message: "Registro creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}
//Actualizar registro
export const updateEntry = async (req, res) => {
    try {
        await EntryModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            message: "Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}
//Eliminar
export const deleteEntry = async (req, res) => {
    try {
        await EntryModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            message: "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}


/********** Historial Financiero *********/
//mostrar todod 
export const getAllHisFinS = async (req,res) => {
    try {
        const HisFinS = await Fin_HistoryModel.findAll()
        res.json(HisFinS)
        //res.send("usuario!!!!");
    } catch (error) {
        res.json({message: error.message })
    }
}
//mostrar 
export const getHisFin = async (req,res) => {
    try {
        const HisFin = await Fin_HistoryModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(HisFin[0])
    } catch (error) {
        res.json({message: error.message })
    }
}
//Crear 
export const createHisFin = async (req, res) => {
    try {
        await Fin_HistoryModel.create(req.body)
        res.json({
            message: "Registro creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}
//Actualizar registro
export const updateHisFin = async (req, res) => {
    try {
        await Fin_HistoryModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            message: "Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}
//Eliminar
export const deleteHisFin = async (req, res) => {
    try {
        await Fin_HistoryModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            message: "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}


/********** Finanzas *********/
//mostrar todod 
export const getAllFinanceS = async (req,res) => {
    try {
        const FinanceS = await FinanceModel.findAll()
        res.json(FinanceS)
        //res.send("usuario!!!!");
    } catch (error) {
        res.json({message: error.message })
    }
}
//mostrar 
export const getFinance = async (req,res) => {
    try {
        const Finance = await FinanceModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(Finance[0])
    } catch (error) {
        res.json({message: error.message })
    }
}
//Crear 
export const createFinance = async (req, res) => {
    try {
        await FinanceModel.create(req.body)
        res.json({
            message: "Registro creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}
//Actualizar registro
export const updateFinance = async (req, res) => {
    try {
        await FinanceModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            message: "Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}
//Eliminar
export const deleteFinance = async (req, res) => {
    try {
        await FinanceModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            message: "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}


/********** Productos *********/
//mostrar todod 
export const getAllProductsS = async (req,res) => {
    try {
        const ProductsS = await ProductsModel.findAll()
        res.json(ProductsS)
        //res.send("usuario!!!!");
    } catch (error) {
        res.json({message: error.message })
    }
}
//mostrar 
export const getProducts = async (req,res) => {
    try {
        const Products = await ProductsModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(Products[0])
    } catch (error) {
        res.json({message: error.message })
    }
}
//Crear 
export const createProducts = async (req, res) => {
    try {
        await ProductsModel.create(req.body)
        res.json({
            message: "Registro creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}
//Actualizar registro
export const updateProducts = async (req, res) => {
    try {
        await ProductsModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            message: "Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}
//Eliminar
export const deleteProducts = async (req, res) => {
    try {
        await ProductsModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            message: "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}


export const PrepProducts = async (req,res) => {
    try {
        const Prep = await ProductsModel.findAll({
            attributes: ['id'],
            order: [['id', 'DESC']]
        })
        res.json(Prep[0])
    } catch (error) {
        res.json({message: error.message })
    }
}




/********** Venta *********/
//mostrar todod 
export const getAllSaleS = async (req,res) => {
    try {
        const SaleS = await SaleModel.findAll()
        res.json(SaleS)
        //res.send("usuario!!!!");
    } catch (error) {
        res.json({message: error.message })
    }
}
//mostrar 
export const getSale = async (req,res) => {
    try {
        const Sale = await SaleModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(Sale[0])
    } catch (error) {
        res.json({message: error.message })
    }
}
//Crear 
export const createSale = async (req, res) => {
    try {
        await SaleModel.create(req.body)
        res.json({
            message: "Registro creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}
//Actualizar registro
export const updateSale = async (req, res) => {
    try {
        await SaleModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            message: "Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}
//Eliminar
export const deleteSale = async (req, res) => {
    try {
        await SaleModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            message: "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}


/********** Servicios *********/
//mostrar todod 
export const getAllServiceS = async (req,res) => {
    try {
        const ServiceS = await ServicesModel.findAll()
        res.json(ServiceS)
        //res.send("usuario!!!!");
    } catch (error) {
        res.json({message: error.message })
    }
}
//mostrar 
export const getService = async (req,res) => {
    try {
        const Service = await ServicesModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(Service[0])
    } catch (error) {
        res.json({message: error.message })
    }
}
//Crear 
export const createService = async (req, res) => {
    try {
        await ServicesModel.create(req.body)
        res.json({
            message: "Registro creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}
//Actualizar registro
export const updateService = async (req, res) => {
    try {
        await ServicesModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            message: "Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}
//Eliminar
export const deleteService = async (req, res) => {
    try {
        await ServicesModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            message: "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}


/********** Envio *********/
//mostrar todod 
export const getAllShipS = async (req,res) => {
    try {
        const ShipS = await ShipmentModel.findAll()
        res.json(ShipS)
        //res.send("usuario!!!!");
    } catch (error) {
        res.json({message: error.message })
    }
}
//mostrar 
export const getShip = async (req,res) => {
    try {
        const Ship = await ShipmentModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(Ship[0])
    } catch (error) {
        res.json({message: error.message })
    }
}
//Crear 
export const createShip = async (req, res) => {
    try {
        await ShipmentModel.create(req.body)
        res.json({
            message: "Registro creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}
//Actualizar registro
export const updateShip = async (req, res) => {
    try {
        await ShipmentModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            message: "Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}
//Eliminar
export const deleteShip = async (req, res) => {
    try {
        await ShipmentModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            message: "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}

/********** Stock *********/
//mostrar todod 
export const getAllStockS = async (req,res) => {
    try {
        const StockS = await StockModel.findAll()
        res.json(StockS)
        //res.send("usuario!!!!");
    } catch (error) {
        res.json({message: error.message })
    }
}
//mostrar 
export const getStock = async (req,res) => {
    try {
        const Stock = await StockModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(Stock[0])
    } catch (error) {
        res.json({message: error.message })
    }
}
//Crear 
export const createStock = async (req, res) => {
    try {
        await StockModel.create(req.body)
        res.json({
            message: "Registro creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}
//Actualizar registro
export const updateStock = async (req, res) => {
    try {
        await StockModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            message: "Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}
//Eliminar
export const deleteStock = async (req, res) => {
    try {
        await StockModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            message: "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}