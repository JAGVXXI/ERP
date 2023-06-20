import db from "../database/db.js";

import {DataTypes} from "sequelize";


const ShipmentModel = db.define('shipment',{
    id: {type: DataTypes.INTEGER, primaryKey: true},
    sale: {type: DataTypes.INTEGER},
    Delivery_Status: {type: DataTypes.STRING},
    Deadline: {type: DataTypes.DATE},
    
    


})

export default ShipmentModel