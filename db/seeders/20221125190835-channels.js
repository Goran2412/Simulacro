'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Channels', [{
      name: 'Disney Channel',
      logo_url: 'dchannel.jpg',
      category_id: 'Local',
      createdAt: '2022-11-25',
      updatedAt: '2022-11-25'
     },
     {
      name: 'Fox',
      logo_url: 'fox.jpg',
      category_id: 'NoSeQueSeriaEsto',
      createdAt: '2022-11-25',
      updatedAt: '2022-11-25'
     },
     {
      name: 'Cartoon Network',
      logo_url: 'cartoon.jpg',
      category_id: 'QuieroAprobar',
      createdAt: '2022-11-25',
      updatedAt: '2022-11-25'
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
