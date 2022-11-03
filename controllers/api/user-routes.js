//DECLARATIONS: router, model object ------------
const router = require('express').Router();
const { User, Search } = require('../../models');

//USER ROUTES ======================================
//create new user
router.post('/', (req, res) => {
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
});

//EXPORT ROUTER ----------------
module.exports = router;