import Karyawan from "../models/KaryawanModel.js"

export const getAllKaryawan = async (req, res) => {
  try {
    const karyawan = await Karyawan.findAll()
    const cekMessage = () => (karyawan.length > 1 ? "Pegawai Ditemukan" : "Pegawai Tidak Ditemukan")

    res.json({ message: cekMessage(), pegawai: karyawan })
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const getKaryawanById = async (req, res) => {
  try {
    const karyawan = await Karyawan.findAll({
      where: {
        id: req.params.id
      }
    })
    res.json(karyawan[0])
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const createKaryawan = async (req, res) => {
  try {
    await Karyawan.create(req.body, { foto_pegawai: "tes" })
    res.json({
      message: "Karyawan Created",
      body: req.body
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const updateKaryawan = async (req, res) => {
  try {
    await Karyawan.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json({
      message: "Karyawan Updated"
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const deleteKaryawan = async (req, res) => {
  try {
    await Karyawan.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json({
      message: "Karyawan Deleted"
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}
