const model = require('../models/index');
const axios = require('axios');
var port = 3000
var db = require('./routes/connection')
var bodyParser = require('body-parser')

app.use(express.json());
app.use(bodyParser.urlencoded({ 
    extended: true 
}));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


const getDetailSewa = async (req, res) => {
    try {

        const detail_sewa = await model.detail_sewa.findAll({
            raw: true,
            nest: true
        });
        db.query("SELECT id_detail_sewa, id_sewa, id_alat_berat, merk_barang, jumlah_barang FROM detail_sewa", (err, result) =>{
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
        let merk = await axios
            .get('http://localhost:3000/merk')
            .then(res => {
                let merk = res.data.data
                return merk;
            })
        
        let harga = await axios
            .get('http://localhost:3000/harga')
            .then(res => {
                let harga = res.data.data
                return harga;
            })    

        let denda = await axios
            .get('http://localhost:3000/denda')
            .then(res => {
                let denda = res.data.data
                return denda;
            })
            
        if (detail_sewa.length !== 0) {
            res.json({
                'status': 'OK',
                'messages': '',
                'data': {
                    "detail_sewa": detail_sewa,
                    "merk": merk,
                    "harga": harga,
                    "denda": denda
                }                 
            })
        } else {
            res.json({
                'status': 'ERROR',
                'messages': 'EMPTY',
                'data': {}
            })
        }

    } catch (err) {
        res.status(500).json({
            message: "Ada kesalahan",
            error: err,
        });
    }
};

const postJumlahBarang = async (req, res) => {
    try {
        const {
            jumlah_barang
        } = await req.body;

        const jumlahBarang = await model.detail_sewa.create({
            jumlah_barang: jumlah_barang
        });
        // console.log(url, url_json)
        const output = await jm(req.body, url_json);
        console.log(output)
        if (jumlahBarang) {
            res.status(201).json({
                'status': 'OK',
                'messages': 'Alat Berat berhasil ditambah',
                'data': output
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "Ada kesalahan",
            error: err,
        });
    }
};

const postTotalHarga = async (req, res) => {
    try {
        const {
            total_harga
        } = await req.body;

        const totalHarga = await model.detail_sewa.create({
            total_harga: jumlah_barang * harga,
            total_harga: total_harga
        });

        // console.log(url, url_json)
        const output = await jm(req.body, url_json);
        console.log(output)
        if (totalHarga) {
            res.status(201).json({
                'status': 'OK',
                'messages': 'Alat Berat berhasil ditambah',
                'data': output
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "Ada kesalahan",
            error: err,
        });
    }
};

const postTotalDenda = async (req, res) => {
    try {
        const {
            total_denda
        } = await req.body;

        const totalDenda = await model.detail_sewa.create({
            total_denda: denda
        });

        // console.log(url, url_json)
        const output = await jm(req.body, url_json);
        console.log(output)
        if (totalDenda) {
            res.status(201).json({
                'status': 'OK',
                'messages': 'Alat Berat berhasil ditambah',
                'data': output
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "Ada kesalahan",
            error: err,
        });
    }
};

const postStatusSewa = async (req, res) => {
    try {
        const {
            status_sewa
        } = await req.body;

        const statusSewa = await model.detail_sewa.create({
            status_sewa: status_sewa
        });
        // console.log(url, url_json)
        const output = await jm(req.body, url_json);
        console.log(output)
        if (statusSewa) {
            res.status(201).json({
                'status': 'OK',
                'messages': 'Alat Berat berhasil ditambah',
                'data': output
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "Ada kesalahan",
            error: err,
        });
    }
};

module.exports = {
    getDetailSewa,
    postJumlahBarang,
    postTotalHarga,
    postTotalDenda,
    postStatusSewa
};

