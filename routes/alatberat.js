const express = require("express");
const router = express.Router();
const alatBeratController = require("../controller/alatberat");
const upload = require("../helper/uploader");


router
    .route("/")
    .get(alatBeratController.getAllAlat)
    .post(upload.single("foto_alat"), alatBeratController.postAlat);


router
    .route("/id/:id")
    .get(alatBeratController.getAlatById)
    .put( upload.single("foto_alat") ,alatBeratController.editAlat)
    .delete(alatBeratController.deleteAlat);

module.exports = router;