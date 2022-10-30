const express = require("express");
const router = express.Router();
const alatBeratController = require("../controller/alatberat");
// const upload = require("../helper/uploader");

router
    .route("/")
    .get(alatBeratController.getAllAlat)
    .post(alatBeratController.postAlat);


router
    .route("/id/:id")
    .get(alatBeratController.getAlatById)
    .put( alatBeratController.editAlat)
    .delete(alatBeratController.deleteAlat);

module.exports = router;