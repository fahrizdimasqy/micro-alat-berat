const model = require('../models/index');
const axios = require('axios');

const getDetailSewa = async (req, res) => {
    try {

        const detail_sewa = await model.detail_sewa.findAll({
            raw: true,
            nest: true
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

module.exports = {
    getDetailSewa,
};

