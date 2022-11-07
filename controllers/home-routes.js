//DECLARATIONS: router, db connection, model object ---------------------
const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Search } = require('../models');

//HOME ROUTES ===============================================
router.get('/', (req, res) => {
    if (!req.session.loggedIn) {
        res.render('homepage', { loggedIn: false });
    } else {
        User.findOne({
            where: { id: req.session.user_id },
            attributes: ['id','username','email'],
            include: {
                model: Search,
                attributes: ['id','product_name']
            }
        })
            .then(dbData => {
                const loggedInUser = dbData.get({ plain: true });
                console.log('==================');
                console.log(loggedInUser);
                console.log('==================');
                res.render('homepage', { 
                    loggedInUser,
                    loggedIn: req.session.loggedIn   
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    }
    
});

router.get('/login', (req, res) =>{
    res.render('login');
})

module.exports = router;