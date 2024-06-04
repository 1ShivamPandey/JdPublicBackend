const express = require("express")
const{PdfDataUpload,FetchPdfData,DeletePdfData} = require("../controllers/DashboardPdfController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./ExaminationDatesheet");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });
const router = express.Router();

router.route("/ExaminationDatesheet").post(upload.single("pdfFile"),PdfDataUpload).get(FetchPdfData)
router.delete("/ExaminationDatesheet/:id", DeletePdfData);

module.exports=router;