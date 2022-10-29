const model = require('../models/index');
const axios = require('axios');
const type = require('../models/type');
const {
    json,
    response
} = require('express');
const upload = require('../helper/uploader');
const jm = require('jmerger')

const getAllAlat = async (req, res) => {
    try {
        const alat = await model.alat_berat.findAll({
            raw: true,
            nest: true
        });
        let kode = await axios
            .get('https://alat-berat-service.herokuapp.com/type')
            .then(res => {
                let kode = res.data.data
                return kode;
            })

        // const coba = `coba${alat}`;
        // console.log(coba)

        alat.forEach(e => {
            kode.forEach(i => {
                if (e.kode_type == i.kode_type) {
                    e.kode_type = i;
                    return;
                }
            })
            let gambar = e.gambar.replaceAll(" ", "%20");
            const url = req.protocol + "://" + req.get('host') + "/images/" + gambar;
            e.gambar = url;
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
        const {
            kode_type,
            merk,
            status,
            harga,
            denda,
            operator,
            bbm,
            ket
        } = await req.body;
        const foto_alat = await req.file;

        const alat = await model.alat_berat.create({
            kode_type: kode_type,
            merk: merk,
            status: status,
            harga: harga,
            denda: denda,
            operator: operator,
            bbm: bbm,
            gambar: foto_alat.filename,
            ket: ket
        });
        filenameUrl = foto_alat.filename.replaceAll(" ", "%20")
        const url = await req.protocol + "://" + req.get('host') + "/images/" + filenameUrl;
        const url_json = await {
            url: url
        }

        
        let kode = await show_type(alat.kode_type);
        // console.log(kode)
        alat.kode_type=kode;
        const output = await jm(alat, url_json);
        // console.log(output)
        if (alat) {
            res.status(201).json({
                'status': 'OK',
                'messages': 'ALat Berat berhasil ditambah',
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

const editAlat = async (req, res) => {
    try {
        const id = req.params.id;
        let foto_alat, alat;
        if (req.file) {
            foto_alat = await req.file;
        }
        const {
            kode_type,
            merk,
            status,
            harga,
            denda,
            operator,
            bbm,
            ket
        } = req.body;
        if (foto_alat) {
            alat = await model.alat_berat.update({
                kode_type: kode_type,
                merk: merk,
                status: status,
                harga: harga,
                denda: denda,
                operator: operator,
                bbm: bbm,
                gambar: foto_alat.filename,
                ket: ket
            }, {
                where: {
                    id: id
                }
            });
        } else {
            alat = await model.alat_berat.update({
                kode_type: kode_type,
                merk: merk,
                status: status,
                harga: harga,
                denda: denda,
                operator: operator,
                bbm: bbm,
                ket: ket
            }, {
                where: {
                    id: id
                }
            });
        }


        let kode = await show_type(req.body.kode_type);
        req.body.kode_type = kode;

        const url = await req.protocol + "//" + req.get('host') + "/images" + foto_alat.filename;
        const id_json = {
            id: id
        }
        const url_json = await {
            url: url
        }
        const output = await jm(id_json, req.body, url_json);

        if (alat) {
            res.status(201).json({
                'status': 'OK',
                'messages': 'Alat Berat Behasil di update',
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
        const url = req.protocol + "://" + req.get('host') + "/images/" + gambar;
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
        .get('https://alat-berat-service.herokuapp.com/type/id/' + idkode)
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