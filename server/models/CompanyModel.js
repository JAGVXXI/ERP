import db from "../database/db.js";

import {DataTypes} from "sequelize";


const CompanyModel = db.define('companies',{
    id: {type: DataTypes.INTEGER, primaryKey: true},
    name_C: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    category: {type: DataTypes.STRING},
    tel: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    


})

export default CompanyModel