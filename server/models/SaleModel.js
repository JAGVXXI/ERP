import db from "../database/db.js";

import {DataTypes} from "sequelize";


const SaleModel = db.define('sale',{
    id: {type: DataTypes.INTEGER, primaryKey: true},
    company: {type: DataTypes.INTEGER},
    customer: {type: DataTypes.INTEGER},
    date: {type: DataTypes.DATE},
    state: {type: DataTypes.STRING},
    total: {type: DataTypes.FLOAT},
    Payment_Method: {type: DataTypes.STRING},
    delivery_method: {type: DataTypes.STRING},
    
    


})

export default SaleModel