import Wilayah from "../models/WilayahModel.js"
import { dbWilayah } from "../config/database.js"
import { Sequelize } from "sequelize"
export const getAllWilayah = async (req, res) => {
  try {
    const wilayah = await Wilayah.findAll({
      where: Sequelize.where(Sequelize.fn("char_length", Sequelize.col("kode")), 2)
    })
    const cekMessage = () => (wilayah.length > 1 ? "Wilayah Ditemukan" : "Wilayah Tidak Ditemukan")

    res.json({ message: cekMessage(), wilayah })
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const getAllKota = async (req, res) => {
  try {
    const kota = await Wilayah.findAll({
      where: Sequelize.where(Sequelize.fn("length", Sequelize.col("kode")), 5)
    })
    const cekMessage = () => (kota.length > 1 ? "Kota Ditemukan" : "Kota Tidak Ditemukan")

    res.json({ message: cekMessage(), kota })
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const getAllKotaById = async (req, res) => {
  try {
    const kota = await dbWilayah.query(
      `SELECT * FROM wilayah_2020 WHERE length(kode) = 5 AND LEFT(kode, 2) = '${req.params.id}'`,
      { type: Sequelize.QueryTypes.SELECT }
    )
    const cekMessage = () => (kota.length > 1 ? "Kota Ditemukan" : "Kota Tidak Ditemukan")

    res.json({ message: cekMessage(), kota })
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const getAllKecById = async (req, res) => {
  try {
    const kota = await dbWilayah.query(
      `SELECT * FROM wilayah_2020 WHERE length(kode) = 8 AND LEFT(kode, 5) = '${req.params.id}'`,
      { type: Sequelize.QueryTypes.SELECT }
    )
    const cekMessage = () => (kota.length > 1 ? "Kota Ditemukan" : "Kota Tidak Ditemukan")

    res.json({ message: cekMessage(), kota })
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const getAllKelById = async (req, res) => {
  try {
    const kota = await dbWilayah.query(
      `SELECT * FROM wilayah_2020 WHERE length(kode) = 13 AND LEFT(kode, 8) = '${req.params.id}'`,
      { type: Sequelize.QueryTypes.SELECT }
    )
    const cekMessage = () => (kota.length > 1 ? "Kota Ditemukan" : "Kota Tidak Ditemukan")

    res.json({ message: cekMessage(), kota })
  } catch (error) {
    res.json({ message: error.message })
  }
}
