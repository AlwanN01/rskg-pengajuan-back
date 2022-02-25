import { Sequelize } from "sequelize"

const db = new Sequelize("rskg_pengajuan", "root", "", {
  host: "localhost",
  dialect: "mysql"
})

export const dbWilayah = new Sequelize("wilayah", "root", "", {
  host: "localhost",
  dialect: "mysql"
})

export default db
