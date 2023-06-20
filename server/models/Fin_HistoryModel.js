import db from "../database/db.js";

import {DataTypes} from "sequelize";


const Fin_HistoryModel = db.define('financial_history',{
    id: {type: DataTypes.INTEGER, primaryKey: true},
    company: {type: DataTypes.INTEGER},
    total: {type: DataTypes.FLOAT},
    date: {type: DataTypes.DATE},
    concepto: {type: DataTypes.STRING},

    


})

export default Fin_HistoryModel