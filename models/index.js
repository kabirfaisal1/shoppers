//DECLARATIONS: MODELS ------------------
const User = require('./User');
const Search = require('./Search');

//MODEL RELATIONSHIPS ========================
//user to search
User.hasMany(Search, {
    foreignKey: 'user_id'
});
//search to user
Search.belongsTo(User, {
    foreignKey: 'user_id'
});

//EXPORT MODEL OBJECT ----------------
module.exports = { User, Search };