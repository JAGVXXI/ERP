import db from "../database/db.js";

import {DataTypes} from "sequelize";


const Branch_ServiceModel = db.define('branch_service',{
    id: {type: DataTypes.INTEGER, primaryKey: true},
    branch: {type: DataTypes.INTEGER},
    service: {type: DataTypes.INTEGER}
    
})

export default Branch_ServiceModel