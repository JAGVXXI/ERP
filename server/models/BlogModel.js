import db from "../database/db.js";

import {DataTypes} from "sequelize";


const BlogModel = db.define('users',{
    id: {type: DataTypes.INTEGER, primaryKey: true},
    nameU: {type: DataTypes.STRING},
    username: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},


})

export default BlogModel