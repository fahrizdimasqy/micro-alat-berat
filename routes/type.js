const express = require("express");
const router = express.Router();
const typeController = require("../controller/type");


router
.route("/")
.get(typeController.getAllType)
.post(typeController.postType);


router
.route("/id/:id")
.get(typeController.getTypeById)
.put(typeController.editType)
.delete(typeController.deleteType);

module.exports=router;