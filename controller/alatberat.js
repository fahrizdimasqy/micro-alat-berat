const model = require('../models/index');
const axios = require('axios');
const type = require('../models/type');
const {
    json,
    response
} = require('express');
const upload = require('../helper/uploader');
const jm = require('jmerger')
const server = "http://localhost:3000"


const getAllAlat = async (req, res) => {
      try {

        const alat = await model.alat_berat.findAll({
            raw: true,
            nest: true
        });
        let kode = await axios
            .get('http://localhost:3000/type')
            .then(res => {
                let kode = res.data.data
                return kode;
            })

        alat.forEach(e => {
            kode.forEach(i => {
                if (e.kode_type == i.kode_type) {
                    e.kode_type = i;
                    return;
                }
            })
            if(e.gambar){
            gambar = e.gambar.replaceAll(" ", "%20");
            url = server+ "/alat-berat/img/" + gambar;
            e.gambar = url;}
        });

        if (alat.length !== 0) {
            res.json({
                'status': 'OK',
                'messages': 'Get Data Success',
                'data': alat
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

const postAlat = async (req, res) => {
    try {

        // console.log(req.body)
        const {
            kode_type,
            merk,
            status,
            harga,
            denda,
            operator,
            bbm,
            gambar,
            ket,
            url_gambar
        } = req.body;

        const alat = await model.alat_berat.create({
            kode_type: kode_type,
            merk: merk,
            status: status,
            harga: harga,
            denda: denda,
            operator: operator,
            bbm: bbm,
            gambar: gambar,
            ket: ket
        });

        // alat.kode_type=kode;
        // // console.log(output)
        if (alat) {
            res.status(201).json({
                'status': 'OK',
                'messages': 'ALat Berat berhasil ditambah',
                'data': {
                    id: alat.id,
                    kode_type: alat.kode_type,
                    merk: alat.merk,
                    status: alat.status,
                    harga: alat.harga,
                    denda: alat.denda,
                    operator: alat.operator,
                    bbm: alat.bbm,
                    gambar: alat.gambar,
                    ket: alat.ket,
                    url_gambar: req.body.url_gambar

                }
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "Ada kesalahan",
            error: err,
        });
    }

};

const editAlat = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(req.body)

        const {
            kode_type,
            merk,
            status,
            harga,
            denda,
            operator,
            bbm,
            gambar,
            ket,
            url_gambar
        } = req.body;

        const alat = await model.alat_berat.update({
            kode_type: kode_type,
            merk: merk,
            status: status,
            harga: harga,
            denda: denda,
            operator: operator,
            bbm: bbm,
            gambar: gambar,
            ket: ket
        }, {
            where: {
                id: id
            }
        });
    if (alat) {
        res.status(201).json({
            'status': 'OK',
            'messages': 'ALat Berat berhasil diedit',
            'data': {
                id: req.params.id,
                kode_type: req.body.kode_type,
                merk: req.body.merk,
                status: req.body.status,
                harga: req.body.harga,
                denda: req.body.denda,
                operator: req.body.operator,
                bbm: req.body.bbm,
                gambar: req.body.gambar,
                ket: req.body.ket,
                url_gambar: req.body.url_gambar

            }
        })
    }
} catch (err) {
    res.status(500).json({
        message: "Ada kesalahan",
        error: err,
    });
}

};

const deleteAlat = async (req, res) => {
    try {
        const id = req.params.id;
        const check = await model.alat_berat.findOne({
            where: {
                id: id
            }
        });

        if (check) {

            const idkode = check.kode_type;
            let kode = await show_type(idkode);
            check.kode_type = kode;
            const alat = await model.alat_berat.destroy({
                where: {
                    id: id
                }
            });
            res.status(200).json({
                'status': 'OK',
                'messages': 'Alat Berat Behasil di hapus',
                'data': check
            })
        } else {
            res.status(404).json({
                'status': 'not found',
                'messages': 'Alat Berat tidak ditemukan',
                'id': id
            })
        }

    } catch (err) {
        res.status(500).json({
            message: "Ada kesalahan",
            error: err,
        });
    }
};

const getAlatById = async (req, res) => {
    try {
        const idparams = req.params.id;
        const alat = await model.alat_berat.findOne({
            where: {
                id: idparams
            }
        });

        const idkode = alat.kode_type;
        let kode = await show_type(idkode);
        alat.kode_type = kode;
        let gambar = alat.gambar.replaceAll(" ", "%20");
        url = server+ "/alat-berat/img/" + gambar;
        alat.gambar = url;
        if (alat) {
            res.status(200).json({
                'status': 'OK',
                'messages': 'Alat Berat ditemukan',
                'data': alat
            })
        } else {
            res.status(404).json({
                'status': 'not found',
                'messages': 'Alat Berat tidak ditemukan',
                'id': id
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "Ada kesalahan",
            error: err,
        });
    }
};


const show_type = async (idkode) => {
    let kode = await axios
        .get('http://localhost:3000/type/id/' + idkode)
        .then(res => {
            let kode = res.data.data
            let kode_json = {
                kode_type: kode.kode_type,
                nama_type: kode.nama,
                ket_type: kode.ket

            }
            return kode_json;
        })
        
    return kode;
}



module.exports = {
    getAllAlat,
    postAlat,
    editAlat,
    deleteAlat,
    getAlatById
};