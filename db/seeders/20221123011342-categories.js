'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Categories', [{
        name: 'cartoons',
        createdAt: '2022-11-22',
        updatedAt: '2022-11-22',
      },
      {
        name: 'drama',
        createdAt: '2022-11-22',
        updatedAt: '2022-11-22',
      },
      {
        name: 'sitcoms',
        createdAt: '2022-11-22',
        updatedAt: '2022-11-22',
      },], {});
  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
