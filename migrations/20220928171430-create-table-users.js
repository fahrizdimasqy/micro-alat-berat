'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            gender: {
                type: Sequelize.STRING,
                allowNull: false
            },
            no_tlp: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            role: {
                type: Sequelize.ENUM,
                values: ['admin', 'customer'],
                allowNull: false
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            }

        });

        await queryInterface.addConstraint('users', {
            type: 'unique',
            fields: ['email'],
            name: 'UNIQUE_USERS_EMAIL'
        });
    },


    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('users');
    }
};