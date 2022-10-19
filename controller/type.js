const model = require('../models/index');


const getAllType = async (req, res) => {
    try {
        const type = await model.type.findAll({});
        if (type.length !== 0) {
            res.json({
                'status': 'OK',
                'messages': '',
                'data': type
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

const postType = async (req, res) => {
    try {
        const {
            kode_type,
            nama,
            ket
        } = req.body;
        const type = await model.type.create({
            kode_type: kode_type,
            nama: nama,
            ket: ket
        });
        if (type) {
            res.status(201).json({
                'status': 'OK',
                'messages': 'type Berat berhasil ditambah',
                'data': type
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "Ada kesalahan",
            error: err,
        });
    }
};

const editType = async (req, res) => {
    try {
        const id = req.params.id;
        const {
            nama,
            ket
        } = req.body;
        const type = await model.type.update({
            nama: nama,
            ket: ket
        }, {
            where: {
                kode_type: id
            }
        });
        if (type) {
            res.status(201).json({
                'status': 'OK',
                'messages': 'type Berat Behasil di update',
                'data': type
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "Ada kesalahan",
            error: err,
        });
    }
};

const deleteType = async (req, res) => {
    try {
        const id = req.params.id;


        let check = await model.type.findOne({
            where: {
                kode_type: id
            }
        });

        if (check) {
            const type = await model.type.destroy({
                where: {
                    kode_type: id
                }
            });
            res.status(200).json({
                'status': 'OK',
                'messages': 'type Berat Behasil di hapus',
                'data': check
            })
        } else {
            res.status(404).json({
                'status': 'Not FOund',
                'messages': 'type Alat Berat tidak ditemukan',
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

const getTypeById = async (req, res) => {
    try {
        const id = req.params.id;
        let type = await model.type.findOne({
            where: {
                kode_type: id
            }
        });

        if (type) {
            res.status(200).json({
                'status': 'OK',
                'messages': 'type Berat ditemukan',
                'data': type
            })
        } else {
            res.status(404).json({
                'status': 'not found',
                'messages': 'type Berat tidak ditemukan',
                'data': type
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
    getAllType,
    postType,
    editType,
    deleteType,
    getTypeById
};