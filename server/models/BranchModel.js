import db from "../database/db.js";

import {DataTypes} from "sequelize";


const BranchModel = db.define('branch',{
    id: {type: DataTypes.INTEGER, primaryKey: true},
    name: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING},
    company: {type: DataTypes.INTEGER},
    tel: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},

    


})

export default BranchModel