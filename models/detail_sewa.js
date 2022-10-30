'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_sewa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  detail_sewa.init({
    id_detail_sewa: DataTypes.INTEGER,
    id_sewa: DataTypes.INTEGER,
    id_alat_berat: DataTypes.INTEGER,
    merk_barang: DataTypes.STRING,
    harga_barang: DataTypes.STRING,
    denda_barang: DataTypes.STRING,
    jumlah_barang: DataTypes.STRING,
    total_harga: DataTypes.INTEGER,
    total_denda: DataTypes.INTEGER,
    status_sewa: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'detail_sewa',
    tableName: 'detail_sewa',
  });
  return detail_sewa;
};
