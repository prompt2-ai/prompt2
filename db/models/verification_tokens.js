'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class verification_tokens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  verification_tokens.init({
    expires: DataTypes.DATE,
    token: DataTypes.STRING(255),
    identifier: DataTypes.STRING(255)
  }, {
    sequelize,
    modelName: 'verification_tokens',
  });
  return verification_tokens;
};