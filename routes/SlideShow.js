const express = require("express")
const{GalleryDataUpload,FetchGalleryData,DeleteGalleryData} = require("../controllers/SlideShowController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./SlideShow");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });
const router = express.Router();

router.route("/SlideShow").post(upload.single("productImage"),GalleryDataUpload).get(FetchGalleryData)
router.delete("/SlideShow/:id", DeleteGalleryData);

module.exports=router;