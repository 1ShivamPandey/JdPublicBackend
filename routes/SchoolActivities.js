const express = require("express")
const{GalleryDataUpload,FetchGalleryData,DeleteActivitiesData} = require("../controllers/SchoolActivitiesController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./SchoolActivities");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });
const router = express.Router();

router.route("/SchoolActivities").post(upload.single("productImage"),GalleryDataUpload).get(FetchGalleryData)
router.delete("/SchoolActivities/:id", DeleteActivitiesData);

module.exports=router;