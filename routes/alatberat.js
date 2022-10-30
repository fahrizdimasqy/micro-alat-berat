const express = require("express");
const router = express.Router();
const alatBeratController = require("../controller/alatberat");
<<<<<<< HEAD
// const upload = require("../helper/uploader");
=======
const upload = require("../helper/uploader");
>>>>>>> cbed378da8fe6635ecbd85b32d7e1e3b7664586a


router
    .route("/")
    .get(alatBeratController.getAllAlat)
<<<<<<< HEAD
    .post(alatBeratController.postAlat);
=======
    .post(upload.single("foto_alat"), alatBeratController.postAlat);
>>>>>>> cbed378da8fe6635ecbd85b32d7e1e3b7664586a


router
    .route("/id/:id")
    .get(alatBeratController.getAlatById)
<<<<<<< HEAD
    .put( alatBeratController.editAlat)
=======
    .put( upload.single("foto_alat") ,alatBeratController.editAlat)
>>>>>>> cbed378da8fe6635ecbd85b32d7e1e3b7664586a
    .delete(alatBeratController.deleteAlat);

module.exports = router;