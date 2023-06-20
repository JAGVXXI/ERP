import db from "../database/db.js";

import {DataTypes} from "sequelize";


const EntryModel = db.define('entry',{
    id: {type: DataTypes.INTEGER, primaryKey: true},
    company: {type: DataTypes.INTEGER},
    supplier: {type: DataTypes.STRING},
    total: {type: DataTypes.FLOAT},
    date: {type: DataTypes.DATE},
    user: {type: DataTypes.INTEGER},
    branch: {type: DataTypes.INTEGER},
    


})

export default EntryModel