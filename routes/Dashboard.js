const express = require("express");
const router = express.Router();
const multer = require("multer");
const { GalleryDataUpload, FetchGalleryData, DeleteGalleryData } = require("../controllers/DashboardController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./GalleryImages");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.route("/GalleryDataUpload").post(upload.single("productImage"), GalleryDataUpload).get(FetchGalleryData);

router.delete("/GalleryDataUpload/:id", DeleteGalleryData);

module.exports = router;
