import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import db from "./config/database.js"
import Routes from "./route/index.js"
import cors from "cors"
import morgan from "morgan"

dotenv.config()
const app = express()
try {
  await db.authenticate()
  console.log("Database connected...")
  await db.sync()
} catch (error) {
  console.log("Connection error", error)
}
app.use(cookieParser())
app.use(cors({ credentials: true, origin: "http://192.168.55.190:3000" }))
app.use(morgan("dev"))
app.use(express.json())
app.use(Routes)

app.listen(5000, () => {
  console.log("Server is running at port 5000")
})
