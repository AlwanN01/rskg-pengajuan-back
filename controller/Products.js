import Product from "../models/ProductModel.js"
import { Op } from "sequelize"
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll()
    const cekMessage = () => (products.length > 1 ? "product Ditemukan" : "product Tidak Ditemukan")

    res.json({ message: cekMessage(), products })
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const getProductsById = async (req, res) => {
  try {
    const products = await Product.findAll({
      where: {
        id: req.params.id
      }
    })
    res.json(products[0])
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const createProduct = async (req, res) => {
  try {
    await Product.create(req.body)
    res.json({
      message: "Product Created"
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const updateProduct = async (req, res) => {
  try {
    await Product.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json({
      message: "Product Updated"
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const deleteProduct = async (req, res) => {
  try {
    await Product.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json({
      message: "Product Deleted"
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}
