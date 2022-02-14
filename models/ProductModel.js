import { Sequelize } from "sequelize"
import db from "../config/database.js"

const { DataTypes } = Sequelize

//nama tabel
const Product = db.define(
  "products",
  {
    title: DataTypes.STRING,
    price: { type: DataTypes.DOUBLE },
    type: Sequelize.ENUM("organik", "non organik"),
    tes_name: DataTypes.STRING
  },
  {
    freezeTableName: true
  }
)

export default Product
