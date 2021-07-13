const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    readyInMinutes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_vegetarian: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    is_vegan: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    is_glutenFree: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    is_dairyFree: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
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
