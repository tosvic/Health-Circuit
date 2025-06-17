import {DataTypes} from "sequelize"
import Sequelize, { sequelize } from "../configs/dbconfig.js"

const User = sequelize.define("User", {
    fullname: {type:DataTypes.TEXT, allowNull:false},
    email: {type:DataTypes.STRING(254), allowNull:false, unique:true},
    phoneNumber: {type: DataTypes.INTEGER, allowNull:false},
    password: {type:DataTypes.STRING, allowNull:false}
},
{timestamps:true})

export default User