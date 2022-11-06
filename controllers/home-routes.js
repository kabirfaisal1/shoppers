//DECLARATIONS: router, db connection, model object ---------------------
const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Search } = require('../models');

//HOME ROUTES ===============================================
router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/login', (req, res) =>{
    res.render('login');
})

module.exports = router;