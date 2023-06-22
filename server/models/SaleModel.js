import db from "../database/db.js";

import {DataTypes} from "sequelize";


const SaleModel = db.define('sales',{
    id: {type: DataTypes.INTEGER, primaryKey: true},
    company: {type: DataTypes.INTEGER},
    customer: {type: DataTypes.INTEGER},
    
    state: {type: DataTypes.STRING},
    total: {type: DataTypes.FLOAT},
    Payment_Method: {type: DataTypes.STRING},
    delivery_method: {type: DataTypes.STRING},
    
    


})

export default SaleModel