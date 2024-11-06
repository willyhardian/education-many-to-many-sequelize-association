"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert("Users", [
            {
                name: "John Doe",
                email: "johndoe@example.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Jane Smith",
                email: "janesmith@example.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Alice Johnson",
                email: "alicejohnson@example.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete("Users", null, {});
    },
};
