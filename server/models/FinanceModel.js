import db from "../database/db.js";

import {DataTypes} from "sequelize";


const FinanceModel = db.define('finance',{
    id: {type: DataTypes.INTEGER, primaryKey: true},
    company: {type: DataTypes.INTEGER},
    start_up_capital: {type: DataTypes.FLOAT},
    current_capital: {type: DataTypes.FLOAT},

})

export default FinanceModel