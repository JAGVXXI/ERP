import db from "../database/db.js";

import {DataTypes} from "sequelize";


const ConceptModel = db.define('concept',{
    id: {type: DataTypes.INTEGER, primaryKey: true},
    sale: {type: DataTypes.INTEGER},
    type: {type: DataTypes.STRING},
    service: {type: DataTypes.INTEGER},
    product: {type: DataTypes.INTEGER},
    amount: {type: DataTypes.INTEGER},
    unit_cost: {type: DataTypes.FLOAT},
    Total_cost: {type: DataTypes.FLOAT},
    


})

export default ConceptModel