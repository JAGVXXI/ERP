import db from "../database/db.js";

import {DataTypes} from "sequelize";


const C_RRHH_CModel = db.define('control_rrhh_companies',{
    id: {type: DataTypes.INTEGER, primaryKey: true},
    company: {type: DataTypes.INTEGER},
    usuario: {type: DataTypes.INTEGER},
    rol: {type: DataTypes.STRING},
    branch: {type: DataTypes.INTEGER},

    


})

export default C_RRHH_CModel