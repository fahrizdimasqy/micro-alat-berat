'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('types', [{
        kode_type:"T01",
        nama: 'Traktor',
        ket: 'Alat berat traktor umumnya ditemui di industri pertanian yang berguna untuk membajak atau menggemburkan tanah. '
      },
      {
        kode_type:"T02",
        nama: 'Excavator',
        ket: 'Excavator disebut juga dengan nama bego atau beko. Excavator banyak digunakan dalam beragam industri karena fungsinya yang beragam. Alat berat yang satu ini digunakan untuk menggali tanah, meratakan tanah atau jalan, dan memindahkan material. '
      },
      {
        kode_type:"T03",
        nama: 'Bulldozer',
        ket: 'Bulldozer adalah alat berat beroda rantai yang memiliki fungsi mengolah lahan seperti meratakan tanah, mendorong tanah ke berbagai arah. '
      },
      {
        kode_type:"T04",
        nama: 'Crane',
        ket: 'Crane adalah alat berat yang mencolok dan sering ditemui pada pembangunan suatu gedung. Fungsinya untuk memindahkan material dari bawah ke atas dan dari atas ke bawah.    '
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('types', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
