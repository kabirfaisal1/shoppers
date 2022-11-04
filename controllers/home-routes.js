//DECLARATIONS: router, db connection, model object --------------
const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Search } = require('../models');

//HOME ROUTES =============================================


//EXPORT ROUteR -----------------------------------------
module.exports = router;