const User = require('./User');
const Recipe = require('./recipes')
const Steps = require('./steps')

User.hasMany(Recipe,{
    foreignKey: `user_id`,
    onDelete: 'CASCADE',
});

Recipe.belongsTo(User,{
    foreignKey: 'user_id'
});

Recipe.hasMany(Steps,{
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE',
});

Steps.belongsTo(Recipe, {
    foreignKey: 'recipe_id'
});

module.exports = { User, Recipe, Steps };
