const express = require('express');
const router = express.Router();
const multer = require('multer');
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './media/transaksi/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "--" + file.originalname);
    },
});
const upload = multer({ storage: fileStorageEngine });

const verifyToken = require('../middlewares/verifyToken')
const sewaHandler = require('./handler/sewa');


router.get('/api/readData', sewaHandler.getdbsewa);
router.get('/readDataUser/:id_sewa', sewaHandler.getsewabyid);

router.post('/detailsewa', verifyToken, sewaHandler.postdetailsewa);
router.post('/api/createPengajuan', verifyToken, sewaHandler.inputpengajuan);
router.put('/buktipembayaran', upload.single("pembayaran"), verifyToken, sewaHandler.buktipembayaran);




module.exports =router;