import express from "express"
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/BlogController.js"
import { getAllSerSucS, getSerSuc, createSerSuc, updateSerSuc, deleteSerSuc } from "../controllers/BlogController.js"
import { getAllBranchS, getBranch, createBranch, updateBranch, deleteBranch } from "../controllers/BlogController.js"
import { getAllRRHHS, getRRHH, createRRHH, updateRRHH, deleteRRHH } from "../controllers/BlogController.js"
import { getAllCompanyS, getCompany, createCompany, updateCompany, deleteCompany } from "../controllers/BlogController.js"
import { getAllConceptS, getConcept, createConcept, updateConcept, deleteConcept } from "../controllers/BlogController.js"
import { getAllEntryS, getEntry, createEntry, updateEntry, deleteEntry } from "../controllers/BlogController.js"
import { getAllHisFinS, getHisFin, createHisFin, updateHisFin, deleteHisFin } from "../controllers/BlogController.js"
import { getAllFinanceS, getFinance, createFinance, updateFinance, deleteFinance } from "../controllers/BlogController.js"
import { getAllProductsS, getProducts, createProducts, updateProducts, deleteProducts, PrepProducts } from "../controllers/BlogController.js"
import { getAllSaleS, getSale, createSale, updateSale, deleteSale } from "../controllers/BlogController.js"
import { getAllServiceS, getService, createService, updateService, deleteService } from "../controllers/BlogController.js"
import { getAllShipS, getShip, createShip, updateShip, deleteShip } from "../controllers/BlogController.js"
import { getAllStockS, getStock, createStock, updateStock, deleteStock } from "../controllers/BlogController.js"

import { from } from "rxjs"
const router = express.Router()

router.get('/User/',getAllUsers)
router.get('/User/:id', getUser)
router.post('/User/', createUser)
router.put('/User/:id', updateUser)
router.delete("/User/:id", deleteUser)

router.get('/SerSuc/',getAllSerSucS)
router.get('/SerSuc/:id', getSerSuc)
router.post('/SerSuc/', createSerSuc)
router.put('/SerSuc/:id', updateSerSuc)
router.delete("/SerSuc/:id", deleteSerSuc)

router.get('/Branch/',getAllBranchS)
router.get('/Branch/:id', getBranch)
router.post('/Branch/', createBranch)
router.put('/Branch/:id', updateBranch)
router.delete("/Branch/:id", deleteBranch)

router.get('/RRHH/',getAllRRHHS)
router.get('/RRHH/:id', getRRHH)
router.post('/RRHH/', createRRHH)
router.put('/RRHH/:id', updateRRHH)
router.delete("/RRHH/:id", deleteRRHH)

router.get('/Company/',getAllCompanyS)
router.get('/Company/:id', getCompany)
router.post('/Company/', createCompany)
router.put('/Company/:id', updateCompany)
router.delete("/Company/:id", deleteCompany)

router.get('/Concept/',getAllConceptS)
router.get('/Concept/:id', getConcept)
router.post('/Concept/', createConcept)
router.put('/Concept/:id', updateConcept)
router.delete("/Concept/:id", deleteConcept)

router.get('/Entry/',getAllEntryS)
router.get('/Entry/:id', getEntry)
router.post('/Entry/', createEntry)
router.put('/Entry/:id', updateEntry)
router.delete("/Entry/:id", deleteEntry)

router.get('/HisFin/',getAllHisFinS)
router.get('/HisFin/:id', getHisFin)
router.post('/HisFin/', createHisFin)
router.put('/HisFin/:id', updateHisFin)
router.delete("/HisFin/:id", deleteHisFin)

router.get('/Finance/',getAllFinanceS)
router.get('/Finance/:id', getFinance)
router.post('/Finance/', createFinance)
router.put('/Finance/:id', updateFinance)
router.delete("/Finance/:id", deleteFinance)

router.get('/ProductID/',PrepProducts)
router.get('/Products/',getAllProductsS)
router.get('/Products/:id', getProducts)
router.post('/Products/', createProducts)
router.put('/Products/:id', updateProducts)
router.delete("/Products/:id", deleteProducts)

router.get('/Sale/',getAllSaleS)
router.get('/Sale/:id', getSale)
router.post('/Sale/', createSale)
router.put('/Sale/:id', updateSale)
router.delete("/Sale/:id", deleteSale)

router.get('/Service/',getAllServiceS)
router.get('/Service/:id', getService)
router.post('/Service/', createService)
router.put('/Service/:id', updateService)
router.delete("/Service/:id", deleteService)

router.get('/Ship/',getAllShipS)
router.get('/Ship/:id', getShip)
router.post('/Ship/', createShip)
router.put('/Ship/:id', updateShip)
router.delete("/Ship/:id", deleteShip)

router.get('/Stock/',getAllStockS)
router.get('/Stock/:id', getStock)
router.post('/Stock/', createStock)
router.put('/Stock/:id', updateStock)
router.delete("/Stock/:id", deleteStock)

export default router