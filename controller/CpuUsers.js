import CpuUser from "../models/CpuUserModel.js"

export const getAllCpuUser = async (req, res) => {
  try {
    const cpu_user = await CpuUser.findAll()
    const cekMessage = () => (cpu_user.length > 0 ? "cpu Users Ditemukan" : "cpu Users Tidak Ditemukan")

    res.json({ message: cekMessage(), cpu_user })
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const getCpuUserById = async (req, res) => {
  try {
    const cpuUsers = await CpuUser.findAll({
      where: {
        id: req.params.id
      }
    })
    res.json(cpuUsers[0])
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const createCpuUser = async (req, res) => {
  try {
    await CpuUser.create(req.body)
    res.json({
      message: "CpuUser Created"
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const updateCpuUser = async (req, res) => {
  try {
    await CpuUser.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json({
      message: "CpuUser Updated"
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const deleteCpuUser = async (req, res) => {
  try {
    await CpuUser.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json({
      message: "CpuUser Deleted"
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}
