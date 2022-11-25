'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Channels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Channels.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logo_url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category_id: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Channels',
  });
  return Channels;
};