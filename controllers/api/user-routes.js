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
        .then(dbData => {
            //session.save() declare variables for the user session here
            //I think ^
            req.session.save(() => {
                req.session.user_id = dbData.id;
                req.session.email = dbData.email;
                req.session.loggedIn = true;

                res.json(dbData);
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//create user login: /api/users/login
//EXPECTS FROM BODY: {email: 'userEmail@email.com', password: 'usersPassword'}
router.post('/login', (req,res) => {
    User.findOne({
        where: { email: req.body.email }
    })
        .then(dbData => {
            if (!dbData) {
                res.status(400).json({ message: 'No user with that email address!' });
                return;
            }
            //check the password in req.body
            const validPw = dbData.checkPassword(req.body.password);
            if (!validPw) {
                res.status(400).json({ message: 'Invalid Password!' });
                return;
            }
            //save user's session
            req.session.save(() => {
                req.session.user_id = dbData.id;
                req.session.email = dbData.email;
                req.session.loggedIn = true;

                res.json({ user: dbData, message: "You are logged in!" });
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//user logout: /api/users/logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

//update user: /api/users/:id
router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
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