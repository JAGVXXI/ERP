import db from "../database/db.js";

import {DataTypes} from "sequelize";


const StockModel = db.define('stock',{
    id: {type: DataTypes.INTEGER, primaryKey: true},
    article: {type: DataTypes.INTEGER},
    code: {type: DataTypes.STRING},
    serie: {type: DataTypes.STRING},
    purchase_price: {type: DataTypes.FLOAT},
    entry: {type: DataTypes.INTEGER},
    estado: {type: DataTypes.STRING},
    


})

export default StockModel