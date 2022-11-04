//DECLARATIONS: router, model object ------------
const router = require('express').Router();
const { User, Search } = require('../../models');

//USER ROUTES: /api/users ======================================
//get all users, includes searches: /api/users/
router.get('/', (req, res) => {
    User.findAll({
        attributes: ['id','username','email','password','account_status'],
        include: {
            model: Search,
            attributes: ['id','product_name']
        }
    })
        .then(dbData => res.json(dbData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//get user by id, includes searches: /api/users/:id
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: ['id','username','email','password','account_status'],
        where: { id: req.params.id },
        include: {
            model: Search,
            attributes: ['id','product_name']
        }
    })
        .then(dbData => {
            if (!dbData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//create new user: /api/users/
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbData => res.json(dbData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//update user: /api/users/:id
router.put('/:id', (req, res) => {
    User.update(req.body, {
        where: { id: req.params.id }
    })
        .then(dbData => {
            if(!dbData[0]) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// delete user: /api/users/:id
router.delete('/:id', (req, res) =>{
    User.destroy({
        where: { id: req.params.id }
    })
    .then(dbData => {
        if(!dbData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//EXPORT ROUTER ----------------
module.exports = router;