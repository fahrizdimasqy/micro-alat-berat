'use strict';
const bcrypt = require('bcrypt');

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('users', [{
                name: "Fahriz",
                gender: 'Laki-laki',
                no_tlp: '08xxx',
                email: "fahriz@gmail.com",
                password: await bcrypt.hash('rahasia1234', 10),
                role: "admin",
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: "Dimas",
                gender: 'Laki-laki',
                no_tlp: '08xxx',
                email: "dimas@gmail.com",
                password: await bcrypt.hash('rahasiaku123', 10),
                role: "customer",
                created_at: new Date(),
                updated_at: new Date()
            }
        ]);
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('People', null, {});

    }
};