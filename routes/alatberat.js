const express = require('express');
const router = express.Router();

const verifyToken = require('../middlewares/verifyToken')
const alatberatHandler = require('./handler/alatberat');


router.get('/', alatberatHandler.getAllAlat);
router.get('/id/:id', alatberatHandler.getAlatByid)
router.post('/', alatberatHandler.inputAlat);

module.exports =router;