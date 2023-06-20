import db from "../database/db.js";

import {DataTypes} from "sequelize";


const BlogModel = db.define('users',{
    id: {type: DataTypes.INTEGER, primaryKey: true},
    nameU: {type: DataTypes.STRING},
    ape_p: {type: DataTypes.STRING},
    ape_m: {type: DataTypes.STRING},
    username: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING},
    tel: {type: DataTypes.STRING},
    rol: {type: DataTypes.STRING}


})

export default BlogModel