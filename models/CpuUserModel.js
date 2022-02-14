import { Sequelize } from "sequelize"
import db from "../config/database.js"

const CpuUser = db.define(
  "cpu_user",
  {
    cpu_user_id: Sequelize.INTEGER,
    cpu_id: Sequelize.INTEGER,
    karyawan_id: Sequelize.INTEGER,
    operator_it_id: Sequelize.INTEGER,
    riwayat_perbaikan_id: Sequelize.INTEGER,
    pembelian_id: Sequelize.INTEGER,
    kode_inventaris: Sequelize.STRING,
    tgl_segel: Sequelize.DATE,
    tgl_akhir_garansi: Sequelize.DATE,
    batch_or_sn: Sequelize.STRING
  },
  {
    freezeTableName: true
  }
)
export default CpuUser
