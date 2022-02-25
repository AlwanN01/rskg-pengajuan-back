import { Sequelize } from "sequelize"
import { dbWilayah } from "../config/database.js"

const { DataTypes } = Sequelize
//nama tabel
const Wilayah = dbWilayah.define(
  "wilayah_2020",
  {
    kode: { type: DataTypes.STRING, primaryKey: true },
    nama: Sequelize.STRING
  },
  {
    freezeTableName: true,
    timestamps: false
  }
)

export default Wilayah
