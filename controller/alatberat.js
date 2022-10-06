const model = require('../models/index');
const axios = require('axios');
const type = require('../models/type');
const { json, response } = require('express');

const getAllAlat =  async(req, res) => {
try{

    const alat = await model.alat_berat.findAll({});
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

}catch(err){
    res.status(500).json({
        message: "Ada kesalahan",
        error: err,
    });
}
};

const postAlat = async (req, res) => {
  try {
    const {kode_type, merk, status, harga, denda, operator, bbm, gambar, ket} = req.body;
    
    const alat = await model.alat_berat.create({
        kode_type : kode_type, merk:merk, status:status, harga:harga, denda:denda, operator:operator, bbm:bbm, gambar:gambar, ket:ket
    });
    if(alat){
        res.status(201).json({
            'status': 'OK',
            'messages': 'ALat Berat berhasil ditambah',
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

  const editAlat = async (req, res) => {
    try {
        const id = req.params.id;
        const {kode_type, merk, status, harga, denda, operator, bbm, gambar, ket} = req.body;
        const alat = await model.alat_berat.update({
            kode_type : kode_type, merk:merk, status:status, harga:harga, denda:denda, operator:operator, bbm:bbm, gambar:gambar, ket:ket
        },{ 
        where: {
            id: id
        }
      }
      );
      if(alat){
          res.status(201).json({
              'status': 'OK',
              'messages': 'Alat Berat Behasil di update',
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

    const deleteAlat = async (req, res) => {
        try {
            const id = req.params.id;
            const alat = await model.alat_berat.destroy({
                where: {
                    id: id
                }
            }
          );
          if(alat){
              res.status(200).json({
                  'status': 'OK',
                  'messages': 'Alat Berat Behasil di update',
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
                }
              );
              if(alat){
                  res.status(200).json({
                      'status': 'OK',
                      'messages': 'Alat Berat ditemukan',
                      'data': alat
                  })
              }
              else{
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
  