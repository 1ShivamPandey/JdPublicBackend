const express = require("express")
const{GalleryDataUpload,FetchGalleryData,DeleteAdventureData} = require("../controllers/SchoolAdventureController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./SchoolAdventure");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });
const router = express.Router();

router.route("/SchoolAdventure").post(upload.single("productImage"),GalleryDataUpload).get(FetchGalleryData)
router.delete("/SchoolAdventure/:id", DeleteAdventureData);

module.exports=router;