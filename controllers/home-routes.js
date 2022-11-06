//DECLARATIONS: router, db connection, model object ---------------------
const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Search } = require('../models');

//HOME ROUTES ===============================================
router.get('/', (req, res) => {
    console.log('****************');
    console.log(req.session);
    console.log('****************');
    res.render('homepage', {loggedIn: req.session.loggedIn});
});

router.get('/login', (req, res) =>{
    res.render('login');
})

module.exports = router;