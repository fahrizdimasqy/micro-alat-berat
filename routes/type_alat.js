const express = require('express');
const router = express.Router();

const verifyToken = require('../middlewares/verifyToken')
const typeAlattHandler = require('./handler/type_alatberat');


router.get('/', typeAlattHandler.getAllType);
router.post('/', verifyToken,typeAlattHandler.inputType);
router.get('/id/:id', typeAlattHandler.getTypeById);
router.put('/id/:id', verifyToken, typeAlattHandler.editType);
router.delete('/id/:id', verifyToken, typeAlattHandler.deleteType);


module.exports =router;