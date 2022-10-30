const express = require("express");
const router = express.Router();
const detailSewaController = require("../controller/detail_sewa");

router
    .route("/detail")
    .get(detailSewaController.getDetailSewa)

module.exports = router;