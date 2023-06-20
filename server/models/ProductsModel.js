import db from "../database/db.js";

import {DataTypes} from "sequelize";


const ProductsModel = db.define('products',{
    id: {type: DataTypes.INTEGER, primaryKey: true},
    company: {type: DataTypes.INTEGER},
    name: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    category: {type: DataTypes.STRING},
    price_public: {type: DataTypes.FLOAT},
    price_supplier: {type: DataTypes.FLOAT},
    stock: {type: DataTypes.INTEGER},
    linkP: {type: DataTypes.STRING}    

})

export default ProductsModel