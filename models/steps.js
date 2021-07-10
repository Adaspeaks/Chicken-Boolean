const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Steps extends Model {}

Steps.init(
  {
    id: {
      type: DataTypes.INTEGER,
      AllowNull: false,
      primaryKey: true,
      references: {
        model: "recipe",
        key: "id",
      },
    },
    number: {
      type: DataTypes.INTEGER,
      AllowNull: false,
    },
    instruction: {
      type: DataTypes.STRING,
      AllowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "steps",
  }
);

module.exports = Steps;
