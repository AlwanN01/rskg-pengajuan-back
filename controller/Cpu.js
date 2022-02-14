import Cpu from "../models/CpuModel.js"

export const getAllCpu = async (req, res) => {
  try {
    const cpu = await Cpu.findAll()
    const cekMessage = () => (cpu.length > 1 ? "CPU Ditemukan" : "CPU Tidak Ditemukan")

    res.json({ message: cekMessage(), cpu })
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const getCpuById = async (req, res) => {
  try {
    const cpu = await Cpu.findAll({
      where: {
        id: req.params.id
      }
    })
    res.json(cpu[0])
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const createCpu = async (req, res) => {
  try {
    await Cpu.create(req.body)
    res.json({
      message: "Cpu Created"
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const updateCpu = async (req, res) => {
  try {
    await Cpu.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json({
      message: "Cpu Updated"
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const deleteCpu = async (req, res) => {
  try {
    await Cpu.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json({
      message: "Cpu Deleted"
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}
