const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      AllowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      AllowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      AllowNull: false,
    },
    readyInMinutes: {
      type: DataTypes.INTEGER,
      AllowNull: false,
    },
    is_vegetarian: {
      type: DataTypes.BOOLEAN,
      AllowNull: false,
    },
    is_vegan: {
      type: DataTypes.BOOLEAN,
      AllowNull: false,
    },
    is_glutenFree: {
      type: DataTypes.BOOLEAN,
      AllowNull: false,
    },
    is_dairyFree: {
      type: DataTypes.BOOLEAN,
      AllowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "recipe",
  }
);

module.exports = Recipe;
