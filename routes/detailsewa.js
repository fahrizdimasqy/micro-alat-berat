const express = require('express');
const router = express.Router();

const verifyToken = require('../middlewares/verifyToken')
const detailHandler = require('./handler/detailSewa');


router.get('/detail', detailHandler.getDetail)

module.exports =router;