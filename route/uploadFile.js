import express from "express"
import multer from "multer"
import { fileURLToPath } from "url"
import path from "path"
import { dirname } from "path"
import bodyParser from "body-parser"
const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/fileUpload")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
    cb(null, file.fieldname + "-" + uniqueSuffix)
  }
})

const upload = multer({ storage })

app.post("/api/upload", upload.single("photo"), (req, res) => {
  //save db
  let finalImageURL = req.protocol + "://" + req.get("host") + "/uploads" + req.file.filename
  res.json({ status: "success", image: finalImageURL })
})

export default app
