import { Sequelize } from "sequelize"

const db = new Sequelize("rskg_pengajuan", "root", "", {
  host: "localhost",
  dialect: "mysql"
})

export default db
