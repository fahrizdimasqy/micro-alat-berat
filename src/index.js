const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const {db} = require('./model/dbConnection'); 
const moment = require('moment');
const axios = require('axios');
var mergeJSON = require("merge-json") ;
const multer = require('multer');
const { constants } = require('buffer');

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './src/assets/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "--" + file.originalname);
    },
});
const upload = multer({ storage: fileStorageEngine });

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'assets')));

//GET db sewa (WORK)
app.get("/api/readData", (req, res) =>{
    const sqlQuery = "SELECT * from sewa";

    db.query(sqlQuery, (err, result) =>{
        if (err) {
            return res.status(500).json({
                message: "Ada kesalahan",
                error: err,
            });
        }
        else{
            let buktipembayaran, buktipembayarandenda;
            result.forEach(e => {
                if (e.bukti_pembayaran){
                buktipembayaran = e.bukti_pembayaran;
                buktipembayaran= buktipembayaran.replaceAll(" ", "%20");
                e.bukti_pembayaran = req.protocol + "://" + req.get("host") + "/" + buktipembayaran;
                }
                
                if(e.bukti_pembayaran_denda){
                buktipembayarandenda = e.bukti_pembayaran_denda;
                buktipembayarandenda.replaceAll(" ", "%20");
                e.bukti_pembayaran_denda = req.protocol + "://" + req.get("host") + "/" + buktipembayarandenda;
                }
               
            });
            res.send(result);
            console.log(result);

        }
    });
});

//POST Pengajuan (WORK)
app.post("/api/createPengajuan", (req, res) =>{
    const id_customer = req.body.id_customer;
    let tanggal_sewa = req.body.tanggal_sewa;
    let tanggal_pengembalian = req.body.tanggal_pengembalian;
    const tanggal_pengajuan = moment().format("YYYY-MM-DD");
    const status_peminjaman = 'Disetujui';
    
    const sqlQuery = "INSERT INTO sewa (id_customer, tanggal_sewa, tanggal_pengembalian, tanggal_pengajuan, status_peminjaman) VALUE (?, ?, ?, ?, ?)";
    db.query(sqlQuery, [id_customer, tanggal_sewa, tanggal_pengembalian, tanggal_pengajuan, status_peminjaman], (err, result) =>{
        if (err) {
            return res.status(500).json({
                message: "Ada kesalahan",
                error: err,
            });
        }
        else{
            res.send(result);
            console.log(result);
        }
    });
});

//POST Status (WORK)
// app.post("/api/createStatus", (req, res) =>{
//     const status_peminjaman = req.body.status_peminjaman;
//     const status_pembayaran = req.body.status_pembayaran;
//     const status_pembayaran_denda = req.body.status_pembayaran_denda;
    
//     const sqlQuery = "INSERT INTO sewa (status_peminjaman, status_pembayaran, status_pembayaran_denda) VALUE (?, ?, ?)";
//     db.query(sqlQuery, [status_peminjaman, status_pembayaran, status_pembayaran_denda], (err, result) =>{
//         if (err) {
//             return res.status(500).json({
//                 message: "Ada kesalahan",
//                 error: err,
//             });
//         }
//         else{
//             res.send(result);
//             console.log(result);
//         }
//     });
// });

//PUT update Status (WORK)
// app.put("/api/updateStatus", (req, res) =>{

//     const status_peminjaman = req.body.status_peminjaman;
//     const status_pembayaran = req.body.status_pembayaran;
//     const status_pembayaran_denda = req.body.status_pembayaran_denda;
//     const id_sewa = req.body.id_sewa;
//     let result;
//     const sqlQuery = "UPDATE sewa SET status_peminjaman = ?, status_pembayaran = ?, status_pembayaran_denda = ? WHERE id_sewa = ?";
//     db.query(sqlQuery, [status_peminjaman, status_pembayaran, status_pembayaran_denda, id_sewa], (err, result) =>{
//         if (err) {
//             return res.status(500).json({
//                 message: "Ada kesalahan",
//                 error: err,
//             });
//         }
//         else{
//             res.send(result);
//             console.log(result);
//         }
//     });
// });

//PUT update bukti pembayaran (WORK)
app.put("/buktipembayaran", upload.fields([{name: "pembayaran"}]), (req, res) =>{
    let buktipembayaran;
    let bukti_pembayaran;

    if(req.files.pembayaran){
        bukti_pembayaran =  req.files.pembayaran[0].filename;
        buktipembayaran = req.protocol + "://" + req.get("host") + "/" + bukti_pembayaran;
    }
        const status_pembayaran = "Pembayaran Berhasil";
        const id_sewa = req.body.id_sewa;
        const sqlQuery = "UPDATE sewa SET bukti_pembayaran = ?, status_pembayaran = ? WHERE id_sewa = ?";
        db.query(sqlQuery, [bukti_pembayaran, id_sewa, status_pembayaran], (err, result) =>{
            if (err) {
                return res.status(500).json({
                    message: "Ada kesalahan",
                    error: err,
                });
            }
            else{
                res.json({
                    status: "sukses",
                    id: id_sewa,
                    bayar: bukti_pembayaran,
                    buktipembayaran: buktipembayaran,
                    statuspembayaran: status_pembayaran,
                });
            
                console.log(result);
            }
        });
    });

//GET db sewa by id_sewa(work)
app.get('/readDataUser/:id_sewa', (req, res) =>{
    const id_sewa = req.params.id_sewa;

    const sqlQuery = "SELECT * FROM sewa WHERE id_sewa = ?";
    const sqlQuery2 = "SELECT * FROM detail_sewa WHERE id_sewa = ?";

    db.query(sqlQuery, id_sewa, async (err, result) =>{
        if (err) {
            return res.status(500).json({
                message: "Ada kesalahan",
                error: err,
            });
        }else{
            await db.query(sqlQuery2, id_sewa,  async(err, result2) =>{
                if (err) {
                    return res.status(500).json({
                        message: "Ada kesalahan",
                        error: err,
                    });
                }else{
                    let customer = await show_customer(result[0].id_customer)
                    result[0].id_customer=customer;
                    const output={
                        data_transaksi : result,
                        data_alat_disewa : result2 };
                    // let output = mergeJSON.merge(result, alat_disewa) ;
                    res.send(output);
                }
            });
        }
    });
});



const show_customer = async (id_customer) => {
    let customer = await axios
    .get('http://localhost:4000/users/' + id_customer)
    .then(res => {
        let customer = res.data.data
        return customer
    })
    return customer;
}


// //GET db sewa by id_sewa(work)
// const show_alatberat = async (id_alat_berat) => {
//     let alatberat = await axios
//     .get('https://alat-berat-service.herokuapp.com/alatberat' + id_alat_berat)
//     .then(res => {
//         let alatberat = res.data.data
//         return alatberat
//     })
//     return alatberat;
// }

//     db.query(sqlQuery, id_alat_berat, async (err, result) =>{
//         if (err) {
//             return res.status(500).json({
//                 message: "Ada kesalahan",
//                 error: err,
//             });
//         }else{
//             let alatberat = await show_alatberat(result[0].id_alat_berat)
//             result[0].id_alat_berat=alatberat;
//             const output={
//                 data_transaksi : result,
//                 // let output = mergeJSON.merge(result, alat_disewa) ;
//                 res.send(output);
//             }
//         });


app.listen(1000, () => {
    console.log('Server running in port 1000..');
});

