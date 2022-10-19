'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('alat_berats', [{
        "kode_type": "T01",
        "merk": "Massey Ferguson MF 5355",
        "status": "ready",
        "harga": 2000000,
        "denda": 250000,
        "operator": "Syamsudin",
        "bbm": "Solar",
        "gambar": "Traktor_Massey_Fergosen_MF_5355.jpg",
        "ket": "Fuel Capacity 33 gal 125 L",
    },
    {
      "kode_type": "T01",
      "merk": "Massey Ferguson MF 5355",
      "status": "ready",
      "harga": 2200000,
      "denda": 220000,
      "operator": "Syamsul",
      "bbm": "Solar",
      "gambar": "new-holland-ts6020.jpg",
  },
  {
    "kode_type": "T03",
    "merk": "Komatsu S6D125E-2",
    "status": "ready",
    "harga": 3500000,
    "denda": 400000,
    "operator": "Joko",
    "bbm": "Solar",
    "gambar": "S6D125E-2.jpg",
},
{
  "kode_type": "T03",
  "merk": "CAT D3K LGP",
  "status": "ready",
  "harga": 3600000,
  "denda": 400000,
  "operator": "Bagus Udin",
  "bbm": "Solar",
  "gambar": "CAT D3K LGP.jpg",
},
{
  "kode_type": "T02",
  "merk": "Excavator Komatsu PC200-7 ",
  "status": "ready",
  "harga": 3800000,
  "denda": 410000,
  "operator": "Asep",
  "bbm": "Solar",
  "gambar": "Excavator Komatsu PC200-7 .jpg",
},
{
  "kode_type": "T02",
  "merk": "Hitachi ZX210F-5G",
  "status": "ready",
  "harga": 3900000,
  "denda": 410000,
  "operator": "soleh",
  "bbm": "Solar",
  "gambar": "ZX210F-5G.jpg",
},
{
  "kode_type": "T04",
  "merk": "Crawler Crane CKL1000i",
  "status": "ready",
  "harga": 4400000,
  "denda": 450000,
  "operator": "Abdul",
  "bbm": "Solar",
  "gambar": "ZX210F-5G.jpg",
},

  
  ], {});
    /**
     * Add seed commands here.
     *
     * Example:
      await queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('alat-berats', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
