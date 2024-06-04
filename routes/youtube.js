const express = require("express")
const{YoutubeLinkUpload,FetchYoutubeVideo,DeleteYoutubeData} = require("../controllers/YoutubeController");

const router = express.Router();

router.route("/link").post(YoutubeLinkUpload).get(FetchYoutubeVideo)
router.delete("/link/:id", DeleteYoutubeData);

module.exports=router;