'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('alat_berats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      kode_type: {
        allowNull: false,
        type: Sequelize.STRING(80)
      },
      merk: {
        allowNull: false,
        type: Sequelize.STRING(80)
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      harga: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      denda: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      operator: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },
      bbm: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      gambar: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      ket: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('alat_berats');
  }
};