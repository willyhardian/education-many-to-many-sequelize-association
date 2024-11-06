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
        await queryInterface.bulkInsert("Projects", [
            {
                title: "Project Alpha",
                description: "A groundbreaking project in AI development.",
                startDate: "2024-01-01",
                endDate: "2024-06-01",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: "Project Beta",
                description: "A revolutionary project in web development.",
                startDate: "2024-02-01",
                endDate: "2024-08-01",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: "Project Gamma",
                description: "An innovative approach to e-commerce systems.",
                startDate: "2024-03-01",
                endDate: "2024-12-01",
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
        await queryInterface.bulkDelete("Projects", null, {});
    },
};
