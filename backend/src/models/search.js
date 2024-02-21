'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Search extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Search.init({
    userId: { type: DataTypes.INTEGER, allowNull: false},
    result: { type: DataTypes.JSONB, allowNull: false},
    searchTerm: { type: DataTypes.STRING, allowNull: false}
  }, {
    sequelize,
    modelName: 'Search',
  });
  return Search;
};