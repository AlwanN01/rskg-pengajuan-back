import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import db from "./config/database.js"
import Routes from "./route/index.js"
import cors from "cors"
import morgan from "morgan"

import multer from "multer"
import { fileURLToPath } from "url"
import path from "path"
import { dirname } from "path"
import bodyParser from "body-parser"

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

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/fileUpload")
  },
  filename: function (req, file, cb) {
    cb(null, path.parse(file.originalname).name + "-" + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage })

app.post("/api/upload", upload.single("photo"), (req, res) => {
  //save db
  let finalImageURL = req.protocol + "://" + req.get("host") + "/fileUpload/" + req.file.filename
  res.json({ status: "success", image: finalImageURL })
})

app.listen(5000, () => {
  console.log("Server is running at port 5000")
})
