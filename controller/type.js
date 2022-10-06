const model = require('../models/index');


const getAllType =  async(req, res) => {
try{
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

}catch(err){
    res.status(500).json({
        message: "Ada kesalahan",
        error: err,
    });
}
};

const postType = async (req, res) => {
  try {
    const {nama, ket} = req.body;
    const type = await model.type.create({
        nama : nama, ket:ket});
    if(type){
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
        const {nama, ket} = req.body;
        const type = await model.type.update({
            nama : nama, ket:ket},{ 
        where: {
            id: id
        }
      }
      );
      if(type){
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
            const type = await model.type.destroy({
                where: {
                    id: id
                }
            }
          );
          if(type){
              res.status(200).json({
                  'status': 'OK',
                  'messages': 'type Berat Behasil di hapus',
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

        const getTypeById = async (req, res) => {
            try {
                const id = req.params.id;
                const type = await model.type.findOne({
                    where: {
                        id: id
                    }
                }
              );
              if(type){
                  res.status(200).json({
                      'status': 'OK',
                      'messages': 'type Berat ditemukan',
                      'data': type
                  })
              }
              else{
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
  