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

    await queryInterface.bulkInsert("regencies", [
      {
        id_province: 2004,
        name: "perdagangan 3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_province: 1145,
        name: "Pematang Siantar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_province: 568,
        name: "Balige",
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
    await queryInterface.bulkDelete("regencies", null, {});
  },
};
