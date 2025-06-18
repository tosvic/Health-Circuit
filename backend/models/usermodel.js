import {DataTypes} from "sequelize"
import { sequelize } from "../configs/dbconfig.js"

const User = sequelize.define("User", {
    fullname: {type:DataTypes.TEXT, allowNull:false},
    email: {type:DataTypes.STRING, allowNull:false, unique:true},
    phoneNumber: {type: DataTypes.STRING, allowNull:false},
    password: {type:DataTypes.STRING, allowNull:false}
},
{timestamps:true})

export default User