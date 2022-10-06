'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class alat_berat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  alat_berat.init({
    kode_type: DataTypes.INTEGER,
    merk: DataTypes.STRING,
    status: DataTypes.STRING,
    harga: DataTypes.BIGINT,
    denda: DataTypes.BIGINT,
    operator: DataTypes.STRING,
    bbm: DataTypes.STRING,
    gambar: DataTypes.STRING,
    ket: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'alat_berat',
  });
  return alat_berat;
};