import db from "../database/db.js";

import {DataTypes} from "sequelize";


const ServicesModel = db.define('services',{
    id: {type: DataTypes.INTEGER, primaryKey: true},
    company: {type: DataTypes.INTEGER},
    name: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    category: {type: DataTypes.STRING},
    price: {type: DataTypes.FLOAT},
    state: {type: DataTypes.STRING},
    time: {type: DataTypes.TIME},
    modality: {type: DataTypes.STRING},
    


})

export default ServicesModel