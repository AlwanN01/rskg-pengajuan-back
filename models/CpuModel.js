import { Sequelize } from "sequelize"
import db from "../config/database.js"

const Cpu = db.define(
  "cpu",
  {
    cpu_id: Sequelize.INTEGER,
    hardware_category_id: Sequelize.INTEGER,
    brand: Sequelize.STRING,
    type: Sequelize.STRING,
    codename: Sequelize.STRING,
    base_frequency: Sequelize.DECIMAL,
    cores: Sequelize.INTEGER,
    threads: Sequelize.INTEGER,
    socket: Sequelize.STRING,
    year: Sequelize.INTEGER,
    max_frequency: Sequelize.DECIMAL,
    tdp: Sequelize.INTEGER,
    cache: Sequelize.STRING,
    lithography: Sequelize.INTEGER,
    max_memory: Sequelize.INTEGER,
    memory_type: Sequelize.STRING,
    memory_channel: Sequelize.INTEGER,
    ecc_memory_support: Sequelize.BOOLEAN,
    builtin_graphics: Sequelize.STRING,
    driver: Sequelize.STRING
  },
  {
    freezeTableName: true
  }
)
export default Cpu
