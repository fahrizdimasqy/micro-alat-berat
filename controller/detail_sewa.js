const model = require('../models/index');
const axios = require('axios');

const getDetailSewa = async (req, res) => {
    try {

        const detail_sewa = await model.detail_sewa.findAll({
            raw: true,
            nest: true,
            attributes: {
                exclude: ['id', 'createdAt', 'updatedAt']
            }
        });

        let alatBerat = await axios.get('https://alat-berat-service.herokuapp.com/alatberat')
        alatBerat = alatBerat.data.data
        

        for (let i=0; i<detail_sewa.length; i++) {
            for (let j=0; j<alatBerat.length; j++) {
                if (detail_sewa[i].id_alat_berat == alatBerat[j].id) {
                    detail_sewa[i].merk_barang = alatBerat[j].merk
                    detail_sewa[i].denda_barang = alatBerat[j].denda
                    detail_sewa[i].harga_barang = alatBerat[j].harga
                    detail_sewa[i].total_harga = alatBerat[j].harga * detail_sewa[i].jumlah_barang
                    detail_sewa[i].total_denda = alatBerat[j].denda * detail_sewa[i].jumlah_barang

                }
            }
        }
       
        if (detail_sewa.length !== 0) {
            res.json({
                'status': 'OK',
                'messages': '',
                'data': {
                    "detail_sewa": detail_sewa,
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

