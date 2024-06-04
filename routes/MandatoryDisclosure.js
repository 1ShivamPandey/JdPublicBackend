const express = require("express")
const{MandatoryDisclosurePdfDataUpload,FetchMandatoryDisclosurePdfData,DeleteMandatoryPdfData} = require("../controllers/MandatoryDisclosureController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./MandatoryDisclosure");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });
const router = express.Router();

router.route("/MandatoryDisclosure").post(upload.single("pdfFile"),MandatoryDisclosurePdfDataUpload).get(FetchMandatoryDisclosurePdfData)
router.delete("/MandatoryDisclosure/:id", DeleteMandatoryPdfData);

module.exports=router;