const express = require('express');
const router = express.Router();

const verifyToken = require('../middlewares/verifyToken')
const alatberatHandler = require('./handler/alatberat');
const upload = require("../middlewares/uploader")


router.get('/', alatberatHandler.getAllAlat);
router.get('/id/:id', alatberatHandler.getAlatByid)
router.post('/', verifyToken,upload.single("foto_alat"), alatberatHandler.inputAlat);
router.delete('/id/:id', verifyToken, alatberatHandler.deleteAlat)
router.put('/id/:id', verifyToken, upload.single("foto_alat"),alatberatHandler.editAlat)


module.exports =router;

