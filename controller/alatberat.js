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
        if (alat.length !== 0) {
            res.json({
                'status': 'OK',
                'messages': '',
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
        console.log(url, url_json)
        const output = await jm(req.body, url_json);
        console.log(output)
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
        const foto_alat = await req.file;
        const {
            kode_type,
            merk,
            status,
            harga,
            denda,
            operator,
            bbm,
            gambar,
            ket
        } = req.body;
        const alat = await model.alat_berat.update({
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

            }

        );
        const url = await req.protocol + "//" + req.get('host') + "/images" + foto_alat.filename;
        const url_json = await {
            url: url
        }
        const output = await jm(alat, url_json);
        console.log(output)

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
        const alat = await model.alat_berat.destroy({
            where: {
                id: id
            }
        });
        if (alat) {
            res.status(200).json({
                'status': 'OK',
                'messages': 'Alat Berat Behasil di hapus',
                'data': alat
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
                'data': alat
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
    getAllAlat,
    postAlat,
    editAlat,
    deleteAlat,
    getAlatById
};