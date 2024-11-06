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
        await queryInterface.bulkInsert("UserProjects", [
            {
                UserId: 1, // John Doe
                ProjectId: 1, // Project Alpha
                role: "Lead Developer",
                hoursWorked: 150,
                startDate: "2024-01-01",
                endDate: "2024-06-01",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                UserId: 2, // Jane Smith
                ProjectId: 2, // Project Beta
                role: "Project Manager",
                hoursWorked: 120,
                startDate: "2024-02-01",
                endDate: "2024-08-01",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                UserId: 3, // Alice Johnson
                ProjectId: 3, // Project Gamma
                role: "Frontend Developer",
                hoursWorked: 100,
                startDate: "2024-03-01",
                endDate: "2024-12-01",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                UserId: 1, // John Doe
                ProjectId: 2, // Project Beta
                role: "Backend Developer",
                hoursWorked: 80,
                startDate: "2024-02-01",
                endDate: "2024-08-01",
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
        await queryInterface.bulkDelete("UserProjects", null, {});
    },
};
